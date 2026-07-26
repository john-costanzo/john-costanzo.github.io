// ==UserScript==
// @name         Dynamic Date Replacer
// @namespace    http://tampermonkey.net/
// @version      2026-07-26_10-09
// @description  Replace ${DATE "..."} placeholders with computed dates in Gmail
// @match        https://mail.google.com/*
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dynamic-date-replacer.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/dynamic-date-replacer.user.js
// @grant        none
// ==/UserScript==

( function( ) {
    'use strict';

    // Matches: ${DATE "format" "relative phrase"} OR ${DATE "format" +1D} OR ${DATE "relative phrase"}
    const pattern = /\$\{DATE(?:\s*"([^"]+)")?(?:\s*(?:"([^"]+)"|([+-]\d+)\s*(0?[YMWDhms])))?\}/g;

    const observer = new MutationObserver( debounce( ( mutations ) => {
        const nodesToProcess = [ ];

        for ( const mutation of mutations ) {
            for ( const node of Array.from( mutation.addedNodes ) ) {
                if ( node.nodeType === Node.TEXT_NODE ) {
                    if ( isInsideEditable( node ) && ( node.nodeValue || '' ).includes( '${DATE' ) ) {
                        nodesToProcess.push( {
                            node,
                            type: 'text'
                        } );
                    }
                } else if ( node.nodeType === Node.ELEMENT_NODE ) {
                    const element = node;
                    if ( element.closest( 'div.editable' ) ) {
                        if ( element.textContent?.includes( '${DATE' ) ) {
                            nodesToProcess.push( {
                                node: element,
                                type: 'element'
                            } );
                        }
                    } else {
                        element.querySelectorAll( 'div.editable' )
                            .forEach( ( el ) => {
                                if ( el.textContent?.includes( '${DATE' ) ) {
                                    nodesToProcess.push( {
                                        node: el,
                                        type: 'element'
                                    } );
                                }
                            } );
                    }
                }
            }

            if ( mutation.type === 'characterData' ) {
                if ( isInsideEditable( mutation.target ) && ( mutation.target.nodeValue || '' ).includes( '${DATE' ) ) {
                    nodesToProcess.push( {
                        node: mutation.target,
                        type: 'text'
                    } );
                }
            }
        }

        if ( nodesToProcess.length === 0 ) return;

        let shouldManageSelection = false;
        const sel = window.getSelection( );
        const anchorNode = sel?.anchorNode;
        if ( anchorNode ) {
            for ( const {
                    node
                }
                of nodesToProcess ) {
                if ( node.contains( anchorNode ) ) {
                    shouldManageSelection = true;
                    break;
                }
            }
        }
        const savedRange = shouldManageSelection ? saveSelection( ) : null;

        for ( const {
                node,
                type
            }
            of nodesToProcess ) {
            if ( type === 'text' ) {
                replaceInNode( node, savedRange );
            } else {
                scanElement( node, savedRange );
            }
        }

        if ( shouldManageSelection ) {
            restoreSelection( savedRange );
        }
    }, 50 ) );

    observer.observe( document.body, {
        childList: true,
        subtree: true,
        characterData: true
    } );

    function isInsideEditable( node ) {
        while ( node ) {
            if ( node instanceof Element && node.closest( 'div.editable' ) ) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    function saveSelection( ) {
        const sel = window.getSelection( );
        return sel && sel.rangeCount > 0 ? sel.getRangeAt( 0 ).cloneRange( ) : null;
    }

    function restoreSelection( savedRange ) {
        if ( !savedRange ) return;
        const sel = window.getSelection( );
        if ( !sel ) return;
        sel.removeAllRanges( );
        sel.addRange( savedRange );
    }

    function scanElement( element, savedRange ) {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null
        );

        let node;
        while ( node = walker.nextNode( ) ) {
            replaceInNode( node, savedRange );
        }
    }

    function replaceInNode( textNode, savedRange ) {
        const originalText = textNode.nodeValue || '';
        if ( !originalText || !pattern.test( originalText ) || !textNode.parentNode ) return;

        const isCursorInNode = savedRange && ( savedRange.startContainer === textNode || savedRange.endContainer === textNode );

        const fragments = document.createDocumentFragment( );
        let lastIndex = 0;
        let match;
        let lastReplacementNodeIndex = -1;

        pattern.lastIndex = 0;
        while ( ( match = pattern.exec( originalText ) ) !== null ) {
            if ( match.index > lastIndex ) {
                fragments.appendChild( document.createTextNode(
                    originalText.slice( lastIndex, match.index )
                ) );
            }

            const replacement = replaceMatch( match );
            fragments.appendChild( document.createTextNode( replacement ) );
            lastReplacementNodeIndex = fragments.childNodes.length - 1;

            lastIndex = match.index + match[ 0 ].length;
        }

        if ( lastIndex < originalText.length ) {
            fragments.appendChild( document.createTextNode(
                originalText.slice( lastIndex )
            ) );
        }

        const childNodes = Array.from( fragments.childNodes );
        const parent = textNode.parentNode;
        parent.replaceChild( fragments, textNode );

        if ( isCursorInNode && lastReplacementNodeIndex >= 0 ) {
            const targetNode = childNodes[ lastReplacementNodeIndex ];
            savedRange.setStart( targetNode, targetNode.textContent?.length || 0 );
            savedRange.collapse( true );
        }
    }

    function replaceMatch( match ) {
        const [ , formatOrPhrase = '', relativePhrase = '', offset = '', unit = '' ] = match;

        let format = 'YYYY-0M-0D';
        let phrase = '';

        if ( relativePhrase ) {
            format = formatOrPhrase || format;
            phrase = relativePhrase;
        } else if ( offset && unit ) {
            format = formatOrPhrase || format;
        } else if ( formatOrPhrase ) {
            if ( /[YMDhmsa]/.test( formatOrPhrase ) && !/\b(next|previous|prior|last|first|second|third|fourth|fifth|this|today|tomorrow|yesterday)\b/i.test( formatOrPhrase ) ) {
                format = formatOrPhrase;
            } else {
                phrase = formatOrPhrase;
            }
        }

        let date = new Date( );

        if ( phrase ) {
            date = parseRelativePhrase( phrase, date );
        } else if ( offset && unit ) {
            const amount = parseInt( offset, 10 );
            switch ( unit ) {
                case 'Y':
                    date.setFullYear( date.getFullYear( ) + amount );
                    break;
                case 'M':
                    date.setMonth( date.getMonth( ) + amount );
                    break;
                case 'W':
                    date.setDate( date.getDate( ) + ( amount * 7 ) );
                    break;
                case 'D':
                    date.setDate( date.getDate( ) + amount );
                    break;
                case 'h':
                    date.setHours( date.getHours( ) + amount );
                    break;
                case 'm':
                    date.setMinutes( date.getMinutes( ) + amount );
                    break;
                case 's':
                    date.setSeconds( date.getSeconds( ) + amount );
                    break;
            }
        }

        return formatDate( date, format );
    }

    function parseRelativePhrase( phrase, referenceDate ) {
        const cleanPhrase = phrase.trim( ).toLowerCase( );
        const date = new Date( referenceDate.getTime( ) );

        if ( cleanPhrase === 'today' ) return date;
        if ( cleanPhrase === 'tomorrow' ) {
            date.setDate( date.getDate( ) + 1 );
            return date;
        }
        if ( cleanPhrase === 'yesterday' ) {
            date.setDate( date.getDate( ) - 1 );
            return date;
        }

        const weekdays = {
            'sunday': 0,
            'sun': 0,
            'monday': 1,
            'mon': 1,
            'tuesday': 2,
            'tue': 2,
            'tues': 2,
            'wednesday': 3,
            'wed': 3,
            'thursday': 4,
            'thu': 4,
            'thur': 4,
            'thurs': 4,
            'friday': 5,
            'fri': 5,
            'saturday': 6,
            'sat': 6
        };

        // 1. "last day of [the] [this|last|previous|prior|next] month" or "end of [the] ... month"
        const lastDayMatch = cleanPhrase.match( /^(?:the\s+)?(?:last\s+day|end)\s+of\s+(?:the\s+)?(this|last|previous|prior|next)\s+month$/ );
        if ( lastDayMatch ) {
            const target = lastDayMatch[ 1 ];
            let monthOffset = 0;
            if ( target === 'last' || target === 'previous' || target === 'prior' ) monthOffset = -1;
            if ( target === 'next' ) monthOffset = 1;

            // Month + 1, Day 0 gives the final day of the target month
            return new Date( date.getFullYear( ), date.getMonth( ) + 1 + monthOffset, 0 );
        }

        // 2. "the [nth] [weekday] of [the] [this|last|previous|prior|next] month"
        const nthWeekdayMatch = cleanPhrase.match(
            /^(?:the\s+)?(first|second|third|fourth|fifth|1st|2nd|3rd|4th|5th)\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun|mon|tue|tues|wed|thu|thur|thurs|fri|sat)\s+of\s+(?:the\s+)?(this|last|previous|prior|next)\s+month$/
        );

        if ( nthWeekdayMatch ) {
            const [ , ordinalStr, dayStr, monthModifier ] = nthWeekdayMatch;

            const ordinals = {
                'first': 1,
                '1st': 1,
                'second': 2,
                '2nd': 2,
                'third': 3,
                '3rd': 3,
                'fourth': 4,
                '4th': 4,
                'fifth': 5,
                '5th': 5
            };

            const targetOrdinal = ordinals[ ordinalStr ];
            const targetDay = weekdays[ dayStr ];

            let monthOffset = 0;
            if ( monthModifier === 'last' || monthModifier === 'previous' || monthModifier === 'prior' ) monthOffset = -1;
            if ( monthModifier === 'next' ) monthOffset = 1;

            const targetYear = date.getFullYear( );
            const targetMonth = date.getMonth( ) + monthOffset;

            const resultDate = new Date( targetYear, targetMonth, 1 );

            while ( resultDate.getDay( ) !== targetDay ) {
                resultDate.setDate( resultDate.getDate( ) + 1 );
            }

            resultDate.setDate( resultDate.getDate( ) + ( targetOrdinal - 1 ) * 7 );

            return resultDate;
        }

        // 3. "next Tuesday", "previous Friday", "last Monday", "this Wednesday"
        const simpleWeekdayMatch = cleanPhrase.match(
            /^(next|previous|prior|last|this)\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun|mon|tue|tues|wed|thu|thur|thurs|fri|sat)$/
        );

        if ( simpleWeekdayMatch ) {
            const [ , modifier, dayStr ] = simpleWeekdayMatch;
            const targetDay = weekdays[ dayStr ];
            const currentDay = date.getDay( );

            if ( modifier === 'next' ) {
                let daysToAdd = targetDay - currentDay;
                if ( daysToAdd <= 0 ) daysToAdd += 7;
                date.setDate( date.getDate( ) + daysToAdd );
            } else if ( modifier === 'previous' || modifier === 'prior' || modifier === 'last' ) {
                let daysToSubtract = currentDay - targetDay;
                if ( daysToSubtract <= 0 ) daysToSubtract += 7;
                date.setDate( date.getDate( ) - daysToSubtract );
            } else if ( modifier === 'this' ) {
                const diff = targetDay - currentDay;
                date.setDate( date.getDate( ) + diff );
            }

            return date;
        }

        return referenceDate;
    }

    function getPaddedDay( date = new Date( ) ) {
        return String( date.getDate( ) ).padStart( 2, '0' );
    }

    function formatDate( date, format ) {
        function get12Hour( date ) {
            const h = date.getHours( );
            const hour12 = h % 12 || 12;
            return hour12.toString( );
        }

        function getMeridian( date ) {
            const h = date.getHours( );
            return ( h < 12 ? "AM" : "PM" );
        }
        const pad = ( n, width = 2 ) => n.toString( ).padStart( width, '0' );

        const dayNames = {
            'DDDD': date.toLocaleDateString( 'en-US', {
                weekday: 'long'
            } ),
            'DDD': date.toLocaleDateString( 'en-US', {
                weekday: 'short'
            } ),
            'DD': date.getDay( ).toString( ),
            'zeroD': getPaddedDay( date ),
            'D': date.getDate( ).toString( )
        };

        const monthNames = {
            'MMMM': date.toLocaleDateString( 'en-US', {
                month: 'long'
            } ),
            'MMM': date.toLocaleDateString( 'en-US', {
                month: 'short'
            } ),
            'Mo': ( date.getMonth( ) + 1 ).toString( )
        };

        return format
            .replace( /\bYYYY\b/g, date.getFullYear( ).toString( ) )
            .replace( /\bYY\b/g, date.getFullYear( ).toString( ).slice( -2 ) )
            .replace( /\bMMMM\b/g, monthNames.MMMM )
            .replace( /\bMMM\b/g, monthNames.MMM )
            .replace( /\bMM\b/g, String( date.getMonth( ) + 1 ) )
            .replace( /\bM\b/g, String( date.getMonth( ) + 1 ) )
            .replace( /\b0M\b/g, pad( date.getMonth( ) + 1 ) )
            .replace( /\bMo\b/g, monthNames.Mo )
            .replace( /\bDDDD\b/g, dayNames.DDDD )
            .replace( /\bDDD\b/g, dayNames.DDD )
            .replace( /\bDD\b/g, dayNames.DD )
            .replace( /\b0D\b/g, dayNames.zeroD )
            .replace( /\bD\b/g, dayNames.D )
            .replace( /\bh\b/g, get12Hour( date ) )
            .replace( /\bhh\b/g, pad( date.getHours( ) ) )
            .replace( /\bmm\b/g, pad( date.getMinutes( ) ) )
            .replace( /\bss\b/g, pad( date.getSeconds( ) ) )
            .replace( /\ba\b/g, getMeridian( date ) );
    }

    function debounce( func, wait ) {
        let timeout;
        let accumulatedMutations = [ ];
        return ( mutations ) => {
            accumulatedMutations.push( ...mutations );
            clearTimeout( timeout );
            timeout = setTimeout( ( ) => {
                const toProcess = accumulatedMutations;
                accumulatedMutations = [ ];
                func( toProcess );
            }, wait );
        };
    }

} )( );

const eventUtilsVersion = "Wednesday, 2025-08-06 @ 09:24:19";
console.log( `eventUtilsVersion = ${eventUtilsVersion}` );

// Function to organize events by date
function organizeEventsByDate( events, startDate, endDate ) {
    const startDateObj = new Date( startDate );
    const endDateObj = new Date( endDate );
    const nowObj = new Date( );

    // Filter events within date range
    const filteredEvents = events.filter( ( event ) => {
        const eventDate = new Date( event.date );
        const endTimeFormattedObj = new Date( event.end_time_formatted );
        return eventDate >= startDateObj && eventDate <= endDateObj && endTimeFormattedObj >= nowObj;
    } );

    // Group by date
    const groupedEvents = {};

    filteredEvents.forEach( ( event ) => {
        if ( !groupedEvents[ event.date ] ) {
            groupedEvents[ event.date ] = [ ];
        }
        groupedEvents[ event.date ].push( event );
    } );

    // Sort dates
    var temp_result = Object.keys( groupedEvents )
        .sort( )
        .map( ( date ) => ( {
            date,
            events: groupedEvents[ date ],
        } ) );

    temp_result.forEach( ( result ) => {
        result.events.sort( ( a, b ) => {
            // Assumes sorttime is comparable (number or string that sorts correctly)
            return a.sorttime > b.sorttime ?
                1 :
                a.sorttime < b.sorttime ?
                -1 :
                0;
        } );
    } );
    return temp_result;
}

function getVenueChipByName( venueName ) {
    const chips = document.querySelectorAll( 'span.venue-chip' );
    for ( let chip of chips ) {
        if ( chip.textContent === venueName ) {
            return chip;
        }
    }
    return null; // Return null if not found
}


// Filter functions
function excludePastEvents( events ) {
    // Exclude past events
    let now = new Date( );
    return events.filter( ( event ) =>
        new Date( event.end_time_formatted ) >= now,
    );
}

// Function to organize events by date
function organizeEventsByDate( events, startDate, endDate ) {
    const startDateObj = new Date( startDate );
    const endDateObj = new Date( endDate );
    const nowObj = new Date( );

    // Filter events within date range
    const filteredEvents = events.filter( ( event ) => {
        const eventDate = new Date( event.date );
        const endTimeFormattedObj = new Date( event.end_time_formatted );
        return eventDate >= startDateObj && eventDate <= endDateObj && endTimeFormattedObj >= nowObj;
    } );

    // Group by date
    const groupedEvents = {};

    filteredEvents.forEach( ( event ) => {
        if ( !groupedEvents[ event.date ] ) {
            groupedEvents[ event.date ] = [ ];
        }
        groupedEvents[ event.date ].push( event );
    } );

    // Sort dates
    var temp_result = Object.keys( groupedEvents )
        .sort( )
        .map( ( date ) => ( {
            date,
            events: groupedEvents[ date ],
        } ) );

    temp_result.forEach( ( result ) => {
        result.events.sort( ( a, b ) => {
            // Assumes sorttime is comparable (number or string that sorts correctly)
            return a.sorttime > b.sorttime ?
                1 :
                a.sorttime < b.sorttime ?
                -1 :
                0;
        } );
    } );
    return temp_result;
}

function applyFilters( ) {
    const searchTerm = document
        .getElementById( "search-input" )
        .value.toLowerCase( );
    const activeVenues = Array.from(
        document.querySelectorAll( ".venue-chip.active" ),
    ).map( ( chip ) => chip.textContent );
    let filteredEvents = [ ...events ];
    // Apply search term filter
    if ( searchTerm ) {
        filteredEvents = filteredEvents.filter(
            ( event ) =>
            areAllPrefixesPresent( searchTerm, event.name ) ||
            areAllPrefixesPresent( searchTerm, event.venue ) ||
            areAllPrefixesPresent( searchTerm, event.detail ),
        );
    }

    // Apply venue filter
    venueFilters = activeVenues;
    if ( activeVenues.length > 0 ) {
        filteredEvents = filteredEvents.filter( ( event ) =>
            activeVenues.includes( event.venue ),
        );
    }

    filteredEvents = excludePastEvents( filteredEvents );

    // Get date range (today to lookahead_days from now)
    const endDate = new Date( today );
    endDate.setDate( today.getDate( ) + lookahead_days );

    const organizedEvents = organizeEventsByDate(
        filteredEvents,
        getLocalISODateString( today ).split( "T" )[ 0 ],
        getLocalISODateString( endDate ).split( "T" )[ 0 ],
    );

    renderEvents( organizedEvents, true );
}


function formatDate( date ) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC", // interpret everything as UTC
    };
    return date.toLocaleDateString( "en-US", options );
}

function toUTCFormat( dateStr ) {
    // Match: YYYY-MM-DD hh:mm:ss am/pm
    dateStr = dateStr.replace( / noon$/i, " 12:00 pm" );
    dateStr = dateStr.replace( / 12:00$/i, " 12:00 pm" );
    dateStr = dateStr.replace(
        / (\d{1,2}):(\d{2})\s*(am|pm)$/i,
        " $1:$2:00 $3",
    );
    const regex =
        /^(\d{4})-(\d{2})-(\d{2})\s+(\d{1,2}):(\d{2}):(\d{2}) (am|pm)$/i;
    const match = dateStr.match( regex );
    if ( !match ) throw new Error( "Invalid date format" );

    let [ _, year, month, day, hour, minute, second, ampm ] = match;
    year = parseInt( year, 10 );
    month = parseInt( month, 10 ) - 1; // JS months: 0-11
    day = parseInt( day, 10 );
    hour = parseInt( hour, 10 );
    minute = parseInt( minute, 10 );
    second = parseInt( second, 10 );

    // Convert 12-hour to 24-hour
    if ( ampm.toLowerCase( ) === "pm" && hour !== 12 ) hour += 12;
    if ( ampm.toLowerCase( ) === "am" && hour === 12 ) hour = 0;

    // Create local Date object
    const localDate = new Date( year, month, day, hour, minute, second );

    // Get UTC components
    const y = localDate.getUTCFullYear( );
    const m = String( localDate.getUTCMonth( ) + 1 ).padStart( 2, "0" );
    const d = String( localDate.getUTCDate( ) ).padStart( 2, "0" );
    const h = String( localDate.getUTCHours( ) ).padStart( 2, "0" );
    const min = String( localDate.getUTCMinutes( ) ).padStart( 2, "0" );
    const s = String( localDate.getUTCSeconds( ) ).padStart( 2, "0" );

    // Format as YYYYMMDDThhmmssZ
    return `${y}${m}${d}T${h}${min}${s}Z`;
}

function formatDateUTC( date ) {
    // DATE is something like "2025-06-08 2:00:00 pm". Return "20250608T140000Z"

    // console.log(`formatDateUTC = ${date}`);
    var cleaned_date;
    const timeParts = date.match(
        /^(\d{1,4})-(\d{1,2})-(\d{1,2})\s*(\d{1,2}):(\d{2})(:\d{2})?\s*(am|pm)$/i,
    );
    if ( timeParts ) {
        // console.log(`timeParts = ${timeParts}`);
        var hour = parseInt( timeParts[ 4 ], 10 );
        if ( timeParts[ 7 ].toLowerCase( ) === "pm" ) {
            if ( hour < 12 ) hour += 12;
        }
        if ( timeParts[ 7 ].toLowerCase( ) === "am" && hour === 12 ) {
            hour -= 12;
        }
        if ( hour < 10 ) hour = "0" + hour;

        cleaned_date =
            timeParts[ 1 ] +
            "-" +
            timeParts[ 2 ] +
            "-" +
            timeParts[ 3 ] +
            "T" +
            hour +
            ":" +
            timeParts[ 5 ] +
            ":" +
            ( timeParts[ 6 ] === undefined ?
                "00" :
                timeParts[ 6 ].replace( ":", "" ) ) +
            "Z";

        // console.log(`cleaned_date=${cleaned_date}`);
    } else {
        return `formatDateUTC: Unable to parse ${date}`;
    }
    const cleaned_date_obj = new Date( cleaned_date );
    // console.log(`cleaned_date_obj=${cleaned_date_obj}`);
    const options = {
        timeZone: "UTC", // "America/New_York", // Set to Eastern US timezone
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Use 24-hour format
    };

    // console.log(
    // 	`cleaned_date_obj.toLocaleDateString("en-US", options) = ${cleaned_date_obj.toLocaleDateString("en-US", options)}`,
    // );

    const formatter = new Intl.DateTimeFormat( "en-US", options );
    const parts = formatter.formatToParts( cleaned_date_obj );

    // Helper to extract and pad values
    const pad = ( n ) => n.toString( ).padStart( 2, "0" );
    const yearPart = parts.find( ( p ) => p.type === "year" ).value;
    const monthPart = parts.find( ( p ) => p.type === "month" ).value;
    const dayPart = parts.find( ( p ) => p.type === "day" ).value;
    const hourPart = parts.find( ( p ) => p.type === "hour" ).value;
    const minutePart = parts.find( ( p ) => p.type === "minute" ).value;
    const secondPart = parts.find( ( p ) => p.type === "second" ).value;

    const formatted = `${yearPart}${monthPart}${dayPart}T${pad(hourPart)}${pad(minutePart)}${pad(secondPart)}Z`;
    // console.log(`formatDateUTC returning ${formatted}`);
    return formatted; // e.g., 20250608T140000Z (for June 8, 2025, 2:00:00 PM EDT)
}

function formatTime( timeStr ) {
    // Handle different time formats or return original if can't parse
    if ( !timeStr ) return "";

    try {
        // Try to standardize time format
        if ( timeStr.match( /^\d{1,2}(:\d{2})?\s*(am|pm|AM|PM)$/i ) ) {
            // Handle "7pm" or "7:30pm" format
            const timeParts = timeStr.match(
                /^(\d{1,2})(?::(\d{2}))?\s*(am|pm|AM|PM)$/i,
            );
            let hours = parseInt( timeParts[ 1 ] );
            const minutes = timeParts[ 2 ] ? timeParts[ 2 ] : "00";
            const ampm = timeParts[ 3 ].toLowerCase( );

            if ( ampm === "pm" && hours < 12 ) hours += 12;
            if ( ampm === "am" && hours === 12 ) hours = 0;

            return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm.toUpperCase()}`;
        }
        return timeStr;
    } catch ( e ) {
        return timeStr;
    }
}

function getLocalISODateString( date ) {
    const pad = ( num, size = 2 ) =>
        String( Math.floor( Math.abs( num ) ) ).padStart( size, "0" );

    // Timezone offset in minutes, negative for locations ahead of UTC, positive for behind
    const tzo = -date.getTimezoneOffset( );
    const sign = tzo >= 0 ? "+" : "-";
    const offsetHours = pad( Math.trunc( Math.abs( tzo ) / 60 ) );
    const offsetMinutes = pad( Math.abs( tzo ) % 60 );

    return (
        date.getFullYear( ) +
        "-" +
        pad( date.getMonth( ) + 1 ) +
        "-" +
        pad( date.getDate( ) ) +
        "T" +
        pad( date.getHours( ) ) +
        ":" +
        pad( date.getMinutes( ) ) +
        ":" +
        pad( date.getSeconds( ) ) +
        sign +
        offsetHours +
        ":" +
        offsetMinutes
    );
}

/**
 * Groups and sorts subdictionaries by date.
 * @param {Object} dictOfDicts - The input dictionary of dictionaries.
 * @returns {Object} - Dictionary of lists, grouped by date and sorted by sorttime.
 */
function groupAndSortByDate( dictOfDicts ) {
    const result = {};

    // Iterate over each subdictionary in the input
    for ( const key in dictOfDicts ) {
        if ( dictOfDicts.hasOwnProperty( key ) ) {
            const entry = dictOfDicts[ key ];
            const date = entry.date;

            if ( !result[ date ] ) {
                result[ date ] = [ ];
            }
            result[ date ].push( entry );
        }
    }

    // Sort each list by sorttime
    for ( const date in result ) {
        result[ date ].sort( ( a, b ) => a.sorttime - b.sorttime );
    }

    return result;
}

// Calculate date range for display
const future_date = new Date( today );
future_date.setDate( today.getDate( ) + lookahead_days );
console.warn(
    `groupAndSortByDate: today=${today}  future_date=${future_date}`,
);

function isTimeString( timeStr ) {
    return timeStr.match( /^\d{1,2}(:\d{2})?\s*(am|pm|AM|PM)$/i );
}

// Function to render events
function renderEvents( eventsByDate, clusterVenues = false ) {

    function sortDivsByVenue( container ) {
        // Get an array of the direct child divs
        const children = Array.from( container.children );

        // Sort the child divs based on the text content of their .venue div
        children.sort( ( a, b ) => {
            const venueA = a.querySelector( '.venue' )?.textContent.trim( ) || '';
            const venueB = b.querySelector( '.venue' )?.textContent.trim( ) || '';
            return venueA.localeCompare( venueB );
        } );

        // Re-append the sorted divs to the container
        children.forEach( child => container.appendChild( child ) );

        return container;
    }

    function removeDuplicateVenues( container ) {
        let lastVenueValue = null;

        // Get all immediate child divs of the container
        const childDivs = Array.from( container.children );

        childDivs.forEach( child => {
            // Find the nested .venue div within this child
            const venueDiv = child.querySelector( '.venue' );
            if ( venueDiv ) {
                const currentVenueValue = venueDiv.textContent.trim( );
                if ( currentVenueValue === lastVenueValue ) {
                    // Remove only the .venue div
                    venueDiv.parentNode.removeChild( venueDiv );
                } else {
                    lastVenueValue = currentVenueValue;
                }
            }
        } );

        return container;
    }

    function updateEventCount( ) {

        function countElementsWithEvents( arr ) {
            if ( !Array.isArray( arr ) ) {
                throw new Error( 'Input must be an array' );
            }
            let count = 0;
            for ( const map of arr ) {
                if ( map && Array.isArray( map.events ) ) {
                    count += map.events.length;
                }
            }
            return count;
        }

        const event_count_control = document.getElementById( "event_count" );
        if ( event_count_control ) {
            const ce = countElementsWithEvents( eventsByDate );
            event_count_control.innerHTML = " (" + ce + " event" + ( ce == 1 ? "" : "s" ) + ")";
        }

    }

    const container = document.getElementById( "events-container" );
    container.innerHTML = "";

    if ( eventsByDate.length === 0 ) {
        container.innerHTML =
            '<div class="no-events">No events found matching your criteria.</div>';
        updateEventCount( );
        return;
    }

    eventsByDate.forEach( ( day ) => {
        const dateObj = new Date( day.date );
        var dateContainer = document.createElement( "div" );
        dateContainer.className = "date-container";

        const dateHeading = document.createElement( "h2" );
        dateHeading.textContent = formatDate( dateObj );
        dateContainer.appendChild( dateHeading );

        day.events.forEach( ( event ) => {
            const eventElement = document.createElement( "div" );
            eventElement.className = "event";

            const venueElement = document.createElement( "div" );
            venueElement.className = "venue";
            venueElement.textContent = event.venue;

            const timeElement = document.createElement( "span" );
            timeElement.className = "time";
            timeElement.textContent = formatTime( event.time ) + ":    ";

            const nameElement = document.createElement( "span" );
            nameElement.className = "event-name";
            nameElement.textContent = event.name;

            var addCalendarElement = null;
            var descriptionElement = null;
            var toggleAddCalendarElement = null;
            var toggleElement = null;

            // console.log(
            // 	`event.date=${event.date}  event.start_time = ${event.start_time}  event.end_time = ${event.end_time}`,
            // );
            const start_time_string =
                event.date +
                " " +
                ( isTimeString( event.start_time ) ? event.start_time : "12:00" );
            // console.log(`start_time_string="${start_time_string}"`);
            const start_date = new Date( start_time_string );
            // console.log(`start_date="${start_date}"`);
            const start = toUTCFormat( start_time_string );
            const end_time_string =
                event.date +
                " " +
                ( isTimeString( event.end_time ) ? event.end_time : "12:00" );
            // console.log(`end_time_string="${end_time_string}"`);
            const end_date = new Date( end_time_string );
            // console.log(`end_date="${end_date}"`);
            const end = toUTCFormat( end_time_string );

            addCalendarElement = createCalendarDispatcher(
                event.url,
                event.name,
                event.detail,
                event.location,
                start,
                end,
            );
            addCalendarElement.className = "hidden";

            toggleAddCalendarElement = document.createElement( "span" );
            toggleAddCalendarElement.textContent = "🗓";
            toggleAddCalendarElement.className = "toggle-control";
            toggleAddCalendarElement.addEventListener( "click", function( ) {
                addCalendarElement.classList.toggle( "hidden" );
            } );

            if ( event.detail !== "None" ) {
                descriptionElement = document.createElement( "span" );
                descriptionElement.textContent = event.detail;
                descriptionElement.className = "hidden";

                toggleElement = document.createElement( "span" );
                toggleElement.textContent = "⊕";
                toggleElement.className = "toggle-control green";
                toggleElement.addEventListener( "click", function( ) {
                    descriptionElement.classList.toggle( "hidden" );
                    if ( toggleElement.textContent === "⊕" ) {
                        toggleElement.textContent = "Θ";
                        toggleElement.className = "toggle-control red";
                    } else {
                        toggleElement.textContent = "⊕";
                        toggleElement.className = "toggle-control green";
                    }
                } );
            }
            eventElement.appendChild( venueElement );
            eventElement.appendChild( timeElement );
            eventElement.appendChild( nameElement );
            eventElement.appendChild( toggleAddCalendarElement );
            eventElement.appendChild( addCalendarElement );
            if ( descriptionElement ) {
                eventElement.appendChild( toggleElement );
                eventElement.appendChild( descriptionElement );
            }

            dateContainer.appendChild( eventElement );
        } );
        if ( clusterVenues ) {
            const sorted = sortDivsByVenue( dateContainer );
            const deduped = removeDuplicateVenues( sorted );
            dateContainer = deduped;
        }
        container.appendChild( dateContainer );
    } );
    updateEventCount( )
}

function expandDigitsWithWords( input ) {
    const digitWords = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    // Regex: match a digit with word boundaries before and after
    return input.replace( /\b(\d)\b/g, ( match ) => {
        return match + " " + digitWords[ Number( match ) ];
    } );
}

function removeDiacritics( string ) {
    // Return STRING but with all diacritics removed.
    return string
        .normalize( "NFD" )
        .replace( /[\u0300-\u036f]/g, "" )
        .replace( /ß/g, "ss" )
        .replace( /æ/g, "ae" );
}

function areAllPrefixesPresent( s1, s2 ) {
    // Returns whether all words in s1 appear as prefixes of words in s2
    // Split strings into word arrays (handling multiple spaces)
    const words1 = removeDiacritics( s1 )
        .toLowerCase( )
        .split( /\s+/ )
        .filter( Boolean );
    const s2Lower = expandDigitsWithWords(
        removeDiacritics( s2 ).toLowerCase( ),
    );

    // Check if every word from s1 exists in s2
    const prefixesArePresent = words1.every( ( word ) => {
        const regex = new RegExp( `\\b${word}\\w*` );
        return s2Lower.match( regex );
    } );
    return prefixesArePresent;
}

function mapVenues( arr ) {
    // arr is an array of objects with (at least) keys 'url' and 'venue'
    // Output: an object mapping 'venue' to 'url'
    return arr.reduce( ( result, item ) => {
        if ( item.venue && item.url ) {
            result[ item.venue ] = item.url;
        }
        return result;
    }, {} );
}
var menuToURLMap = mapVenues( events );

// Create venue filter chips
function createVenueFilters( ) {
    const venueFiltersContainer = document.getElementById( "venue-filters" );

    // Get unique venues
    const venues = [ ...new Set( events.map( ( event ) => event.venue ) ) ].sort( );

    venues.forEach( ( venue ) => {
        const chip = document.createElement( "span" );
        chip.className = "venue-chip";
        chip.textContent = venue;
        chip.addEventListener( "click", function( event ) {
            if ( event.ctrlKey ) {
                // Ctrl+Click behavior here
                console.log( `control pressed: opening a new window for ${venue} => ${menuToURLMap[venue]}` );
                const url = menuToURLMap[ venue ];
                if ( url ) window.open( url, '_blank' );
            } else {
                chip.classList.toggle( "active" );
                applyFilters( );
            }
        } );
        venueFiltersContainer.appendChild( chip );
    } );
}

function applyURLParameters( ) {
    const url = new URL( window.location );
    const st = url.searchParams.get( 'searchTerm' );
    const vf = url.searchParams.get( 'venueFilters' );

    document.getElementById( "search-input" ).value = st;

    if ( vf ) {
        const vfArray = vf.split( ',' );

        vfArray.forEach( ( venue ) => {
            const chip = getVenueChipByName( venue );
            if ( chip ) {
                chip.classList.add( "active" );
            }
        } );
    }
}

// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "%A, %Y-%02m-%02d @ %02H:%02M:%02S"
// time-stamp-active: t
// time-stamp-start: "const eventUtilsVersion = \""
// time-stamp-end: "\";"
// End:

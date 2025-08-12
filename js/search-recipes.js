const searchRecipesVersion = "Monday, 2025-08-11 @ 21:59:23";

var debugSearchRecipes = false;

/**
 * Hides an element by setting its display style to "none".
 * @param {string} id The ID of the element to hide.
 */
function hideElement( id ) {
    // if( debugSearchRecipes ) console.log( "\t\t\thide element with id=[%s]", id );
    const el = document.getElementById( id );
    if ( el ) {
        el.style.display = "none";
    } else {
        console.log( "no element with id=[%s]", id );
    }
}

/**
 * Hides an element and its related elements. Currently, this function
 * only hides the element with the given ID.
 * @param {string} id The ID of the element to hide.
 */
function hideElements( id ) {
    hideElement( id );
}

/**
 * Shows an element by setting its display style to "list-item".
 * @param {string} id The ID of the element to show.
 */
function showElement( id ) {
    // if( debugSearchRecipes ) console.log( "\t\t\tshow element with id=[%s]", id );
    const el = document.getElementById( id );
    if ( el ) {
        el.style.display = "list-item";
    } else {
        console.log( "no element with id=[%s]", id );
    }
}

/**
 * Shows an element and its related elements. Currently, this function
 * only shows the element with the given ID.
 * @param {string} id The ID of the element to show.
 */
function showElements( id ) {
    showElement( id );
}


/**
 * Checks if all terms in a query array are present in a string.
 * @param {string[]} query An array of search terms.
 * @param {string} str The string to search within.
 * @returns {boolean} True if all query terms are found in the string, false otherwise.
 */
function matchesAll( query, str ) {
    for ( const term of query ) {
        const regexp = new RegExp( term );
        if ( str.search( regexp ) == -1 ) {
            // if( debugSearchRecipes ) console.log( "matchesAll: query=[%s] does NOT match all of [%s]!", query, str );
            return ( false );
        }
    }
    // if( debugSearchRecipes ) console.log( "matchesAll: query=[%s] DOES match all of [%s]!", query, str );
    return ( true );
}


/**
 * Searches for elements based on a query and shows or hides them accordingly.
 * @param {string[]} query An array of search terms.
 * @param {Array<[string, string]>} index An array of tuples, where each tuple contains an element ID and its associated index string.
 */
function searchElements( query, index ) {
    let result = [ ]
    if ( debugSearchRecipes ) console.log( "searchElements: index=[%s]\tquery=[%s]", index.join( ", " ), query.join( ", " ) );

    indexLoop:
        for ( const idx of index ) {
            const id = idx[ 0 ];
            const indexString = idx[ 1 ];
            // if( debugSearchRecipes ) console.log( "\tid=[%s]\tindexString=[%s]", id, indexString );
            if ( matchesAll( query, indexString ) ) {
                showElement( id );
            } else {
                hideElement( id );
            }
        }
}

/**
 * Removes diacritics from a string, converting it to a simpler form.
 * For example, "jalapeño" becomes "jalapeno".
 * @param {string} string The string to remove diacritics from.
 * @returns {string} The string with diacritics removed.
 */
function removeDiacritics( string ) {
    // Return STRING but with all diacritics removed.
    return string
        .normalize( 'NFD' )
        .replace( /[\u0300-\u036f]/g, '' )
        .replace( /ß/g, 'ss' )
        .replace( /æ/g, 'ae' );
}


var searchTrackTimer;

/**
 * Handles keyboard input in the search box, filtering recipes based on the query.
 * It also tracks search events for analytics.
 */
function searchKeyboardHandler( ) {
    let query = removeDiacritics(
        document.getElementById( "searchBox" )
        .value
        .toLowerCase( )
        .replace( /[^0-9 \p{L}]+/gu, "" )
    );
    if ( debugSearchRecipes ) console.log( "query=[%s]", query );
    searchElements( query.split( " " ), recipeIndexArray );

    clearTimeout( searchTrackTimer );
    searchTrackTimer = setTimeout( ( ) => {
        if ( query.length > 2 ) { // Only track queries with more than 2 chars
            gtag( 'event', 'search', {
                search_term: query
            } );
        }
    }, 500 );
}

document.getElementById( "searchBox" ).addEventListener( 'input', searchKeyboardHandler );

//==================================================================
// Test Functions
//==================================================================
// let recipeIndex = [
//     [ 'Breakfast-Pizza', 'breakfast pizza egg spinach butter' ],
//     [ 'Breakfast-French-Toast', 'breakfast french toast egg bread cinnamon' ],
//     [ 'Bread-Pizza', 'bread pizza flour sauce spinach' ],
//     [ 'Bread-Sourdough', 'bread sourdough starter flour salt' ],
//     [ 'Garbage-Junk', 'blah blah garbage junk blah blah garbage junk blah blah garbage junk' ],
//     [ 'outline-container-org2f77f0c', 'english muffin sourdough' ],
//     [ 'outline-container-org0a2d7ff', 'german muffin sourdough' ],
// ];

/**
 * A driver function for testing the search functionality.
 * It runs a series of predefined queries against the recipe index.
 */
function searchDriver( ) {
    const queries = [
        // ['bre'],
        // ['bread'],
        // ['break'],
        // ['piz'],
        // ['nach'],
        // ['garbage'],

        // ['bre', 'piz'],
        // ['bre', 'flour'],
        [ 'jalapeno' ],
        [ 'jalapeñ' ],
        [ 'jalapeño' ],
    ];
    for ( const q of queries ) {
        console.log( "query=[%s]", q.join( ", " ) );
        searchElements( q, recipeIndexArray );
    }
}

// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "%A, %Y-%02m-%02d @ %02H:%02M:%02S"
// time-stamp-active: t
// time-stamp-start: "const searchRecipesVersion = \""
// time-stamp-end: "\";"
// End:

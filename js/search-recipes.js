var debugSearchRecipes = true;

// Turn off display for element with ID.
function hideElement( id ) {
    // if( debugSearchRecipes ) console.log( "\t\t\thide element with id=[%s]", id );
    const el = document.getElementById( id );
    if( el ) {
	el.style.display = "none";
    } else {
	console.log( "no element with id=[%s]", id );
    }
}

// Turn off display for element with ID and its related ids.
function hideElements( id ) {
    hideElement( id );
}

// Turn on display for element with ID. Use block display.
function showElement( id ) {
    // if( debugSearchRecipes ) console.log( "\t\t\tshow element with id=[%s]", id );
    const el = document.getElementById( id );
    if( el ) {
	el.style.display = "list-item";
    } else {
	console.log( "no element with id=[%s]", id );
    }
}

// Turn on display for element with ID and its related ids.
function showElements( id ) {
    showElement( id );
}

// Return true if all of the terms in the array QUERY
// are found within the string STR, else false.
function matchesAll( query, str ) {
    for( const term of query ) {
	const regexp = new RegExp( term );
	if( str.search( regexp ) == -1 ) {
	    // if( debugSearchRecipes ) console.log( "matchesAll: query=[%s] does NOT match all of [%s]!", query, str );
	    return( false );
	}
    }
    // if( debugSearchRecipes ) console.log( "matchesAll: query=[%s] DOES match all of [%s]!", query, str );
    return( true );
}


// QUERY is an array of strings.
// INDEX is an array of arrays: [ id, indexString ].
// Call hideElement for all elements with an id from INDEX where *all* of the strings
// in the QUERY array may be found as regular expressions in the corresponding indexString.
// Else call showElement for those ids.
function searchElements( query, index ) {
    let result = []
    if( debugSearchRecipes ) console.log( "searchElements: index=[%s]\tquery=[%s]", index.join(", "), query.join(", ") );

    indexLoop:
    for( const idx of index ) {
	const id = idx[0];
	const indexString = idx[1];
	// if( debugSearchRecipes ) console.log( "\tid=[%s]\tindexString=[%s]", id, indexString );
	if( matchesAll( query, indexString ) ) {
	    showElement( id );
	} else {
	    hideElement( id );
	}
    }
}

function removeDiacritics( string ) {
    // Return STRING but with all diacritcs removed.
    return string
	.normalize( 'NFD' )
	.replace( /[\u0300-\u036f]/g, '' )
	.replace( /ß/g, 'ss' )
	.replace( /æ/g, 'ae' )
    ;
}


// Assume the keyboard event has already been processed.
// Use the query in the query box to filter the page according to the recipeIndex
function keyboardHandler(e) {
    let query = removeDiacritics( 
	document.
	    getElementById( "searchBox" )
	    .value
	    .toLowerCase()
	    .replace( /[^0-9 \p{L}]+/gu, "" )
    );
    if( debugSearchRecipes ) console.log( "query=[%s]", query );
    searchElements( query.split( " " ), recipeIndexArray );
}

document.getElementById( "searchBox" ).
    addEventListener('keyup', keyboardHandler);

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

function searchDriver() {
    const queries = [
	// ['bre'],
	// ['bread'],
	// ['break'],
	// ['piz'],
	// ['nach'],
	// ['garbage'],

	// ['bre', 'piz'],
	// ['bre', 'flour'],
	['jalapeno'],
	['jalapeñ'],
	['jalapeño'],
    ];
    for( const q of queries ) {
	console.log( "query=[%s]", q.join(", ") );
	searchElements( q, recipeIndexArray );
    }
}


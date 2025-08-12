let revealer_info: [string,string][] = [
    [ 'Error', 'setRevealInfo() was not called' ],
    [ 'Example', 'setRevealInfo([ ["Answer One", "Clue One"], ["Answer Two", "Clue Two"], ["Answer Three", "Clue Three"] ]);' ],
    [ 'Error!', 'You must call setRevealInfo() to display information here.' ],
    [ 'Sample', 'setRevealInfo([ [\'Answer 1\', \'Clue 1\'], [\'Answer 2\', \'Clue 2\'], [\'Answer 3\', \'Clue 3\'] ]);' ],
    [ 'Error', 'setRevealInfo() was not called' ],
    [ 'Example', 'setRevealInfo([ ["Answer One", "Clue One"], ["Answer Two", "Clue Two"], ["Answer Three", "Clue Three"] ]);' ],
    [ 'Error!', 'You must call setRevealInfo() to display information here.' ],
    [ 'Sample', 'setRevealInfo([ [\'Answer 1\', \'Clue 1\'], [\'Answer 2\', \'Clue 2\'], [\'Answer 3\', \'Clue 3\'] ]);' ],
    [ 'Error', 'setRevealInfo() was not called' ],
];

let entry: number = 0;

let person_number = document.getElementById( "person_number" );
let fact = document.getElementById( "fact" );
let person = document.getElementById( "person" );
let person_number_label = document.getElementById( "person_number_label" );

/**
 * Sets the data for the revealer.
 * @param {[string, string][]} revealerInfo An array of tuples, where each tuple is [answer, clue].
 */
function setRevealInfo( revealerInfo: [string,string][]) {
    revealer_info = revealerInfo;
}

/**
 * Removes an element from the DOM.
 * @param {HTMLElement} elementToRemove The element to remove.
 */
function removeElement( elementToRemove: HTMLElement ): void {
    if( elementToRemove && elementToRemove.parentNode ) {
	elementToRemove.parentNode.removeChild( elementToRemove );
    }
}

/**
 * Replaces an HTML element with a new one.
 * @param {string} id The ID for the new element.
 * @param {HTMLElement} oldElement The element to be replaced.
 * @param {string} newElementTag The tag for the new element (e.g., 'div').
 * @param {string} [newElementContent] The text content for the new element.
 * @returns {HTMLElement | null} The newly created element or null.
 */
function replaceElement( id: string, oldElement: HTMLElement, newElementTag: string, newElementContent?: string ): HTMLElement | null {
    // Create a new element
    const newElement = document.createElement( newElementTag );

    // If new content is provided, set it as the text content of the new element
    if (newElementContent) {
	newElement.textContent = newElementContent;
	newElement.id = id;
    }

    // Replace the old element with the new one
    if (oldElement && oldElement.parentNode) {
	oldElement.parentNode.replaceChild( newElement, oldElement );
    }
    return( newElement );
}

/**
 * Initializes the revealer, checking for required DOM elements.
 * @returns {number | undefined} Error code if an element is not found.
 */
function reveal() {
    if( !fact ) {
	console.error( "reveal: cannot find fact" );
	return( 1 );
    }

    if( !person ) {
	console.error( "reveal: cannot find person" );
	return( 2 );
    }
};

/**
 * Updates the fact/clue element on the page.
 * @param {number} entry The current step in the reveal sequence.
 */
function updateFact( entry: number ) {
    const newFact = revealer_info[ Math.trunc( entry / 2 ) ][ 1 ];
    if( person ) {
	person.innerHTML = "";
    }
    if( fact ) {
	fact.innerHTML = newFact;
	fact.classList.remove( "faded" );
    }
}

/**
 * Updates the person/answer element on the page.
 * @param {number} entry The current step in the reveal sequence.
 */
function updatePerson( entry: number ) {
    const newPerson= revealer_info[ Math.trunc( entry / 2 ) ][ 0 ];
    if( person_number_label ) {
	person_number_label.innerHTML = "person #";
    }
    if( person_number ) {
	person_number.innerHTML = Math.trunc( entry/2 ).toString();
    }
    if( entry % 2 != 0 ) {
	if( person ) {
	    person = replaceElement( person.id, person, "div", newPerson );
	    if( person ) {
		person.classList.remove( "person-class" );
		person.classList.add( "person-class" );
	    }
	}
	if( fact ) {
	    fact.classList.add( "faded" );
	}
    }
}

/**
 * Enum for keyboard navigation directions.
 */
enum Directions {
    right = 0,
    left = 1,
};

let direction: Directions = Directions.right;

/**
 * Handles keyboard events for navigating the revealer.
 */
document.addEventListener( 'keydown', (event) => {
    switch( event.key ) {
    case 'ArrowRight':
	if( direction == Directions.left ) { // change of direction!
	    entry++;
	}
	direction = Directions.right;
	if( entry < (2*revealer_info.length) ) {
	    updateFact( entry );
	    updatePerson( entry );
	    entry++;
	}
	break;
    case 'ArrowLeft':
	if( direction == Directions.right ) { // change of direction!
	    entry--;
	}
	direction = Directions.left;
	if( entry > 0 ) {
	    entry--;
	    updateFact( entry );
	    updatePerson( entry );
	}
	break;
    default:
	break;
    }
})


reveal();

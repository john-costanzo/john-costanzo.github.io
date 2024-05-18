let revealer_info: [string,string][] = [];

let entry: number = 0;

let person_number = document.getElementById( "person_number" );
let fact = document.getElementById( "fact" );
let person = document.getElementById( "person" );
let person_number_label = document.getElementById( "person_number_label" );

function setRevealInfo( revealerInfo: [string,string][]) {
    revealer_info = revealerInfo;
}

// Function to remove an element from the DOM
function removeElement( elementToRemove: HTMLElement ): void {
    if( elementToRemove && elementToRemove.parentNode ) {
	elementToRemove.parentNode.removeChild( elementToRemove );
    }
}

// Function to create a new element and replace the old one, returning the new one
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

enum Directions {
    right = 0,
    left = 1,
};

let direction: Directions = Directions.right;

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

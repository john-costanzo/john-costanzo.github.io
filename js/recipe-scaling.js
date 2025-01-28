const recipeScalingVersion = "Tuesday, 2025-01-28 @ 13:29:36";

/*
 *    In response to this prompt:
 *
 *
 * Write a Javascript function that accepts a parameter called
 * scaling_factor. The function should update all HTML tags named
 * "amount" by setting the value of the element to the string formed by
 * concatentating the product of scaling_factor and the value of the
 * element's attribute "fraction" with the value of the element's
 * attribute "units". Additionally, if the scaling_factor is equal to 1,
 * it should remove the element's "title" attribute; otherwise it should
 * set the value of the "title" attribute to the value of the
 * "original_amount" attribute.
 *
 *    ...the following code was written by Perplexity.
 * See https://www.perplexity.ai/search/write-a-javascript-function-th-UKrqUr78RYSdet.LM11xvQ
 */

function promptForScalingPercentage() {
    // Prompt the user for a scalingPercentage
    const scalingPercentageText = prompt( "Please enter a percentage with which to scale the recipe:" );

    if( scalingPercentageText !== null ) {
	if( ! /^[\d.]+$/.test( scalingPercentageText ) ) {
	    alert( "Invalid input! Please enter (only) a number." );
	    return;
	}

	// Convert the input to a number
	const targetScalingPercentage = parseFloat( scalingPercentageText );

	// Validate the input
	if ( isNaN( targetScalingPercentage ) || targetScalingPercentage < 0 ) {
	    alert( "Invalid input! Please enter a number greater than 0." );
	    return;
	}
	return( currentScalingPercentage = targetScalingPercentage );
    } else {
	return( null );
    }
}

function scaleRecipe(newScalingPercentage) {
    console.log( "scaleRecipe: newScalingPercentage=" + newScalingPercentage + "; currentScalingPercentage=" + currentScalingPercentage );
    if( newScalingPercentage === undefined ) {
	if( !promptForScalingPercentage() )
	    return( null );
    } else {
	currentScalingPercentage = newScalingPercentage;
    }

    if( currentScalingPercentage !== undefined ) {
	// Convert scalingPercentage to scaling factor
	const scaling_factor = currentScalingPercentage / 100.0;

	// Call the updateAmounts function with the scaling factor
	updateAmounts( scaling_factor );

	const sf = document.getElementById("scaling_factor");
	if( sf ) {
            if ( scaling_factor === 1 ) {
		sf.innerHTML = "";
	    } else {
		sf.innerHTML = "scaled to " +( scaling_factor * 100) + "%";
	    }
	}
    }
}


function updateAmounts( scaling_factor ) {
    // Select all elements with the tag name "amount"
    const amountElements = document.getElementsByTagName( "amount" );

    // Iterate through each "amount" element
    for ( let element of amountElements ) {
        // Get the fraction and units attributes
        const fraction = parseFloat( element.getAttribute( "fraction" ) );
        const units = element.getAttribute( "units" );

        // Calculate the new amount
        const newAmount = scaling_factor * fraction;

        // Set the element's value to the new amount concatenated with units
        element.textContent = numberToFraction( newAmount ) + " " + units;

        // Handle the title attribute based on scaling_factor
        if ( scaling_factor === 1 ) {
            element.removeAttribute( "title" );
        } else {
            const originalAmount = element.getAttribute( "original_amount" );
            element.setAttribute( "title", "originally: " + originalAmount );
        }
    }
}


const fractionalTextToGlyphMap = {
    "1/2": "½",
    "1/3": "⅓",
    "2/3": "⅔",
    "1/4": "¼",
    "3/4": "¾",
    "1/5": "⅕",
    "2/5": "⅖",
    "3/5": "⅗",
    "4/5": "⅘",
    "1/6": "⅙",
    "5/6": "⅚",
    "1/7": "⅐",
    "1/8": "⅛",
    "3/8": "⅜",
    "5/8": "⅝",
    "7/8": "⅞",
    "1/9": "⅑",
    "1/10": "⅒",
};

function numberToFraction( number ) {
    // Handle whole numbers
    if ( Number.isInteger( number ) ) {
        return "" + number;
    }

    // Handle decimal numbers
    const precision = 1e-7; // Adjust this for desired precision
    let numerator = 1;
    let denominator = 1;

    while ( Math.abs( ( numerator / denominator ) - number ) > precision ) {
        if ( ( numerator / denominator ) < number ) {
            numerator++;
        } else {
            denominator++;
        }
    }

    // Simplify the fraction
    const gcd = findGCD( numerator, denominator );
    numerator /= gcd;
    denominator /= gcd;

    let wholePart = 0;
    if( numerator > denominator ) {
	wholePart = Math.floor( numerator / denominator );
	numerator = numerator - ( wholePart * denominator );
    }

    let fraction = numerator + "/" + denominator;
    if( fraction in fractionalTextToGlyphMap ) {
	fraction = fractionalTextToGlyphMap[ fraction ];
    }

    return ( wholePart === 0 ? "" : wholePart + " " ) + fraction;
}

// Helper function to find the Greatest Common Divisor
function findGCD( a, b ) {
    if( Number.isInteger( a ) && Number.isInteger( b ) ) {
	return b === 0 ? a : findGCD( b, a % b );
    } else {
        console.error( "findGCD: passed bad arguments. a=[%d] b=[%d]", a, b );
    }
}

// Local Variables:
// time-stamp-line-limit: 10
// time-stamp-format: "%A, %Y-%02m-%02d @ %02H:%02M:%02S"
// time-stamp-active: t
// time-stamp-start: "const recipeScalingVersion = \""
// time-stamp-end: "\";"
// End:

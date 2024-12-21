const recipeScalingVersion = "Saturday, 2024-12-21 @ 11:20:30";

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

function getPercentageAndUpdate(  ) {
    // Prompt the user for a percentage
    let percentage = prompt( "Please enter a percentage:" );

    if( percentage !== null ) {
	if( ! /^[\d.]+$/.test( percentage ) ) {
            alert( "Invalid input! Please enter (only) a number." );
            return;
	}

	// Convert the input to a number
	percentage = parseFloat( percentage );

	// Validate the input
	if ( isNaN( percentage ) || percentage < 0 ) {
            alert( "Invalid input! Please enter a number greater than 0." );
            return;
	}

	// Convert percentage to scaling factor
	const scaling_factor = percentage / 100.0;

	// Call the updateAmounts function with the scaling factor
	updateAmounts( scaling_factor );
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

	const sf = document.getElementById("scaling_factor");
        // Handle the title attribute based on scaling_factor
        if ( scaling_factor === 1 ) {
            element.removeAttribute( "title" );
	    sf.innerHTML = "";
        } else {
            const originalAmount = element.getAttribute( "original_amount" );
            element.setAttribute( "title", "originally: " + originalAmount );
	    sf.innerHTML = "scaled to " +( scaling_factor * 100) + "%";
        }
    }
}

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
    return ( wholePart === 0 ? "" : wholePart + " " ) + numerator + "/" + denominator;
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

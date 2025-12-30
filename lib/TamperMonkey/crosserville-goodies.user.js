// ==UserScript==
// @name         Crosserville Goodies
// @namespace    http://tampermonkey.net
// @version      2025-12-28_21-44
// @description  Provide functionality to exclude and shade/circle the answer at the current slot
// @author       John Costanzo
// @match        https://www.crosserville.com/builder
// @updateURL    https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/crosserville-goodies.user.js
// @downloadURL  https://github.com/john-costanzo/john-costanzo.github.io/raw/refs/heads/master/lib/TamperMonkey/crosserville-goodies.user.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    var scriptName = "crosserville-goodies";
    var Severities;
    (function (Severities) {
        Severities[Severities["debug"] = 0] = "debug";
        Severities[Severities["log"] = 1] = "log";
        Severities[Severities["info"] = 2] = "info";
        Severities[Severities["warn"] = 3] = "warn";
        Severities[Severities["error"] = 4] = "error";
    })(Severities || (Severities = {}));
    ;
    function message(msg, severity) {
        if (severity === void 0) { severity = Severities.debug; }
        var debug = false;
        switch (severity) {
            case Severities.debug:
                if (debug) {
                    console.log(scriptName + "-debug: " + msg);
                }
                break;
            case Severities.log:
                console.log(scriptName + ": " + msg);
                break;
            case Severities.info:
                console.info(scriptName + ": " + msg);
                break;
            case Severities.warn:
                console.warn(scriptName + ": " + msg);
                break;
            case Severities.error:
                console.error(scriptName + ": " + msg);
                break;
            default:
                console.error(scriptName + ": No such logging level (" + severity + ")");
        }
    }
    // function getCurrentAnswer(): string {
    // 	/***************************************************************************************************************
    // 	 *
    // 	 * Assume this structure exists:
    // 	 *
    // 	 * <table id="id_fillPaneSlotTable" class="paneSlot">
    // 	 *   <tbody>
    // 	 *     <tr>
    // 	 *       <td class="cell">
    // 	 * 	<div class="label">
    // 	 * 	  25</div>
    // 	 * 	<div class="character">
    // 	 * 	  R</div>
    // 	 * 	<img class="letterDistImg hidden" src="/images/bar-chart_green.png">
    // 	 *       </td>
    // 	 *       <td class="cell">
    // 	 * 	<div class="character">
    // 	 * 	  V</div>
    // 	 * 	<img class="letterDistImg hidden" src="/images/bar-chart_green.png">
    // 	 *       </td>
    // 	 *       <td class="cell">
    // 	 * 	<div class="character fillCharGray">
    // 	 * 	  E</div>
    // 	 * 	<img class="letterDistImg hidden" src="/images/bar-chart.png">
    // 	 *       </td>
    // 	 *       <td class="cell">
    // 	 * 	<div class="character">
    // 	 * 	  D</div>
    // 	 * 	<img class="letterDistImg hidden" src="/images/bar-chart.png">
    // 	 *       </td>
    // 	 *     </tr>
    // 	 *   </tbody>
    // 	 * </table>
    // 	 *
    // 	 * [1] Return the concatenation of the values of all elements of class "cell"
    // 	 *
    // 	 *************************************************************************************************************/
    // 	let answer = "";
    // 	const table = document.getElementById('id_fillPaneSlotTable');
    // 	if( table ) {
    // 	    const rows = table.querySelectorAll( 'tr' );
    // 	    for( const row of [].slice.call( rows ) ) {
    // 		// Get all cells from the current row
    // 		const cells = row.querySelectorAll( 'td' );
    // 		// Iterate through each cell and extract the text
    // 		for (const cell of cells) {
    // 		    const chars = cell.querySelectorAll('.character');
    // 		    for( const char of chars ) {
    // 			if( char ) {
    // 			    answer += char.textContent.trim();
    // 			}
    // 		    }
    // 		}
    // 	    }
    // 	} else {
    // 	    message( "getCurrentAnswer: cannot locate id_fillPaneSlotTable", Severities.warn );
    // 	}
    // 	return( answer );
    // }
    function filterAnswerPrep(filterTypeId) {
        /***************************************************************************************************************
         * Prepare to simulate the clicking on the button to a word to be excluded.
         * FIXME: This doesn't do anything on the first execution... but does on subsequent ones.
         *************************************************************************************************************/
        message("filterAnswerPrep: starting...", Severities.log);
        var addSlotFilterButton = document.getElementById('id_addSlotFilterBtn');
        if (addSlotFilterButton) {
            // Simulate a click event on the Exclude button
            addSlotFilterButton.click();
            var excludeListTypeButton = document.getElementById(filterTypeId);
            if (excludeListTypeButton) {
                excludeListTypeButton.click();
            }
            else {
                message("excludeAnswer: cannot locate excludeListTypeButton", Severities.warn);
            }
        }
        else {
            message("excludeAnswer: cannot locate id_addSlotFilterBtn", Severities.warn);
        }
    }
    function excludeWord(word, filterTypeId) {
        filterAnswerPrep(filterTypeId);
        var addWordButton = document.getElementById('id_slotFilterAddWordBtn');
        if (addWordButton) {
            addWordButton.click();
            var sfw = document.getElementsByClassName('slotFilterWord');
            if (sfw) {
                sfw[0].value = word;
                sfw[0].blur();
            }
            else {
                message("excludeWord: cannot locate elements of class slotFilterWord", Severities.warn);
            }
        }
        else {
            message("excludeWord: cannot locate id_slotFilterAddWordBtn", Severities.warn);
        }
    }
    function excludeAnswer() {
        /***************************************************************************************************************
         * Simulate clicking on the button to a word to be excluded. Then add the current word.
         *************************************************************************************************************/
        message("excludeAnswer: starting...", Severities.log);
        // const answer = getCurrentAnswer();
        // message( "excludeAnswer: answer = " + answer, Severities.info );
        // if( !answer ) {
        //     message( "excludeAnswer: Error! answer is NULL!", Severities.error );
        // } else {
        //     message( "excludeAnswer: answer is " + answer, Severities.info );
        // }
        // excludeWord( answer, 'id_excludeListType' );
    }
    // Add a button after ELEMENT with label TEXT and a callback of FUNCT.
    function addExcludeAnswerButton(element, text, funct) {
        message("addExcludeAnswerButton; funct = " + funct, Severities.log);
        if (!element) {
            message("addExcludeAnswerButton: Error: null element given!", Severities.error);
        }
        else {
            var buttonElement = document.createElement("button");
            buttonElement.textContent = text;
            buttonElement.classList.add("button");
            buttonElement.addEventListener('click', funct);
            if (element.parentNode) {
                element.parentNode.insertBefore(buttonElement, element.nextSibling);
            }
            else {
                message("addExcludeAnswerButton: no parentNode!", Severities.error);
            }
        }
    }
    function simulateKeyPress(element) {
        var event = new KeyboardEvent('keydown', {
            key: '@', // @ key code
            shiftKey: true, // @ requires shift key
        });
        window.dispatchEvent(event);
    }
    function toggleCurrentAnswer(className) {
        // Toggle each letter in the current answer with respect to CLASSNAME.
        // Class is expected to be either "shaded" or "circle".
        // FIXME: This changes the state of elements in the DOM, but not the control structure.
        // Therefore, the state is not saved.
        var highlights = document.getElementsByClassName('highlight');
        for (var i = 0; i < highlights.length; i++) {
            var hi = highlights[i];
            var characters = hi.getElementsByClassName('character');
            for (var j = 0; j < characters.length; j++) {
                var ch = characters[j];
                if (ch.classList.contains(className)) {
                    message("char: " + ch.textContent + " contains " + className, Severities.log);
                }
                else {
                    message("char: " + ch.textContent + " DOES NOT contain " + className, Severities.log);
                }
            }
            simulateKeyPress(hi);
            // if( className === "shaded" ) {
            // 	hi.classList.toggle( className );
            // } else {
            // 	if( className === "circle" ) {
            // 	    const circles = hi.getElementsByClassName( 'circle' );
            // 	    if( circles ) {
            // 		if( circles.length > 0 ) {
            // 		    for( let i=0; i < circles.length; i++ ) {
            // 			hi.removeChild( circles[ i ] );
            // 		    }
            // 		} else {
            // 		    // Add following element to hi: 		    <path d="M0.5 18 a17.5 17.5 0 1 0 17.5 -17.5" class="circle"></path>
            // 		    // However, there must be something else going on because this doesn't work!
            // 		    const pathElement = document.createElement( "path" );
            // 		    pathElement.setAttribute( "d", "M0.5 18 a17.5 17.5 0 1 0 17.5 -17.5" );
            // 		    pathElement.classList.add( "circle" );
            // 		    hi.appendChild( pathElement );
            // 		}
            // 	    }
            // 	}
            // }
        }
    }
    function toggleCurrentAnswerShaded() {
        toggleCurrentAnswer("shaded");
    }
    function toggleCurrentAnswerCircle() {
        toggleCurrentAnswer("circle");
    }
    function bulkAddSlotFilterIncludes() {
        message("bulkAddSlotFilterIncludes: starting...");
        var textInput = document.getElementById('id_bulkFilters');
        if (textInput) {
            var lines = textInput.value.split("\n");
            var nonLetters_1 = /[^A-Z]/g;
            lines.reverse().forEach(function (line) {
                excludeWord(line.toUpperCase().replace(nonLetters_1, ''), 'id_includeListType');
            });
            textInput.value = "";
        }
    }
    function displayTitleInTopBar() {
        var topTitle = document.getElementById("top_title");
        if (!topTitle) {
            var elements = document.getElementsByClassName("topBar");
            if (elements) {
                var topBar = elements[0]; // assume the first (and only?) one
                topTitle = document.createElement("span");
                topTitle.id = "top_title";
                topTitle.classList.add("top-title");
                topBar.appendChild(topTitle);
            }
        }
        if (topTitle) {
            var title_1 = document.getElementById("id_puzzleTitle");
            if (title_1) {
                topTitle.textContent = title_1.value;
            }
        }
    }
    function addBulkSlotFilterIncludesTextArea() {
        message("addBulkSlotFilterIncludesTextArea: starting...");
        var soc = document.getElementById('id_slotOptionsContainer');
        if (soc) {
            var filterIncludesElement = document.createElement("textarea");
            filterIncludesElement.id = "id_bulkFilters";
            filterIncludesElement.rows = 5;
            filterIncludesElement.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent the default form submission behavior
                bulkAddSlotFilterIncludes();
            });
            soc.insertAdjacentElement('beforeend', filterIncludesElement);
            var buttonElement = document.createElement("button");
            buttonElement.id = "id_includeTheseWordsButton";
            buttonElement.innerHTML = "Include these words";
            buttonElement.classList.add("button");
            buttonElement.style.width = "150px";
            buttonElement.addEventListener('click', bulkAddSlotFilterIncludes);
            filterIncludesElement.insertAdjacentElement('afterend', buttonElement);
        }
        else {
            message("addBulkSlotFilterIncludesTextArea: cannot locate element with 'id_showSlotFiltersBtn'", Severities.error);
        }
        message("addBulkSlotFilterIncludesTextArea: finished.");
    }
    message("Exclude Crosserville answer starting...", Severities.log);
    'use strict';
    filterAnswerPrep('id_excludeListType');
    // const fillPaneSlotTable = document.getElementById( "id_fillPaneSlotTable" );
    // const grid = document.getElementById( "id_grid" );
    // if( fillPaneSlotTable ) {
    // 	addExcludeAnswerButton( fillPaneSlotTable, "⬅ Exclude This Answer", excludeAnswer );
    // } else {
    // 	message( "element with id_fillPaneSlotTable not found", Severities.warn );
    // }
    // if( grid ) {
    // 	addExcludeAnswerButton( grid, "Toggle Current Answer Shaded", toggleCurrentAnswerShaded );
    // } else {
    // 	message( "element with id_grid not found", Severities.warn );
    // }
    //    addExcludeAnswerButton( grid, "Toggle Current Answer Circle", toggleCurrentAnswerCircle );
    // const excludeFillFromFillButton = document.getElementById( 'id_excludeFillFromFillBtn' );
    // if( excludeFillFromFillButton ) {
    // 	excludeFillFromFillButton.addEventListener( 'click', excludeAnswer );
    // } else {
    // 	message( "no excludeFillFromFillButton!", Severities.warn );
    // }
    var style = document.createElement('style');
    style.textContent = "\n.gridControlContainer {\ndisplay: grid;\n}\n#id_bulkFilters{\nwidth: 400px;\nmargin-top: 10px;\n}\n#id_includeTheseWordsButton {\nmargin-top: 5px;\n}\n#id_wordCountsTable {\ntable-layout: fixed;\ndisplay: flex;\n/* flex-direction: column-reverse; */\n}\n\n#id_wordCountsTable tbody {\ndisplay: flex;\n/* flex-direction: row-reverse; */\n}\n\n#id_wordCountsTable tr {\ndisplay: flex;\nflex-direction: column;\nwidth: 100%;\n}\n\n#id_wordCountsTable th,\n#id_wordCountsTable td {\n/* flex: 1; */\ntext-align: right;\nmargin-left: 20px;\n/* border: 1px solid black; */\n}\n\n#id_wordCountsTable td:nth-child(even) {\nposition: relative;\nmargin-left: 50px;\nmargin-top: -20px;\n}\n.top-title{\ncolor: rgba(255,255,255,.8);\n}\n:root {\n  --highlight-focus: lightblue;\n}\n";
    document.head.appendChild(style);
    addBulkSlotFilterIncludesTextArea();
    var title = document.getElementById("id_puzzleTitle");
    if (title) {
        title.addEventListener('input', function (event) {
            displayTitleInTopBar();
        });
    }
    var puzzle = document.getElementById("id_puzzle");
    if (puzzle) {
        var observer = new MutationObserver(function (mutations) {
            for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
                var mutation = mutations_1[_i];
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function (node) {
                        if (node instanceof HTMLElement) {
                            // Call your function here for the new element
                            displayTitleInTopBar();
                        }
                    });
                }
            }
        });
        observer.observe(puzzle, {
            childList: true,
            subtree: true
        });
    }
})();
// Local Variables:
// time-stamp-line-limit: 20
// time-stamp-format: "%Y-%02m-%02d_%02H-%02M"
// time-stamp-active: t
// time-stamp-start: "^//[ 	]*@version[ 	]+"
// time-stamp-end: "$"
// End:

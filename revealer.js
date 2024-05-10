"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var info = [
    ['Fred Flintstone', 'Waterbuffalo member'],
    ['Barney Rubble', 'Geek'],
    ['Wilma Flintstone', 'long-suffering, long-suffering, long-suffering, long-suffering, long-suffering, long-suffering, long-suffering, long-suffering, long-suffering,  wife'],
    ['Betty Rubble', 'also a long-suffering, long-suffering, long-suffering, long-suffering, long-suffering, long-suffering wife'],
];
var entry = 0;
var person_number = document.getElementById("person_number");
var fact = document.getElementById("fact");
var person = document.getElementById("person");
var person_number_label = document.getElementById("person_number_label");
// Function to remove an element from the DOM
function removeElement(elementToRemove) {
    if (elementToRemove && elementToRemove.parentNode) {
        elementToRemove.parentNode.removeChild(elementToRemove);
    }
}
// Function to create a new element and replace the old one, returning the new one
function replaceElement(id, oldElement, newElementTag, newElementContent) {
    // Create a new element
    var newElement = document.createElement(newElementTag);
    // If new content is provided, set it as the text content of the new element
    if (newElementContent) {
        newElement.textContent = newElementContent;
        newElement.id = id;
    }
    // Replace the old element with the new one
    if (oldElement && oldElement.parentNode) {
        oldElement.parentNode.replaceChild(newElement, oldElement);
    }
    return (newElement);
}
function reveal() {
    if (!fact) {
        console.error("reveal: cannot find fact");
        return (1);
    }
    if (!person) {
        console.error("reveal: cannot find person");
        return (2);
    }
}
;
function updateFact(entry) {
    var newFact = info[Math.trunc(entry / 2)][1];
    if (person) {
        person.innerHTML = "";
    }
    if (fact) {
        fact.innerHTML = newFact;
        fact.classList.remove("faded");
    }
}
function updatePerson(entry) {
    var newPerson = info[Math.trunc(entry / 2)][0];
    if (person_number_label) {
        person_number_label.innerHTML = "person #";
    }
    if (person_number) {
        person_number.innerHTML = Math.trunc(entry / 2).toString();
    }
    if (entry % 2 != 0) {
        if (person) {
            person = replaceElement(person.id, person, "div", newPerson);
            if (person) {
                person.classList.remove("person-class");
                person.classList.add("person-class");
            }
        }
        if (fact) {
            fact.classList.add("faded");
        }
    }
}
var Directions;
(function (Directions) {
    Directions[Directions["right"] = 0] = "right";
    Directions[Directions["left"] = 1] = "left";
})(Directions || (Directions = {}));
;
var direction = Directions.right;
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowRight':
            if (direction == Directions.left) { // change of direction!
                entry++;
            }
            direction = Directions.right;
            if (entry < (2 * info.length)) {
                updateFact(entry);
                updatePerson(entry);
                entry++;
            }
            break;
        case 'ArrowLeft':
            if (direction == Directions.right) { // change of direction!
                entry--;
            }
            direction = Directions.left;
            if (entry > 0) {
                entry--;
                updateFact(entry);
                updatePerson(entry);
            }
            break;
        default:
            break;
    }
});
reveal();

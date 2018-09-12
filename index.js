// display a card
// be able to put text on card
// be able to put text on other side of card
// be able to add a new card
// be able to edit a card
// be able to delete a card

class Card {
  constructor(term, definition) {
    this.term = term;
    this.definition = definition;
  }
}

let newCard = document.getElementById("create-new");
let front = document.getElementById("front");
let back = document.getElementById("back");
let flip = document.getElementById("flip");
let edit = document.getElementById("edit");
let destroy = document.getElementById("delete");

let exampleCard = new Card ('TERM', 'DEFINITION');

front.innerHTML = exampleCard.term;
back.innerHTML = exampleCard.definition;
back.style.visibility = "hidden";

function flash() {
  if (front.style.visibility != "hidden") {
    front.style.visibility = "hidden";
    back.style.visibility = "visible";
  } else {
    front.style.visibility = "visible";
    back.style.visibility = "hidden";
  }
}

let myForm = document.getElementById('myForm');
formData = new FormData(myForm);

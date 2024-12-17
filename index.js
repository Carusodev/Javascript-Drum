//Detecting  Button Press




var numberOfDrumbuttons = document.querySelectorAll(".drum").length; // Trova tutti i bottoni drum
// La proprietà .length viene utilizzata nella prima riga del codice per determinare il numero di elementi selezionati. 
//In altre parole, serve a sapere quante diverse voci ci sono che corrispondono al selettore 
//.drum nel documento HTML.

for (var i = 0; i < numberOfDrumbuttons; i++) {
    // Aggiungi un event listener per ogni bottone drum
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
      
      
      var buttonInnerHTML = this.innerHTML;
      
      

       
      
      makeSound(buttonInnerHTML);

      // to animate the buttons
      buttonAnimation(buttonInnerHTML);
        
    });
}

 // I've used an event listener to the entire doc to  Detect Keyboard Press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  // to animate the buttons


  buttonAnimation(event.key);
});

// create a new function for the keys with the switch inside

function makeSound(key) {


  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();

      break;

      case "a":

      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();

      break;

      case "s":

      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();

      break;

      case "d":

      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();

      break;

      case "j":

      var audio = new Audio("sounds/snare.mp3");
      audio.play();

      break;


      case "k":

      var audio = new Audio("sounds/crash.mp3");
      audio.play();

      break;


      case "l":

      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();

      break;




    default: console.log(buttonInnerHTML);
      



  }






}

function buttonAnimation(currentKey) {


  // Generate animation with css

 var activeButton = document.querySelector("." + currentKey)

 // adding the class list to the activebutton pressed within css
 activeButton.classList.add("pressed");

 // creating the function to animate

 setTimeout(function() {

  //remove the pressed's class to remove the effect

  activeButton.classList.remove("pressed");



 // timer 100mseconds
 }, 100);




}
















//  var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
        


/* 
//targeting the button with query and adding an event listener (set up a function to be called)
// it finds the button and then we add the function to the event
// if we click the button it shows an alert
document.querySelector("button").addEventListener("click", handleClick); //we dont use the () to bypass the input


// Lets create a fx for the buttons
function handleClick() {
    alert("I got clicked!");
}


*/
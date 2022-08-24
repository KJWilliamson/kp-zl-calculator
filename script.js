// https://www.youtube.com/watch?v=f0SG2j6d-Kg
// https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

//Listening to key-presses
//Five things can happen when a person gets hold of a calculator. They can hit:
//a number key (0–9)
//an operator key (+, -, ×, ÷)
//the decimal key
// the equals key
// the clear key
// The first steps to building this calculator are to be able to (1) listen for all keypresses and (2) determine the type of key that is pressed. In this case, we can use an event delegation pattern to listen, since keys are all children of .calculator__keys.



const keys = 
    //this targets all of the buttons
document.querySelector('.calculator__keys');
//every event contains information about what is being clicked on
keys.addEventListener('click', event => {
    console.log(event.target);
    if (event.target.closest('button')) return
    
})


//Arrays populated with words
let firstWord = ["Mom","Dad","The Dog","The Cat","The Elephant"];
let secondWord = ["sat on","ate","danced with","saw","kissed"]; 
let thirdWord = ["a funny","a scary","a goofy","a slimy","a fat"]; 
let fouthWord = ["goat","monkey","fish","cow","frog"]; 
let fifthWord = ["on the moon","on the chair","in my spaghetti","in my soup","on the grass"]; 

// variable used to output the final sentence
let sentence = document.querySelector(".finalSentence");  

// const that selects all the buttons with the class name userButton
const buttons = document.querySelectorAll(".userButton");

//Assigning which button is which in the page
const button1 = buttons[0]; 
const button2 = buttons[1];
const button3 = buttons[2];
const button4 = buttons[3];
const button5 = buttons[4];

// Const that selects all buttons with the class name print
let outputs = document.querySelectorAll(".print");

const output1 = outputs[0]; 
const output2 = outputs[1]; 
const output3 = outputs[2]; 
const output4 = outputs[3]; 
const output5 = outputs[4]; 

// Function that randomly cycles through the first set of words in the first array.
button1.addEventListener("click", buttonOnePressed);
function buttonOnePressed()
{
    let random = Math.round(Math.random() * 4);
    console.log(firstWord[random]);
    output1.textContent = firstWord[random];
}

// Function that randomly cycles through the first set of words in the second array.
button2.addEventListener("click", buttonTwoPressed);
function buttonTwoPressed()
{
    let random = Math.round(Math.random() * 4);
    console.log(secondWord[random]);
    output2.textContent = secondWord[random];
}

// Function that randomly cycles through the first set of words in the third array.
button3.addEventListener("click", buttonThreePressed);
function buttonThreePressed()
{
    let random = Math.round(Math.random() * 4);
    console.log(thirdWord[random]);
    output3.textContent = thirdWord[random];
}

// Function that randomly cycles through the first set of words in the fourth array.
button4.addEventListener("click", buttonFourPressed);
function buttonFourPressed()
{
    let random = Math.round(Math.random() * 4);
    console.log(fouthWord[random]);
    output4.textContent = fouthWord[random];
}

// Function that randomly cycles through the first set of words in the fifth array.
button5.addEventListener("click", buttonFivePressed);
function buttonFivePressed()
{
    let random = Math.round(Math.random() * 4);
    console.log(fifthWord[random]);
    output5.textContent = fifthWord[random];
}

// Const that targets the button with class name submitButton and adds an eventlistener
const submit = document.querySelector(".submitButton").addEventListener("click",printSentence);
// Function to print out the sentence only if all 5 outputs were populated
function printSentence()
{
    if(output1.textContent === "" || output2.textContent === "" || output3.textContent === "" || output4.textContent === "" || output5.textContent === "")
        {
        alert("One or more options were left empty! \n Please select all the options available!");    
    }
    else
    { 
        const combineOutput = output1.textContent + " " + output2.textContent + " " + output3.textContent + " " + output4.textContent + " " + output5.textContent;
        sentence.textContent = combineOutput;
    }
}


const reset = document.querySelector(".resetButton");
reset.addEventListener("click", resetText);
// Function to add a reset button for the user to create new sentences
function resetText()
{
    output1.textContent = "";
    output2.textContent = "";
    output3.textContent = "";
    output4.textContent = "";
    output5.textContent = "";
    sentence.textContent = "";
}


const audio = document.querySelector(".audioButton");
audio.addEventListener("click", textToSpeach);
// Function that adds a text to speach option which reads the final sentence made
function textToSpeach()
{
    console.log("button pressed");
    const synth = window.speechSynthesis;
    const finalOut = output1.textContent + " " + output2.textContent + " " + output3.textContent + " " + output4.textContent + " " + output5.textContent
    const speach = new SpeechSynthesisUtterance(finalOut);

    synth.speak(speach);
}

// Keeps the output box hidden until the submit button is pressed
let box = document.querySelector("#hidden");


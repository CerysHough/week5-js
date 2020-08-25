let firstNumber = Number;
let secondNumber = Number;
let answer = 0;

function getNumbers () {
    firstNumber = parseInt(prompt("BEEP BOOP please enter your first number:"))
    if (isNaN(firstNumber)){
        alert("Okay... you're funny...")

    } else {
        secondNumber= parseInt(prompt("INITIATING SEQUENCE please enter your second number"));
        if (isNaN(secondNumber)){
            alert("Amazing top quality banter...")
    }
    }
}    

function sum (){
    getNumbers ();
    answer = firstNumber + secondNumber;
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation cutie: 
${firstNumber} + ${secondNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}

function subtract (){
    getNumbers ();
    answer = firstNumber - secondNumber;
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation sweetie: 
${firstNumber} - ${secondNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}

function multiply (){
    getNumbers ();
    answer = firstNumber * secondNumber;
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation hun: 
${firstNumber} * ${secondNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}

function divide () {
    getNumbers ();
    answer = firstNumber / secondNumber;
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation darling: 
${firstNumber} / ${secondNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}

function powerof () {
    getNumbers ();
    answer = firstNumber ** secondNumber;
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation babe: 
${firstNumber} ^ ${secondNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}

function root () {
    alert("Hello this is Cerys here, obviously you only need to enter one number but I'm afraid you will be asked for a second number because I wasn't thinking ahead when I wrote this code but honestly don't worry about it okay so anyway lets carry on now thats out the way");
    getNumbers ();
    answer = Math.sqrt(firstNumber);
    if (isNaN(answer)){
        } else {
            alert(`Here's your calculation angel:
√${firstNumber} = ${answer}`);
document.getElementById("result").innerHTML = `${answer}!!`;
        }
}








var array = [];

function getArrayInputValue() {
    array = document.getElementById("inputValue").value.split(",");
    generateOptions();
}

function generateOptions() {
    let selectOptions = document.getElementById("select-options");
    selectOptions.innerHTML = "";
    for(i = 0; i < array.length; i++){
        selectOptions.innerHTML += "<option>"+ (i+1) + "</option><br>"
    }
}

function getInputNumber() {
    let inputNumber = document.getElementById("inputNumber").value;
    return inputNumber;
}

function getSelectedOption() {
    let selectedOption = document.getElementById("select-options").value;
    return selectedOption;
}

const ARRAY_DIFFERENCE = 1;

function printArray() {
    var concatArray = "";
    for (let i = 0; i < array.length; i++) {
        if(i != (array.length - ARRAY_DIFFERENCE)) {
            concatArray += array[i] + ",";
        } else {
            concatArray += array[i];
        }
    }
    return concatArray;
}

const AFFECTED_POSITIONS = 0;

function insertElementOnArray() {
    array.splice(getSelectedOption() - ARRAY_DIFFERENCE, AFFECTED_POSITIONS, parseInt(getInputNumber()));
    document.getElementById("finalArray").innerHTML = printArray();
}


function example() {
    array = ["3", "5", "7", "10"];
    document.getElementById("inputValue").value = array;
    generateOptions();
    let inputNumber = "2";
    document.getElementById("inputNumber").value = inputNumber;
    let selectOption = 3;
    document.getElementById("select-options").value = selectOption;
    insertElementOnArray();
}

/*
function getArrayOfRandomNumber() {
    return Array.from({length: 5}, ()=> Math.floor(Math.random() * 100) + 1);
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function loadExample() {
    let randomArray = getArrayOfRandomNumber();
    document.getElementById("inputValue").value = randomArray;
    generateOptions();
    let arrayDiference = 1;
    let insertOption = 0;
    let insertPosition = document.getElementById("select-options").value;
    let randomNumber = getRandomNumber();
    document.getElementById("inputNumber").value = randomNumber;
    randomArray.splice(insertPosition - arrayDiference, insertOption, Number(inputNumber));
    document.getElementById("finalArray").innerHTML = arrayOfValues;
}
*/
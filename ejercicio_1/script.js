function getFilledArray() {
    let stringArray = document.getElementById("inputNumberValue").value;
    return stringArray.split(",");
}

function parseStringToInt() {
    return getFilledArray().map(element => parseInt(element));
}

function addition(numberArray) {
    let addition = 0;
    for(let i = 0; i < numberArray.length; i++) {
        addition += numberArray[i];
    }
    return addition;
}

function half(arrayLength, numberArray) {
    let half = addition(numberArray) / arrayLength;
    return half;
}

function elderly(numberArray, firstIteration) {
    let elderly;
    for(let i = 0; i < numberArray.length; i++) {
        if(i === firstIteration) {
            elderly = numberArray[i];
        } else {
            if(numberArray[i] > elderly) {
                elderly = numberArray[i];
            }
        }
    }
    return elderly;
}

function minor(numberArray, firstIteration) {
    let minor;
    for(let i = 0; i < numberArray.length; i++) {
        if(i === firstIteration) {
            minor = numberArray[i];
        } else {
            if(numberArray[i] < minor) {
                minor = numberArray[i];
            }
        }
    }
    return minor;
}

function calculate() {
    var numberArray = parseStringToInt();
    var arrayLength = numberArray.length;
    let firstIteration = 0;
    document.getElementById("addition").textContent = addition(numberArray);
    document.getElementById("half").textContent = half(arrayLength, numberArray);
    document.getElementById("elderly").textContent = elderly(numberArray, firstIteration);
    document.getElementById("minor").textContent = minor(numberArray, firstIteration);
}

function loadExample() {
    var imputExample = "63,45,58,56";
    document.getElementById("inputNumberValue").value = imputExample;
    calculate();
}
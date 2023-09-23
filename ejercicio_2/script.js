function getArrayOfRandomNumber() {
    return Array.from({length: 5}, ()=> Math.floor(Math.random() * 10) + 1);
}

function getFirstField() {
    return document.getElementById("inputValue1").value = getArrayOfRandomNumber();
}

function getSecondField() {
    return document.getElementById("inputValue2").value = getArrayOfRandomNumber();
}

function getConcatValue() {
    var firstField = document.getElementById("inputValue1").value;
    var secondField = document.getElementById("inputValue2").value;
    var concatFields =String(firstField).concat(String(secondField));
    var formattedConcat = concatFields.replaceAll(",", "");
    return document.getElementById("concatValue").innerHTML = formattedConcat;
}
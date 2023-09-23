/* Obtenemos el valor del input y lo hacemos array */ 
function getArrayOfInputValue() {
    var inputValue = document.getElementById("inputNumberValue").value;
    return inputValue.split(",");
}

/* Del array obtenido (Array String) lo parseamos a (Array int) */ 
function parseStringToInt() {
  return getArrayOfInputValue().map(element => parseInt(element));
}

function getAscendingSort() {
    let sortedArray = parseStringToInt().sort((a,b) => a - b);
    return document.getElementById("ascend").innerText = sortedArray;
}

function getDescentSort() {
    let sortedArray = parseStringToInt().sort((a,b) => b - a);
    return document.getElementById("descent").innerText = sortedArray;
}

function chargeExample() {
    var stringExample = [91,73,0,84,11];
    document.getElementById("inputNumberValue").value = stringExample;
    var ascendingArray = getAscendingSort();
    var descendingArray = getDescentSort();
}
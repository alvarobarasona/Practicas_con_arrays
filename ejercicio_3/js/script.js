function getNumberArray() {
    var inputNumber = document.getElementById("inputNumberValue").value;
    console.log(inputNumber);

    let arrayOfNumber = inputNumber.split(",");
    console.log(arrayOfNumber);

    let arrayOfIntegers = [];

    arrayOfNumber.forEach(element => {
        arrayOfIntegers.push(parseInt(element));
    });
    return arrayOfIntegers;
}

function getAscendingSort() {
    let sortedArray = getNumberArray().sort((a,b) => a - b);
    document.getElementById("ascend").innerHTML = sortedArray;
}

function getDescentSort() {
    let sortedArray = getNumberArray().sort((a,b) => b - a);
    document.getElementById("descent").innerHTML = sortedArray;
}

function chargeExample() {
    var stringExample = [91,73,0,84,11];
    document.getElementById("inputNumberValue").value = stringExample;
    getAscendingSort();
    getDescentSort();
}
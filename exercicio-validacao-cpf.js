function cpfValidation(cpfNumber){
    const cpfArray = getArray(cpfNumber);

    const utilNumbersArray = getUtilNumbers(cpfArray);

    let firstNumber = getFistNumber(utilNumbersArray);
    if(firstNumber > 9){
        firstNumber = 0;
    }

    utilNumbersArray.push(firstNumber);

    let secondNumber = getSecondNumber(utilNumbersArray);
    if(secondNumber > 9){
        secondNumber = 0;
    }
    utilNumbersArray.push(secondNumber);

    compareNumbers(firstNumber, secondNumber, cpfArray);

}

function getArray(cpfNumber){
    const cleanCpfNumber = cpfNumber.replace(/\D+/g, '');

    const arraycleanCpfNumber = cleanCpfNumber.split('');

    return arraycleanCpfNumber.map(value => Number(value));
}

function getUtilNumbers (cpfArray) {
    const arrayNumber = cpfArray.map(value => Number(value)).slice(0, -2);

    return arrayNumber
}

function getFistNumber(arrayNumber){
    let arraySize = arrayNumber.length +1;
    const preArrayCalc = arrayNumber.map((value) => value * (arraySize--)).reduce(function(acumulator, value){
        acumulator += value
        return acumulator;
    });
    return 11 - (preArrayCalc % 11);
}

function getSecondNumber(arrayNumber){
    let arraySize = arrayNumber.length +1;
    const preArrayCalc = arrayNumber.map((value) => value * (arraySize--)).reduce(function(acumulator, value){
        acumulator += value
        return acumulator;
    });
    return 11 - (preArrayCalc % 11);
}

function compareNumbers(firstNumber, secondNumber, cpfArray){
    if (firstNumber === cpfArray[9] && secondNumber === cpfArray[10]){
        return console.log('Valid CPF number!!!');
    }
    return console.log('Inválid CPF number!!!');
}

cpfValidation('705.484.450-52');
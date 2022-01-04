function CPF(cpfNumber){
    this.cpfArray = getArray(cpfNumber);

    this.utilNumbersArray = getUtilNumbers(this.cpfArray);

    this.firstNumber = getFistNumber(this.utilNumbersArray);
   

    this.utilNumbersArray.push(this.firstNumber);

    this.secondNumber = getSecondNumber(this.utilNumbersArray);
  
    this.utilNumbersArray.push(this.secondNumber);

    this.cpfValidation = validation(this.firstNumber, this.secondNumber, this.cpfArray, cpfNumber);

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

    let firstNumber = 11 - (preArrayCalc % 11);
    if(firstNumber > 9){
       return firstNumber = 0;
    }
    return firstNumber;
}

function getSecondNumber(arrayNumber){
    let arraySize = arrayNumber.length +1;
    const preArrayCalc = arrayNumber.map((value) => value * (arraySize--)).reduce(function(acumulator, value){
        acumulator += value
        return acumulator;
    });

    let secondNumber = 11 - (preArrayCalc % 11);

    if(secondNumber > 9){
        return secondNumber = 0;
    }
    return secondNumber;
}

function validation(firstNumber, secondNumber, cpfArray, cpfNumber){
    if(cpfNumber === 'undefined') return console.log('Inválid CPF number!!!');
    if(cpfArray.length < 11) return  console.log('Inválid CPF number!!!');
    if(cpfArray[0].toString().repeat(cpfArray.length) === cpfNumber.replace(/\D+/g, '')) return console.log('Inválid CPF number!!!');
    if (firstNumber === cpfArray[9] && secondNumber === cpfArray[10]) return console.log('Valid CPF number!!!');
}

const p1 = new CPF('111.111.111-11');
p1.cpfValidation;
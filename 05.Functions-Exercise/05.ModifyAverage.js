function modifyAverage(number) {
    let numStr = String(number)
    let average = (numString) => numStr.split('').map(Number).reduce((a, b) => a + b) / numStr.length

    while (average(numStr) <= 5){
        numStr += '9'
    }

    console.log(numStr)
}

modifyAverage(101)
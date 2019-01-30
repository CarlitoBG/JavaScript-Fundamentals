function processOddNumbers(arr) {
    let result = arr.filter((num, i) => i % 2 === 1).map(num => num * 2).reverse()
    console.log(result.join(' '))
}

processOddNumbers([10, 15, 20, 25])
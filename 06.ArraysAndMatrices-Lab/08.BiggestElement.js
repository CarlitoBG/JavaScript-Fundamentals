function biggestElement(matrix) {
    let biggestNumber = Number.NEGATIVE_INFINITY
    matrix.forEach(r => r.forEach(c => biggestNumber = Math.max(biggestNumber, c)))

    console.log(biggestNumber)
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]]
)
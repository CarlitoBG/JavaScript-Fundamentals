function diagonalAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number))

    let mainDiagonalSum = matrix.map((arr, i) => arr[i]).reduce((a, b) => a + b)
    let secondaryDiagonalSum = matrix.map((arr, i) => arr[arr.length - 1 - i]).reduce((a, b) => a + b)

    if (mainDiagonalSum === secondaryDiagonalSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (col !== row && col !== matrix[row].length - 1 - row){
                    matrix[row][col] = mainDiagonalSum
                }
            }
        }
    }

    matrix.forEach(e => console.log(e.join(' ')))
}

diagonalAttack(
    ['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)
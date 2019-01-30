function magicMatrices(matrix) {
    let targetSum = matrix[0].reduce((a, b) => a + b)

    for (let row = 1; row < matrix.length; row++) {
        let sumNextRow = matrix[row].reduce((a, b) => a + b)

        if (targetSum !== sumNextRow){
            return false
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let sumCurrentCol = 0

        for (let row = 0; row < matrix.length; row++) {
            sumCurrentCol += matrix[row][col]
        }

        if (sumCurrentCol !== targetSum){
            return false
        }
    }
    return true
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])
function expedition(primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {
    let steps = 1
    let primaryMatrixRows = primaryMatrix.length
    let primaryMatrixCols = primaryMatrix[0].length
    let secondaryMatrixRows = secondaryMatrix.length
    let secondaryMatrixCols = secondaryMatrix[0].length

    for (let coordinates of overlayCoordinates) {
        modifyPrimaryMatrix(coordinates)
    }

    let currentPosition = [startingCoordinates[0], startingCoordinates[1]]
    let previousDirection = ""

    while (true) {
        let currentRow = currentPosition[0]
        let currentCol = currentPosition[1]

        if (currentRow + 1 < primaryMatrixRows && primaryMatrix[currentRow + 1][currentCol] === 0 && previousDirection !== "up") {
            currentPosition = [currentRow + 1, currentCol]
            previousDirection = "down"
        } else if (currentCol + 1 < primaryMatrixCols && primaryMatrix[currentRow][currentCol + 1] === 0 && previousDirection !== "left") {
            currentPosition = [currentRow, currentCol + 1]
            previousDirection = "right"
        } else if (currentRow > 0 && primaryMatrix[currentRow - 1][currentCol] === 0 && previousDirection !== "down") {
            currentPosition = [currentRow - 1, currentCol]
            previousDirection = "up"
        } else if (currentCol > 0 && primaryMatrix[currentRow][currentCol - 1] === 0 && previousDirection !== "right") {
            currentPosition = [currentRow, currentCol - 1]
            previousDirection = "left"
        } else {
            break
        }
        steps++
    }

    console.log(steps)
    definePosition(currentPosition)

    function modifyPrimaryMatrix([targetRow, targetCol]) {
        for (let row = 0; row < secondaryMatrixRows; row++) {
            if (row + targetRow < primaryMatrixRows) {
                for (let col = 0; col < secondaryMatrixCols; col++) {
                    if (primaryMatrix[targetRow + row][targetCol + col] !== undefined && secondaryMatrix[row][col] === 1) {
                        primaryMatrix[targetRow + row][targetCol + col] = primaryMatrix[targetRow + row][targetCol + col] === 0 ? 1 : 0
                    }
                }
            }
        }
    }

    function definePosition([currentRow, currentCol]) {
        if (currentRow === 0) {
            console.log("Top")
        } else if (currentRow === primaryMatrixRows - 1) {
            console.log("Bottom")
        } else if (currentCol === 0) {
            console.log("Left")
        } else if (currentCol === primaryMatrixCols - 1) {
            console.log("Right")
        } else if (currentRow < primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 1")
        } else if (currentRow < primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 2")
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol < primaryMatrixCols / 2) {
            console.log("Dead end 3")
        } else if (currentRow >= primaryMatrixRows / 2 && currentCol >= primaryMatrixCols / 2) {
            console.log("Dead end 4")
        }
    }
}

expedition(
        [[1, 1, 0, 1, 1, 1, 1, 0],
         [0, 1, 1, 1, 0, 0, 0, 1],
         [1, 0, 0, 1, 0, 0, 0, 1],
         [0, 0, 0, 1, 1, 0, 0, 1],
         [1, 0, 0, 1, 1, 1, 1, 1],
         [1, 0, 1, 1, 0, 1, 0, 0]],
        [[0, 1, 1],
         [0, 1, 0],
         [1, 1, 0]],
        [[1, 1],
         [2, 3],
         [5, 3]],
        [0, 2]
)

expedition(
        [[1, 1, 0, 1],
         [0, 1, 1, 0],
         [0, 0, 1, 0],
         [1, 0, 1, 0]],
        [[0, 0, 1, 0, 1],
         [1, 0, 0, 1, 1],
         [1, 0, 1, 1, 1],
         [1, 0, 1, 0, 1]],
        [[0, 0],
         [2, 1],
         [1, 0]],
        [2, 0]
)
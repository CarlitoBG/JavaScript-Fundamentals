function orbit([width, height, x, y]) {
    let matrix = fillMatrix(width, height)

    for (let rows = 0; rows < width; rows++) {
        for (let cols = 0; cols < height; cols++) {
            matrix[rows][cols] = Math.max(Math.abs(rows - x), Math.abs(cols - y)) + 1
        }
    }

    matrix.forEach(e => console.log(e.join(' ')))

    function fillMatrix(width, height) {
        let matrix = []
        for (let i = 0; i < height; i++) {
            matrix.push('0'.repeat(width).split('').map(Number))
        }
        return matrix
    }
}

orbit([5, 5, 2, 2])
//orbit([4, 4, 0, 0])
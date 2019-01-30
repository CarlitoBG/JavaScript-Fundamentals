function airPollution(arr, forces) {
    let matrix = []
    for (let i = 0; i < arr.length; i++) {
        matrix[i] = arr[i].split(' ').map(Number)
    }

    for (let commands of forces) {
        let tokens = commands.split(' ')
        let force = tokens[0]
        let value = Number(tokens[1])

        if (force === 'breeze' && value >= 0 && value < matrix.length){
            for (let i = 0; i < matrix.length; i++) {
                matrix[value][i] = matrix[value][i] - 15
                if (matrix[value][i] < 0){
                    matrix[value][i] = 0
                }

            }
        }else if (force === 'gale'){
            for (let i = 0; i < matrix.length; i++) {
                if (value >= 0 && value < matrix[i].length){
                    matrix[i][value] = matrix[i][value] - 20
                    if (matrix[i][value] < 0){
                        matrix[i][value] = 0
                    }

                }
            }
        }else if(force === 'smog'){
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix.length; col++) {
                    matrix[row][col] = matrix[row][col] + value
                }
            }
        }
    }

    let pollutedAreas = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if (matrix[row][col] >= 50){
                pollutedAreas.push(`[${row}-${col}]`)
            }
        }
    }

    if (pollutedAreas.length > 0){
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    }else {
        console.log('No polluted areas')
    }
}
/*
airPollution([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
)

airPollution([
        "5 7 3 28 32",
        "41 12 49 30 33",
        "3 16 20 42 12",
        "2 20 10 39 14",
        "7 34 4 27 24",
    ],
    ["smog 11", "gale 3", "breeze 1", "smog 2"]
)
*/
airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)
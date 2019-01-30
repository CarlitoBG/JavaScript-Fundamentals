function uniqueSequences(input) {
    let uniqueArray = new Map()

    for (let line of input) {
        let arr = JSON.parse(line).sort((a, b) => b - a)
        let result = `[${arr.join(', ')}]`

        if (!uniqueArray.has(result)){
            uniqueArray.set(result, arr.length)
        }
    }
    console.log([...uniqueArray.keys()].sort((arr1, arr2) => uniqueArray.get(arr1) - uniqueArray.get(arr2)).join("\n"))
}

uniqueSequences(
    ['[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]']
)
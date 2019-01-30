function radioCrystals(input) {
    let targetSize = input[0]

    let cut = (num) => num /4
    let lap = (num) => num * 0.8
    let grind = (num) => num - 20
    let etch = (num) => num - 2
    let xray = (num) => {
        console.log('X-ray x1')
        return ++num
    }
    let transportAndWash = (num) => {
        console.log(`Transporting and washing`)
        return Math.floor(num)
    }

    for (let i = 1; i < input.length; i++) {
        let microns = input[i]
        console.log(`Processing chunk ${microns} microns`)
        microns = executeOperation(targetSize, microns, 'Cut', cut)
        microns = executeOperation(targetSize, microns, 'Lap', lap)
        microns = executeOperation(targetSize, microns, 'Grind', grind)
        microns = executeOperation(targetSize, microns, 'Etch', etch)

        if(microns + 1 === targetSize){
            microns = xray(microns)
        }
        console.log(`Finished crystal ${microns} microns`)
    }

    function executeOperation(targetSize, currentSize, operationName, operation) {
        let counter = 0
        while (operation(currentSize) >= targetSize || currentSize - targetSize === 1){
            currentSize = operation(currentSize)
            counter++
        }

        if (counter > 0){
            console.log(`${operationName} x${counter}`)
            currentSize = transportAndWash(currentSize)
        }
        return currentSize
    }
}

radioCrystals([1375, 50000])
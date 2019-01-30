function insideVolume(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i]
        let y = input[i + 1]
        let z = input[i + 2]
        
        if (inVolume(x, y, z)){
            console.log('inside')
        }else {
            console.log('outside')
        }
    }

    function inVolume(x, y, z) {
        const [x1, x2, y1, y2, z1, z2] = [10, 50, 20, 80, 15, 50]

        return x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2
    }
}

insideVolume([8, 20, 22])
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])
function solve(array) {
    let x1 = array[0]
    let y1 = array[1]
    let z1 = array[2]

    let x2 = array[3]
    let y2 = array[4]
    let z2 = array[5]

    let deltaX = Math.abs(x1 - x2)
    let deltaY = Math.abs(y1 - y2)
    let deltaZ = Math.abs(z1 - z2)

    let distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2) + Math.pow(deltaZ, 2)) //Pythagoras' theorem
    console.log(distance)
}

solve([3.5, 0, 1, 0, 2, -1])
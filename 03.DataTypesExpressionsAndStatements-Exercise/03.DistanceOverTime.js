function solve(array) {
    let firstObjectSpeedInKmPerHour = array[0]
    let secondObjectSpeedInKmPerHour = array[1]
    let timeInSeconds = array[2]

    let distanceGoneFirstObject = (firstObjectSpeedInKmPerHour) * (timeInSeconds / 3600) * 1000
    let distanceGoneSecondObject = (secondObjectSpeedInKmPerHour) * (timeInSeconds / 3600) * 1000

    let delta = Math.abs(distanceGoneFirstObject - distanceGoneSecondObject)
    console.log(delta)
}

solve([11, 10, 120])
function validityChecker([x1, y1, x2, y2]) {
    let point0 = {x: 0, y: 0}
    let point1 = {x: x1, y: y1}
    let point2 = {x: x2, y: y2}

    console.log(isValid(point1, point0));
    console.log(isValid(point2, point0));
    console.log(isValid(point1, point2));

    function isValid(firstPoint, secondPoint) {
        let x = Math.abs(firstPoint.x - secondPoint.x)
        let y = Math.abs(firstPoint.y - secondPoint.y)
        let distance = Math.sqrt(x * x + y * y)

        let result = `{${firstPoint.x}, ${firstPoint.y}} to {${secondPoint.x}, ${secondPoint.y}} is `
        return parseInt(distance) === distance ? result + "valid" : result + "invalid"
    }
}

validityChecker([3, 0, 0, 4])

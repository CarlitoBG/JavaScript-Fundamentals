function tripLength([x1, y1, x2, y2, x3, y3]) {
    let getDistance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

    let AB = getDistance(x1, y1, x2, y2)
    let BC = getDistance(x2, y2, x3, y3)
    let AC = getDistance(x1, y1, x3, y3)

    if (AB + BC <= BC + AC) {
        console.log(`1->2->3: ${AB + BC}`)
    } else if (AB + AC < BC + AC) {
        console.log(`2->1->3: ${AB + AC}`)
    } else {
        console.log(`1->3->2: ${BC + AC}`)
    }
}

tripLength([-1, -2, 3.5, 0, 0, 2])
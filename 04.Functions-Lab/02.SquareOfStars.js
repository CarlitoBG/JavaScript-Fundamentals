function squareOfStars(n) {
    for (let i = 1; i <= n; i++) {
        printStars()
    }

    function printStars(count = n) {
        console.log('* '.repeat(count))
    }
}

squareOfStars(5)
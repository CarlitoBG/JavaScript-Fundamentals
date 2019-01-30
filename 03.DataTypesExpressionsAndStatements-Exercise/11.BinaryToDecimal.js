function solve(binaryNum) {
    let decimal = binaryNum.split('').reverse().reduce(
        function (x, y, i) {
            return (y === '1') ? x + Math.pow(2, i) : x
        }, 0)

    //let decimal = parseInt(binaryNum, 2);
    console.log(decimal);
}

solve('00001001')
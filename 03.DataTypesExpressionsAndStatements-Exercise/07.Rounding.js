function solve([number, precision]) {
    if (precision > 15){
        precision = 15
    }

    let multiplier = Math.pow(10, precision)
    let roundedNumber = Math.round(number * multiplier) / multiplier
    console.log(roundedNumber);
}

solve([3.1415926535897932384626433832795, 2])
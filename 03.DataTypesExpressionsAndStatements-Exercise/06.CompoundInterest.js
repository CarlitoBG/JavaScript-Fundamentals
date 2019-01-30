function solve(array) {
    let principalSum = array[0]
    let interestRate = array[1] / 100
    let frequency = 12 / array[2]
    let totalTimeSpan = array[3]

    let compoundInterest = principalSum * Math.pow(1 + (interestRate / frequency), frequency * totalTimeSpan)
    console.log(compoundInterest.toFixed(2));
}

solve([1500, 4.3, 3, 6])
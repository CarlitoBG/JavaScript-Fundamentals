function solve(inches) {
    let feet = Math.floor(inches / 12)
    let remainder = inches % 12

    console.log(`${feet}'-${remainder}"`)
}

solve(36)
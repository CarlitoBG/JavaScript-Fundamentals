function spiceMustFlow([arr]) {
    let startingYield = Number(arr)
    let [days, totalAmountOfSpice] = [0, 0]

    while (startingYield >= 100){
        totalAmountOfSpice += startingYield - 26
        days++
        startingYield -= 10
    }
    totalAmountOfSpice -= 26

    console.log(days)
    console.log(totalAmountOfSpice < 0 ? 0 : totalAmountOfSpice)
}

spiceMustFlow(['111'])
//spiceMustFlow(['450'])
//spiceMustFlow(['99'])
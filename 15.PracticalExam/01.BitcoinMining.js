function bitcoinMining(input) {
    let goldToBeMined = input.map(Number)
    let [totalSum, bitcoinsBought, firstDayOfPurchase, purchased] = [0, 0, 0, false]

    for (let i = 1; i <= goldToBeMined.length; i++) {
        if(i % 3 === 0){
            goldToBeMined[i - 1] = goldToBeMined[i - 1] - (goldToBeMined[i - 1] * 30 / 100)
        }
        totalSum += goldToBeMined[i - 1] * 67.51

        while(totalSum >= 11949.16){
            totalSum -= 11949.16
            bitcoinsBought++

            if (!purchased){
                firstDayOfPurchase = i
                purchased = true
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`)
    if (firstDayOfPurchase > 0){
        console.log(`Day of the first purchased bitcoin: ${firstDayOfPurchase}`)
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`)
}

//bitcoinMining(['100', '200', '300'])
//bitcoinMining(['50', '100'])
bitcoinMining(['3124.15', '504.212', '2511.124'])
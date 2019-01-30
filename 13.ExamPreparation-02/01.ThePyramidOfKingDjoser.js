function pyramidOfKingDjoser(width, increment) {
    let totalSteps = Math.ceil(width / 2)
    let [stone, marble, lapis] = [0, 0, 0]

    for (let i = 1; i <= totalSteps - 1; i++) {
        let currentStone = (width - 2) * (width - 2)
        if (i % 5 === 0){
            lapis += (width * width) - currentStone
        }else {
            marble += (width * width) - currentStone
        }
        stone += currentStone
        width -= 2
    }
    let gold = width * width

    console.log('Stone required: ' + Math.ceil(stone * increment))
    console.log('Marble required: ' + Math.ceil(marble * increment))
    console.log('Lapis Lazuli required: ' + Math.ceil(lapis * increment))
    console.log('Gold required: ' + Math.ceil(gold * increment))
    console.log('Final pyramid height: ' + Math.floor(totalSteps * increment))
}

pyramidOfKingDjoser(11, 1)
//pyramidOfKingDjoser(11, 0.75)
//pyramidOfKingDjoser(12, 1)
//pyramidOfKingDjoser(23, 0.5)
function dnaHelix(n) {
    const dnaSequence = 'ATCGTTAGGG'

    for (let i = 0; i < n; i++) {
        let dnaPosition = i % 4
        let dnaSequenceIndex = (i * 2) % dnaSequence.length

        switch (dnaPosition){
            case 0:
                console.log(`**${dnaSequence[dnaSequenceIndex]}${dnaSequence[dnaSequenceIndex + 1]}**`)
                break
            case 1:
            case 3:
                console.log(`*${dnaSequence[dnaSequenceIndex]}--${dnaSequence[dnaSequenceIndex + 1]}*`)
                break
            case 2:
                console.log(`${dnaSequence[dnaSequenceIndex]}----${dnaSequence[dnaSequenceIndex + 1]}`)
                break
        }
    }
}

dnaHelix(10)
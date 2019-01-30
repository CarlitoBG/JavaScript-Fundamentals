function capitalizeTheWords(sentence) {
    let words = sentence.split(/\s+/)
    let capitalizedWords = []

    for (let word of words) {
        let result = word[0].toUpperCase() + word.substring(1).toLowerCase()
        capitalizedWords.push(result)
    }

    console.log(capitalizedWords.join(' '))
}

capitalizeTheWords('Capitalize these words')
function countWordsInText(input) {
    let text = input.join('\n')
    let words = text.split(/[^A-Za-z0-9_]+/).filter(w => w !== '')

    let wordsCount = {}
    for (let word of words) {
        if(!wordsCount.hasOwnProperty(word)){
            wordsCount[word] = 0
        }
        wordsCount[word]++
    }

    console.log(JSON.stringify(wordsCount))
}

countWordsInText(['JS devs use Node.js for server-side JS.-- JS for devs'])
function matchAllWords(text) {
    if (Array.isArray(text)){
        text = text[0]
    }
    let words = text.match(/\w+/g)
    console.log(words.join('|'))
}

matchAllWords('_(Underscores) are also word characters')
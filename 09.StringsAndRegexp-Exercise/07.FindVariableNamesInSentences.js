function findNamesInSentences(sentence) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/g
    let result = sentence.match(pattern).map(str => str.substring(1))
    console.log(result.join(','))
}

findNamesInSentences('The _id and _age variables are both integers.')
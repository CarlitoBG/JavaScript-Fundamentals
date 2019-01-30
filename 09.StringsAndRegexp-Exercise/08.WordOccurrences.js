function wordOccurrences(sentence, word) {
    let regex = new RegExp(`\\b${word}\\b`, 'gi')
    let result = sentence.match(regex)
    console.log(result === null ? 0 : result.length)
}

wordOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the')
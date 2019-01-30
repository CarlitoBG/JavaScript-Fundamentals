function splitStringWithDelimiter(string, delimiter) {
    let splittedElements = string.split(delimiter)
    console.log(splittedElements.join('\n'))
}

splitStringWithDelimiter('http://platform.softuni.bg', '.')
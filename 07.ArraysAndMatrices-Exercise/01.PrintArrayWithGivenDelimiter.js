function printArrayWithDelimiter(input) {
    let delimiter = input.pop()
    console.log(input.join(delimiter))
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-'])
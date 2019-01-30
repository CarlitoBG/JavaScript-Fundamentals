function solve(array) {
    let fileLocation = array[0]
    let alternateText = array[1]

    let output = `<img src="${fileLocation}" alt="${alternateText}">`
    console.log(output);
}

solve(['smiley.gif', 'Smiley Face'])
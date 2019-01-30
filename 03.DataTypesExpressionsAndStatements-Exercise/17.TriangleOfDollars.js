function triangleOfDollars(row) {
    let line = ''
    for (let col = 1; col <= row; col++) {
        line += '$'
        console.log(line)
        //console.log('$'.repeat(col))
        //console.log(new Array(col + 1).join('$'))
    }
}

triangleOfDollars(5)
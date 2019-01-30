function concatenateAndReverse(arr) {
    let allStrings = arr.join('')
    let chars = Array.from(allStrings)
    let reversed = chars.reverse()
    console.log(reversed.join(''))
}

concatenateAndReverse(['I', 'am', 'student'])
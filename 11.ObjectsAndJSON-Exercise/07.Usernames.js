function userNames(input) {
    let result = new Set()

    for (let line of input) {
        result.add(line)
    }

    let sortedNames = Array.from(result).sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sortedNames.join('\n'))
}

userNames([
    'Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
])
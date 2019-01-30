function solve(array) {
    let trackName = array[0]
    let artistName = array[1]
    let duration = array[2]

    let output = `Now Playing: ${artistName} - ${trackName} [${duration}]`
    console.log(output);
}

solve(['Number One', 'Nelly', '4:09'])
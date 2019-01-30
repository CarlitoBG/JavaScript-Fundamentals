function rotateArray(input) {
    let rotations = Number(input.pop())

    for (let i = 0; i < rotations % input.length; i++) {
        input.unshift(input.pop())
    }

    console.log(input.join(' '))
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
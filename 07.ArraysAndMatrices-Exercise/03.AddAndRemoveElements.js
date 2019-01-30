function addRemoveElements(input) {
    let result = []
    let number = 1
    let commands = {
        add: (num) => result.push(num),
        remove: (num) => result.pop()
    }

    for (let i = 0; i < input.length; i++) {
        const command = input[i]
        commands[command](number)
        number++
    }

    if (result.length < 1) {
        console.log("Empty")
    } else {
        result.forEach((e) => console.log(e))
    }
}

addRemoveElements(['add', 'add', 'remove', 'add', 'add'])
function cappyJuice(input) {
    let quantities = {}
    let bottles = {}

    for (let line of input) {
        let tokens = line.split(' => ')
        let juiceName = tokens[0]
        let juiceQuantity = Number(tokens[1])

        if (!quantities.hasOwnProperty(juiceName)){
            quantities[juiceName] = 0
        }
        quantities[juiceName] += juiceQuantity

        if (quantities[juiceName] >= 1000){
            bottles[juiceName] = parseInt(quantities[juiceName] / 1000)
        }
    }

    for (let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`)
    }
}

cappyJuice([
        'Kiwi => 234',
        'Pear => 2345',
        'Watermelon => 3456',
        'Kiwi => 4567',
        'Pear => 5678',
        'Watermelon => 6789']
)
function storeCatalogue(input) {
    let catalogue = new Map()

    for (let line of input) {
        let [product, price] = line.split(' : ')
        if (!catalogue.has(product[0])){
            catalogue.set(product[0], new Map())
        }
        catalogue.set(product[0], catalogue.get(product[0]).set(product, Number(price)))
    }

    for (let [letter, product] of Array.from(catalogue.entries()).sort()) {
        console.log(`${letter}`)
        for (let [item, price] of Array.from(product.entries()).sort()) {
            console.log(`  ${item}: ${price}`)
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
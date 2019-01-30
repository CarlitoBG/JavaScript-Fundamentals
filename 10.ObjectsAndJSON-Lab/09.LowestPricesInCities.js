function lowestPricesInCities(input) {
    let products = new Map()

    input.forEach((line) => {
        const [city, product, price] = line.split(/\s*\|\s*/)
        if (!products.has(product)) {
            products.set(product, new Map())
        }
        products.get(product).set(city, Number(price))
    })

    products.forEach((cities, product) => {
        let bestCity = ''
        let bestPrice = Number.MAX_VALUE
        cities.forEach((price, city) => {
            if (price < bestPrice) {
                bestPrice = price
                bestCity = city
            }
        })

        console.log(`${product} -> ${bestPrice} (${bestCity})`)
    })
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])
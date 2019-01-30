function autoEngineeringCompany(input) {
    let catalogue = new Map()

    for (let line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ')

        if (!catalogue.has(carBrand)){
            catalogue.set(carBrand, new Map())
        }

        if (!catalogue.get(carBrand).has(carModel)){
            catalogue.get(carBrand).set(carModel, 0)
        }
        catalogue.get(carBrand).set(carModel, catalogue.get(carBrand).get(carModel) + (Number(producedCars)))
    }

    for (let [carBrand, modelAndCountOfCars] of catalogue) {
        console.log(carBrand)
        for (let [model, producedCars] of modelAndCountOfCars) {
            console.log(`###${model} -> ${producedCars}`)
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)
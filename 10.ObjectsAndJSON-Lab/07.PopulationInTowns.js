function populationInTowns(input) {
    let total = new Map()

    for (let line of input) {
        let [town, population] = line.split(/\s*<->\s*/)
        population = Number(population)

        if (total.has(town)){
            total.set(town, total.get(town) + population)
        }else {
            total.set(town, population)
        }
    }
    total.forEach((k, v) => console.log(`${v} : ${k}`))
}

populationInTowns([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])
function buildAWall(sections) {
    sections = sections.map(Number)
    let days = 30 - Math.min(...sections)
    let concretePerDay = []

    for (let i = 0; i < days; i++) {
        let dailyAmountOfConcrete = 0
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== undefined && sections[i] < 30){
                sections[i] += 1
                dailyAmountOfConcrete += 195

                if (sections[i] === 30){
                    sections[i] = undefined
                }
            }
        }
        concretePerDay.push(dailyAmountOfConcrete)
    }

    let totalAmountOfConcrete = concretePerDay.reduce((a, b) => a + b)
    console.log(concretePerDay.join(', '))
    console.log(`${totalAmountOfConcrete * 1900} pesos`)
}

//buildAWall(['21', '25', '28'])
//buildAWall(['17'])
//buildAWall(['17', '22', '17', '19', '17'])
buildAWall(['10', '30', '10', '10', '10'])
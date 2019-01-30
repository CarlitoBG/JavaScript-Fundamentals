function heroicInventory(input) {
    let heroData = []

    for (let i = 0; i < input.length; i++) {
        let currentHeroesArguments = input[i].split(' / ')

        let currentHeroName = currentHeroesArguments[0]
        let currentHeroLevel = Number(currentHeroesArguments[1])
        let currentHeroItems = []

        if (currentHeroesArguments.length > 2){
            currentHeroItems = currentHeroesArguments[2].split(', ')
        }

        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        }

        heroData.push(hero)
    }

    console.log(JSON.stringify(heroData))
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
function gameOfEpicness(kingdomsData, fightsData) {
    let kingdoms = new Map()

    for (let line of kingdomsData) {
        let [kingdom, general, armySize] = [line.kingdom, line.general, line.army]

        if(!kingdoms.has(kingdom)){
            kingdoms.set(kingdom, new Map())
        }
        if (!kingdoms.get(kingdom).has(general)){
            kingdoms.get(kingdom).set(general, {army: 0, wins: 0, losses: 0})
        }
        kingdoms.get(kingdom).get(general).army += armySize
    }

    for (let line of fightsData) {
        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = [line[0], line[1], line[2], line[3]]

        if (attackingKingdom === defendingKingdom){
            continue
        }

        let attacker = kingdoms.get(attackingKingdom).get(attackingGeneral)
        let defender = kingdoms.get(defendingKingdom).get(defendingGeneral)

        if (attacker.army > defender.army){
            attacker.army = Math.floor(1.10 * attacker.army)
            attacker.wins++

            defender.army = Math.floor(0.9 * defender.army)
            defender.losses++
        }else if(attacker.army < defender.army){
            attacker.army = Math.floor(0.9 * attacker.army)
            attacker.losses++

            defender.army = Math.floor(1.10 * defender.army)
            defender.wins++
        }
    }

    let winningKingdom = [...kingdoms].sort((a, b) => {
        let firstKingdomsWins = Array.from(a[1], ([key, value]) => value.wins).reduce((a, b) => a + b)
        let secondKingdomWins = Array.from(b[1], ([key, value]) => value.wins).reduce((a, b) => a + b)
        let firstKingdomLoses = Array.from(a[1], ([key, value]) => value.losses).reduce((a, b) => a + b)
        let secondKingdomLoses = Array.from(b[1], ([key, value]) => value.losses).reduce((a, b) => a + b)

        return secondKingdomWins - firstKingdomsWins || firstKingdomLoses - secondKingdomLoses || a[0].localeCompare(b[0])
    })[0]

    console.log(`Winner: ${winningKingdom[0]}`);
    [...winningKingdom[1]].sort((general1, general2) => general2[1].army - general1[1].army).forEach(general => {
        console.log(`/\\general: ${general[0]}`)
        console.log(`---army: ${general[1].army}`)
        console.log(`---wins: ${general[1].wins}`)
        console.log(`---losses: ${general[1].losses}`)
    })
}

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)

/*
gameOfEpicness([ { kingdom: "Stonegate", general: "Ulric", army: 5000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 5000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 1000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"] ]
)

gameOfEpicness([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)
*/
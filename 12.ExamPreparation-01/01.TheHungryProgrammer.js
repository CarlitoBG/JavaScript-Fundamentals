function hungryProgrammer(meals, commands) {
    let mealsEaten = 0
    let actions = {
        Serve: () => {
            if (meals.length > 0){
                console.log(`${meals.pop()} served!`)
            }
        },
        Eat: () => {
            if (meals.length > 0){
                console.log(`${meals.shift()} eaten`)
                mealsEaten++
            }
        },
        Add: ([meal]) => {
            if(meal && meal !== undefined){
                meals.unshift(meal)
            }
        },
        Consume: ([startIndex, endIndex]) => {
            let areIndexesValid = startIndex >= 0 && endIndex > 0 && startIndex < endIndex && endIndex < meals.length

            if (areIndexesValid){
                let mealsToEat = endIndex - startIndex + 1
                meals.splice(startIndex, endIndex + 1)
                mealsEaten += mealsToEat
                console.log('Burp!')
            }
        },
        Shift: ([firstIndex, secondIndex]) => {
            let areIndexesValid = firstIndex >= 0 && secondIndex > 0 && firstIndex < secondIndex && secondIndex < meals.length

            if (areIndexesValid){
                let temp = meals[firstIndex]
                meals[firstIndex] = meals[secondIndex]
                meals[secondIndex] = temp
            }
        },
        End: () => {
            if (meals.length > 0){
                console.log(`Meals left: ${meals.join(', ')}`)
            }else {
                console.log('The food is gone')
            }
            console.log(`Meals eaten: ${mealsEaten}`)
        }
    }

    for (let command of commands) {
        let commandParams = command.split(' ')
        let action = commandParams.shift()

        let currentAction = actions[action]
        if (currentAction) {
            currentAction(commandParams)
            if (action === 'End') {
                break
            }
        }
    }
}

hungryProgrammer(['chicken', 'steak', 'eggs'],
    ['Serve', 'Eat', 'End', 'Consume 0 1']
)

//hungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'],
    //['Add spaghetti', 'Shift 0 1', 'Consume 1 4', 'End']
//)

//hungryProgrammer(['carrots', 'apple', 'beet'],
//['Consume 0 2', 'End'])
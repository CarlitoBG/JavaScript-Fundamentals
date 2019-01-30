function restHouse(rooms, guests) {
    let availableRooms = extractRooms(rooms)
    let guestsWithoutRooms = 0

    for (let couple of guests) {
        let roomFound = false

        if (couple.first.gender !== couple.second.gender) {
            roomFound = settleDifferentGender(couple, roomFound)
        } else {
            roomFound = settleSameGender(couple, roomFound)
        }

        if (!roomFound) {
            guestsWithoutRooms += couple.first ? 2 : 1
        }
    }

    printReport()

    function extractRooms(rooms) {
        let restHouse = new Map()
        for (let room of rooms) {
            let beds = room.type === 'double-bedded' ? 2 : 3
            restHouse.set(room.number, {type: room.type, emptyBeds: beds})
        }
        return restHouse
    }

    function settleDifferentGender(couple, roomFound) {
        let room = [...availableRooms.values()].find(room => room.type === 'double-bedded' && room.emptyBeds === 2)

        if (room) {
            room.guests = []
            room.guests = [couple.first, couple.second]
            room.emptyBeds = 0
            roomFound = true
        }
        return roomFound
    }

    function settleSameGender(couple, roomFound) {
        for (let room of [...availableRooms.values()].filter(room => room.type === 'triple')) {
            if (room.emptyBeds >= 2) {
                if (!room.guests) {
                    room.guests = []
                } else if (room.guests[0].gender !== couple.second.gender) {
                    continue
                }

                if (couple.first) {
                    settleSingleGuest(couple.first, room)
                }
                settleSingleGuest(couple.second, room)

                roomFound = true
                break
            } else if (room.emptyBeds === 1) {
                if (room.guests[0].gender === couple.second.gender) {
                    settleSingleGuest(couple.first ? couple.first : couple.second, room)
                    couple.first = undefined
                }
            }
        }
        return roomFound
    }

    function settleSingleGuest(guest, room) {
        room.guests.push(guest)
        room.emptyBeds -= 1
    }

    function printReport() {
        for (let [number, room] of [...availableRooms].sort()) {
            console.log(`Room number: ${number}`)

            if (room.guests) {
                for (let guest of room.guests.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))) {
                    console.log(`--Guest Name: ${guest.name}`)
                    console.log(`--Guest Age: ${guest.age}`)
                }
            }
            console.log(`Empty beds in the room: ${room.emptyBeds}`)
        }
        console.log(`Guests moved to the tea house: ${guestsWithoutRooms}`)
    }
}

restHouse([{number: '206', type: 'double-bedded'},
        {number: '311', type: 'triple'}],
    [{
        first: {name: 'Tanya Popova', gender: 'female', age: 24},
        second: {name: 'Miglena Yovcheva', gender: 'female', age: 23}
    },
        {
            first: {name: 'Katerina Stefanova', gender: 'female', age: 23},
            second: {name: 'Angel Nachev', gender: 'male', age: 22}
        },
        {
            first: {name: 'Tatyana Germanova', gender: 'male', age: 23},
            second: {name: 'Boryana Baeva', gender: 'female', age: 22}
        }
    ]
)
/*
restHouse([{number: '101A', type: 'double-bedded'},
        {number: '104', type: 'triple'},
        {number: '101B', type: 'double-bedded'},
        {number: '102', type: 'triple'}],
    [{
        first: {name: 'Sushi & Chicken', gender: 'female', age: 15},
        second: {name: 'Salisa Debelisa', gender: 'female', age: 25}
    },
        {
            first: {name: 'Daenerys Targaryen', gender: 'female', age: 20},
            second: {name: 'Jeko Snejev', gender: 'male', age: 18}
        },
        {
            first: {name: 'Pesho Goshov', gender: 'male', age: 20},
            second: {name: 'Gosho Peshov', gender: 'male', age: 18}
        },
        {
            first: {name: 'Conor McGregor', gender: 'male', age: 29},
            second: {name: 'Floyd Mayweather', gender: 'male', age: 40}
        }]
)
*/
function airport(data) {
    let planes = new Set()
    let port = new Map()

    for (let flightInfo of data) {
        let [planeId, town, passengersCount, action] = flightInfo.split(' ')
        let passengers = Number(passengersCount)

        if (action === 'land') {
            if (planes.has(planeId)) {
                continue
            } else {
                planes.add(planeId)
            }
        } else {
            if (!planes.has(planeId)) {
                continue
            } else {
                planes.delete(planeId)
            }
        }

        if (!port.has(town)) {
            port.set(town, {arrivals: 0, departures: 0, planesLanded: new Set()})
        }
        port.get(town).planesLanded.add(planeId)

        if (action === 'land') {
            port.get(town).arrivals += passengers
        } else {
            port.get(town).departures += passengers
        }
    }

    console.log('Planes left:');
    [...planes].sort((p1, p2) => p1.localeCompare(p2)).forEach(plane => console.log(`- ${plane}`));
    [...port].sort((t1, t2) => t1[1].arrivals !== t2[1].arrivals ? t2[1].arrivals - t1[1].arrivals : t1[0].localeCompare(t2[0])).forEach(logData)

    function logData(town) {
        console.log(town[0])
        console.log(`Arrivals: ${town[1].arrivals}`)
        console.log(`Departures: ${town[1].departures}`)
        console.log('Planes:');
        [...town[1].planesLanded].sort((p1, p2) => p1.localeCompare(p2)).forEach(plane => console.log(`-- ${plane}`))
    }
}
/*
airport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
])

airport([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
])
*/
airport(['RTA72 London -10 land',
    'RTA#72 Brussels -110 depart',
    'RTA7!2 Warshaw 350 land',
    'RTA72 Riga -201 depart',
    'rta72 riga -13 land',
    'rta Riga -200 depart'
])
function lostInTheMountains(keyword, text) {
    let pattern = /(north|east)\D*(\d{2})[^,]*,\D*(\d{6})/gi
    let messagePattern = new RegExp(`${keyword}(.*?)${keyword}`, 'g')
    let message = messagePattern.exec(text)[1]

    let latitude = ''
    let longitude = ''
    let match = pattern.exec(text)

    while (match){
        if (match[1].toLowerCase() === 'north'){
            latitude = `${match[2]}.${match[3]} N`
        }else {
            longitude = `${match[2]}.${match[3]} E`
        }
        match = pattern.exec(text)
    }

    console.log(latitude)
    console.log(longitude)
    console.log(`Message: ${message}`)
}

lostInTheMountains(`<>`,
    `o u%&lu43t&^ftgv><nortH4276hrv756dcc, jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`)
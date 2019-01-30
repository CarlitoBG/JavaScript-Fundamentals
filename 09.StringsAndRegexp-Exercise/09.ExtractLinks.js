function extractLinks(text) {
    let result = []
    let regex = /www\.([A-Za-z0-9-]+)(\.[a-z]+)+/g

    for (let line of text) {
        let match = regex.exec(line)

        while (match){
            result.push(match[0])
            match = regex.exec(line)
        }
    }

    console.log(result.join('\n'))
}

extractLinks(
    ['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']
)
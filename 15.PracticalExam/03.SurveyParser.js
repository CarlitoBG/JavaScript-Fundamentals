function surveyParser(text) {
    let surveyDataRegex = /<svg>.*<\/svg>/g
    let catTagsRegex = /<cat><text>.*\[(.*)].*<\/text><\/cat>\s*<cat>.*<\/cat>/g
    let valuesRegex = /<g><val>(\d+)<\/val>(\d+)<\/g>/g

    let surveyMatch = surveyDataRegex.exec(text)
    let catTagsMatch = catTagsRegex.exec(text)
    let valuesMatch = valuesRegex.exec(text)

    let [sumOfAllRatings, ratingsCount] = [0, 0]

    if (surveyMatch !== null){
        if (catTagsMatch !== null) {
            while (valuesMatch){
                let votes = Number(valuesMatch[2])
                let value = Number(valuesMatch[1])

                sumOfAllRatings += votes * value
                ratingsCount += votes

                valuesMatch = valuesRegex.exec(text)
            }
            console.log(`${catTagsMatch[1]}: ${Number((sumOfAllRatings / ratingsCount).toFixed(2))}`)
        }else {
            console.log('Invalid format')
        }
    }else {
        console.log('No survey found')
    }
}

surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat>' +
    '<cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg>' +
    '<p>Some more random text</p>'
)

surveyParser('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g>' +
    '<g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>'
)

surveyParser('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p>' +
    '<p>I\'d like to have the option for delivery</p>'
)

surveyParser('<svg><cat><text>Which is your favourite meal from our selection?</text></cat>' +
    '<cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>'
)
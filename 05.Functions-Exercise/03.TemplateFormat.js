function templateFormat(input) {
    let output = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'

    for (let i = 0; i < input.length; i += 2) {
        let question = input[i]
        let answer = input[i + 1]

        output += '  <question>\n'
        output += `    ${question}\n`
        output += '  </question>\n'
        output += '  <answer>\n'
        output += `    ${answer}\n`
        output += '  </answer>\n'
    }

    output += '</quiz>'

    console.log(output)
}

templateFormat(['Dry ice is a frozen form of which gas?', 'Carbon Dioxide',
    'What is the brightest star in the night sky?', 'Sirius'])
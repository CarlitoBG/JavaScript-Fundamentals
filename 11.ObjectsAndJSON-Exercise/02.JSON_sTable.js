function jsonTable(input) {
    let output = '<table>\n'

    for (let obj of input) {
        output += '	<tr>\n'

        let person = JSON.parse(obj)
        for (let key of Object.keys(person)) {
            output += `		<td>${person[key]}</td>\n`
        }
        output += '	</tr>\n'
    }
    output += '</table>'

    console.log(output)
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])
function multiplicationTable(size) {

    let html = '<table border="1">\n'

    html += '  <tr><th>x</th>'
    for (let j = 1; j <= size; j++) {
        html += `<th>${j}</th>`
    }
    html += "</tr>\n"

    for (let i = 1; i <= size; i++) {
        html += `  <tr><th>${i}</th>`
        for (let j = 1; j <= size; j++) {
            html += `<td>${i * j}</td>`
        }
        html += "</tr>\n"
    }

    html += "</table>"

    console.log(html)
}

multiplicationTable(5)
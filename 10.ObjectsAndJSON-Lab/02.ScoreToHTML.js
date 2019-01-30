function scoreToHTML(scoreJSON) {
    let html = "<table>\n"
    html += "  <tr><th>name</th><th>score</th></tr>\n"

    let arr = JSON.parse(scoreJSON)
    for (let obj of arr){
        html += `  <tr><td>${escaping(obj['name'])}` + `</td><td>${obj['score']}</td></tr>\n`
    }
    console.log(html + "</table>")

    function escaping(line) {
        return line.replace(/&/g, '&amp;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/'/g, '&#39;');
    }
}

scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]')
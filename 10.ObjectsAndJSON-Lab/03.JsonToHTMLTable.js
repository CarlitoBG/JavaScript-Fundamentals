function jsonToHTMLTable(json) {
    let html = "<table>\n"
    let arr = JSON.parse(json)

    html += "  <tr>"
    for (let key of Object.keys(arr[0])){
        html += `<th>${escaping(key)}</th>`
    }
    html += "</tr>\n"

    for (let obj of arr) {
        html += '   <tr>'
        for (let key of Object.keys(obj)) {
            html += `<td>${escaping(obj[key].toString())}</td>`
        }
        html += '</tr>\n'
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

jsonToHTMLTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
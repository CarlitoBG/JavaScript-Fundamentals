function escaping(items) {
    console.log("<ul>\n" + items.map(htmlEscape).map(item => `  <li>${item}</li>`).join("\n") + "\n" + "</ul>\n")

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;', "'": '&#39;', '<': '&lt;', '>': '&gt;' }
        return text.replace(/[\"&'<>]/g, ch => map[ch])
    }
}

escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>'])
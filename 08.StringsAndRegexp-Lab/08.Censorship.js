function censorship(text, words) {
    for (let current of words) {
        let replaced = '-'.repeat(current.length)
        while (text.indexOf(current) > -1){
            text = text.replace(current, replaced)
        }
    }
    console.log(text)
}

censorship('roses are red, violets are blue', [', violets are', 'red'])
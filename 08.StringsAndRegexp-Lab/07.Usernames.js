function userNames(input) {
    let results = []
    for (let email of input) {
        let [alias, domain] = email.split('@')
        let username = alias + '.'
        let domainParts = domain.split('.')
        domainParts.forEach(p => username += p[0])
        results.push(username)
    }

    console.log(results.join(', '))
}

userNames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
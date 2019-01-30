function calendar([day, month, year]) {
    let calendarColumns = 7

    let currentDate = new Date(year, month - 1, day)
    let firstDayOfTheCurrentMonth = new Date(year, month - 1, 1)
    let lastDayOfTheCurrentMonth = new Date(year, month, 0)
    let firstDateOfCalendar = new Date(year, month - 1, 1 - firstDayOfTheCurrentMonth.getDay())
    let lastDateOfCalendar = new Date(year, month - 1, lastDayOfTheCurrentMonth.getDate() + 7 - lastDayOfTheCurrentMonth.getDay())

    let output = '<table>\n'
    output += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n'

    while (true){
        if (firstDateOfCalendar.getTime() === lastDateOfCalendar.getTime()){
            break
        }

        output += '  <tr>'
        for (let i = 0; i < calendarColumns; i++) {
            let tag

            if (firstDateOfCalendar.getTime() < firstDayOfTheCurrentMonth.getTime()){
                tag = ' class="prev-month"'
            } else if (firstDateOfCalendar.getTime() > lastDayOfTheCurrentMonth.getTime()){
                tag = ' class="next-month"'
            } else {
                tag = firstDateOfCalendar.getDate() !== currentDate.getDate() ? '' : ' class="today"'
            }

            output += `<td${tag}>${firstDateOfCalendar.getDate()}</td>`

            firstDateOfCalendar.setDate(firstDateOfCalendar.getDate() + 1)
        }
        output += '</tr>\n'
    }
    output += '</table>\n'

    console.log(output)
}

calendar([7, 11, 2018])
function moviePrices([title, day]) {
    title = title.toLowerCase()
    day = day.toLowerCase()

    if (title === 'the godfather') {
        switch (day) {
            case "monday":
                return 12
            case "tuesday":
                return 10
            case "wednesday":
                return 15
            case "thursday":
                return 12.5
            case "friday":
                return 15
            case "saturday":
                return 25
            case "sunday":
                return 30
            default :
                return 'error'
        }

    } else if (title === 'schindler\'s list') {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8.5
            case "saturday":
            case "sunday":
                return 15
            default :
                return 'error'
        }

    } else if (title === "casablanca") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 8
            case "saturday":
            case "sunday":
                return 10
            default :
                return 'error'
        }

    } else if (title === "the wizard of oz") {
        switch (day) {
            case "monday":
            case "tuesday":
            case "wednesday":
            case "thursday":
            case "friday":
                return 10
            case "saturday":
            case "sunday":
                return 15
            default :
                return 'error'
        }
    } else {
        return 'error'
    }
}

console.log(moviePrices(['The Godfather', 'Friday']));
console.log(moviePrices(['casablanca', 'sunday']));
console.log(moviePrices(['Schindler\'s LIST', 'monday']));
console.log(moviePrices(['SoftUni', 'Nineday']));
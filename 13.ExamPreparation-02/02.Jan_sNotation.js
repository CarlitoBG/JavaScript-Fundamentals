function jansNotation(arr) {
    let numbers = []
    for (let i = 0; i < arr.length; i++) {
        let currentSymbol = arr[i]

        if (typeof currentSymbol === 'number'){
            numbers.push(currentSymbol)
        }else {
            if (numbers.length > 1){
                let num1 = numbers.pop()
                let num2 = numbers.pop()
                switch (currentSymbol){
                    case '+':
                        numbers.push(num2 + num1)
                        break
                    case '-':
                        numbers.push(num2 - num1)
                        break
                    case '*':
                        numbers.push(num2 * num1)
                        break
                    case '/':
                        numbers.push(num2 / num1)
                        break
                    default:
                        break
                }
            }else {
                console.log('Error: not enough operands!')
                return
            }
        }
    }
    numbers.length > 1 ? console.log('Error: too many operands!') : console.log(numbers[0])
}

jansNotation([3, 4, '+'])
jansNotation([5, 3, 4, '*', '-'])
jansNotation([7, 33, 8, '-'])
jansNotation([15, '/'])
jansNotation([31, 2, '+', 11, '/'])
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/'])
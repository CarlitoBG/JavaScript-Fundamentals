function evenPositionElements(arr) {
    let result = []
    for (let i in arr) {
        if (i % 2 === 0){
            result.push(arr[i])
        }
    }
    console.log(result.join(' '))
}

evenPositionElements(['20', '30', '40'])
function sumByTown(arr) {
    let sum = {}

    for (let i = 0; i < arr.length; i+=2) {
        let [town, income] = [arr[i], Number(arr[i + 1])]

        if (!sum.hasOwnProperty(town)){
            sum[town] = 0
        }
        sum[town] += Number(income)
    }

    console.log(JSON.stringify(sum))
}

sumByTown(['Sofia', '20', 'Varna', '10', 'Sofia', '5'])
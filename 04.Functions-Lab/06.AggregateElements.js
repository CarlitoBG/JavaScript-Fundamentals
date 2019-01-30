function aggregateElements(elements) {
    aggregate(elements, 0, (a, b) => a + b)
    aggregate(elements, 0, (a, b) => a + 1 / b)
    aggregate(elements, '', (a, b) => a + b)

    function aggregate(array, initialValue, arrowFunction) {
        for (let i = 0; i < array.length; i++) {
            initialValue = arrowFunction(initialValue, array[i])
        }
        console.log(initialValue);
    }
}

aggregateElements([1, 2, 3])
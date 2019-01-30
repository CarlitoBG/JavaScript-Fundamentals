function extractIncreasingSubsequence(array) {
    let currentMax

    array.filter((num, i) => {
        currentMax = i === 0 ? num : Math.max(currentMax, num)
        return num >= currentMax
    }).forEach(e => console.log(e))
}

extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24])
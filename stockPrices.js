function best(prices) {
    let maxPrice = 0
    for(let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++) {
            maxPrice = Math.max(maxPrice, prices[j] - prices[i])
        }
    }
    return maxPrice
}

best([1, 2, 3, 4, 5, 6, 7, 8, 9])

best([12, 3, 8, 15, 4])
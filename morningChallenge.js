const best = (arr) => {
    let bestPrice
    let lowest = arr[0]

    for(let i = 0; i < 0; i++){
        if(arr[i] < lowest){
            lowest = arr[i]
        }
        let difference = arr[i] - lowest
        if(difference > bestPrice){
            bestPrice = difference
        }
    }
    return bestPrice
}

best([1, 2, 3, 4, 5, 6, 7, 8, 9])

best([12, 3, 8, 15, 4])
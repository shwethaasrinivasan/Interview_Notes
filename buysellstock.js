function maxProfit(prices) {
    let minPrice = Infinity; // Initialize minPrice to Infinity
    let maxProfit = 0; // Initialize maxProfit to 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // Update minPrice if the current price is lower than minPrice
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // Update maxProfit if the current profit is greater than maxProfit
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}


console.log(maxProfit([7,1,5,3,6,4])); 


console.log(maxProfit([7,6,4,3,1]));

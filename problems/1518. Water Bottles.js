
// leetCode 1518. Water Bottles

// Time: O(log n) where n is the number of initialBottles

var numWaterBottles = function(numBottles, numExchange) {
    let empty = numBottles;
    let ans = numBottles;
    while(empty >= numExchange){
        ans += Math.floor(empty/numExchange);
        let rem = empty % numExchange;
        empty = Math.floor(empty/numExchange);
        empty += rem;
    }
    return ans;
};
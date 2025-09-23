
//leetCode 3005. Count Elements With Maximum Frequency

var maxFrequencyElements = function(nums) {
    let freq = [];
    let ans = 0;
    freq[0] = 0;

    for(let i = 0; i < nums.length; i++){
        if(freq[nums[i]] > 0){
            freq[nums[i]]++;
        }else{
            freq[nums[i]] = 1;
        }
    }

    const maxFreq = getMax(freq);
    for(const i of freq){
        if(i === maxFreq)
            ans += maxFreq;
    }
    return ans;
};

var getMax = (nums)=>{
    let maxFreq = 0;
    for(const i of nums){
        if(i > maxFreq)
            maxFreq = i;
    }
    return maxFreq;
};


// MORE OPTIMIZED
// Time: O(n)

var maxFrequencyElements = function(nums) {
    let freqMap = new Map();
    let maxFreq = 0;
    let ans = 0;

    for(const i of nums){
        let currFreq = (freqMap.get(i) || 0) + 1;
        freqMap.set(i, currFreq);

        if(maxFreq < currFreq){
            maxFreq = currFreq;
        }
    }

    for(const f of freqMap.values()){
        if(f === maxFreq)
            ans += maxFreq;
    }

    return ans;
};

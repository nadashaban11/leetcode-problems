// leetCode 3541. Find Most Frequent Vowel and Consonant

// Time : O(n)
var maxFreqSum = function(s) {
    const freq = calcFreq(s);
    let maxCon = freq[0], maxVow = freq[0];
    for(let i = 0; i < freq.length; i++){
        if(freq[i] > maxCon)
            maxCon = freq[i];
        else if(freq[i] < maxVow)
            maxVow = freq[i]
    }
    return (maxCon + maxVow);
};

var calcFreq = function(s){
    let freq = new Array(26).fill(0);
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        const curCharIdx = (s[i]).charCodeAt(0) - ('a').charCodeAt(0);
        if(isVowel(s[i]))
            freq[curCharIdx]--;
        else
            freq[curCharIdx]++;
    }
    return freq;
}

var isVowel = function(c){
    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
};


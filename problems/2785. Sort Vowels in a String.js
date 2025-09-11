// leetCode 2785. Sort Vowels in a String

// Time: O(Nlogn)

var sortVowels = function(s) {
    s = s.split('');
    let vowels = extractVowels(s);
    vowels.sort();
    let idx = 0;
    for(let i = 0; i < s.length; i++){
        if(isV(s[i].toLowerCase())){
            s[i] = vowels[idx++];
        }
    }
    return s.join('');
};

var extractVowels = function(s){
    let v = [];
    for(let i = 0; i < s.length; i++){
        let cur = s[i].toLowerCase();
        if(isV(cur))
            v.push(s[i]);
    }
    return v;
};

var isV = function(c){
    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
}

// test

console.log(sortVowels("lEOtcede"));  //"lEOtcede"

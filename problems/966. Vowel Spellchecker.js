// leetCode 966. Vowel Spellchecker

// Time: O(N+Ql) 

var spellchecker = function(wordlist, queries) {
    let ans = [];
    let same = new Set(wordlist);
    let caseIn = new Map()
    let vowelErr = new Map()
    for(const i of wordlist){
        const lowerCase = i.toLowerCase();
        const ignoredVow = ignoreVowel(i);
        if(! caseIn.has(lowerCase))
            caseIn.set(lowerCase, i);
        if(! vowelErr.has(ignoredVow))
            vowelErr.set(ignoredVow, i);
    }
    for (const q of queries) {
        if (same.has(q)) {
            ans.push(q);
            continue;
        }
        const qLower = q.toLowerCase();
        if (caseIn.has(qLower)) {
            ans.push(caseIn.get(qLower));
            continue;
        }
        const qIgn = ignoreVowel(q);
        if (vowelErr.has(qIgn)) {
            ans.push(vowelErr.get(qIgn));
            continue;
        }
        ans.push(""); 
    }
    return ans;
};

var ignoreVowel = function(str){
    const arr = str.toLowerCase().split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'o' || arr[i] == 'i' || arr[i] == 'u')
            arr[i] = '-';
    }
    return arr.join('');
};
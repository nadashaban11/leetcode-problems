// leetCode 3227. Vowels Game in a String

var doesAliceWin = function(s) {
    s = s.split('');
    if(cntVowels(s) === 0)
        return false;
    // if(cntVowels(s) % 2) 
    else
        return true;

};

var isVowel = function(c){
    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
};

var cntVowels = function(s){
    let counter = 0;
    s.forEach((ch) => {
        if(isVowel(ch)) counter++;
    });
    return counter;
}

// more efficient soln

var doesAliceWin = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u')
            return true;
    }
    return false;
};

// leetCode 1935. Maximum Number of Words You Can Type

//Time: O(N∗M)

var canBeTypedWords = function(text, brokenLetters) {
    let cnt = 0;
    text = text.split(' ');
    for(const i of text){
        if(canBeTypedWord(i,brokenLetters))
            cnt++;
    }
    return cnt;
};

var canBeTypedWord = function(word, brokenLetters){
    brokenLetters = brokenLetters.split('');
    for(const ch of brokenLetters){
        if(word.includes(ch))
            return false;
    }
    return true;
}
// leetCode 2000. Reverse Prefix of Word

// Time: O(n)

var foundAt = (word,ch) =>{
    for(let i = 0; i < word.length; i++){
        if(ch === word[i])
            return i;
    }
    return -1;
}
var reversePrefix = function(word, ch) {
    const idx = foundAt(word , ch);

    let pre = [];

    if(idx === -1)
        return word;

    word = word.split('');

    for(let i = idx; i >= 0; i--)
        pre.push(word[i]);

    for(let i = 0; i < pre.length; i++)
        word[i] = pre[i];

    return word.join('');
};


// test

console.log(reversePrefix('abcdefd' , 'd')); // dcbaefd
console.log(reversePrefix('abcdefd' , 'x')); // abcdefd

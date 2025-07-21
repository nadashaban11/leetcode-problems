// leetCode 500 - Keyboard Row
// Time: O(n * m)  where n is the number of words and m is the maximum length of a word


// For each word, determine which row its first letter belongs to(by checking the first char)
// i want to ensure that all chars of the word exist in the same row.
// If yes, add the word to the result array(sameRow)


var findWords = function(words) {
    let sameRow = [];
    for(const word of words){
        const row = correctRow(word);
        let currChar = 1;
        while(currChar < word.length){
            if(row.includes(word[currChar].toLowerCase())){
                currChar++;
            }
            else
                break;
        }
        if(currChar === word.length)
            sameRow.push(word);
    }
    return sameRow;
};

var correctRow = function(word){
    let row;
    const rows = ["qwertyuiop","asdfghjkl","zxcvbnm"];
    if(rows[0].includes(word[0].toLowerCase()))
        row = rows[0];
    else if(rows[1].includes(word[0].toLowerCase()))
        row = rows[1];
    else
        row = rows[2];
    return row;
}

// test
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // [ 'Alaska', 'Dad' ]
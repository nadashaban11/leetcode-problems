// leetCode 58 - Length of Last Word
// Time: O(n)

var lengthOfLastWord = function(s) {
    const str = s.split(" ");
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i].length !== 0)
            return str[i].length;
    }
};


var lengthOfLastWord = function(s) {
    const strArr = s.trim().split(" ");
    return strArr[strArr.length-1].length
};

//test
console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
// output : 4 (length of "moon")
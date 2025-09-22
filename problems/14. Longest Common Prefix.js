// leetCode 14. Longest Common Prefix

var longestCommonPrefix = function(strs) {
    let pre = strs[0];
    for(let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(pre) !== 0) {
            pre = pre.slice(0, pre.length - 1);
            if (pre === "") return "";
        }
    }
    return pre;
};
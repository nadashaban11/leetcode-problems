
// time complexity: O(n)
// space complexity: O(1)

#include <iostream>
using namespace std;

class Solution {
public:
    bool canMakeSubsequence(string str1, string str2) {
        int i = 0, j = 0;
        int len = str2.length();
        for(; i < str1.length(); i++){
            if(j == len){
                return true;
            }
            if(str1[i] == str2[j]){
                j++;
            }
            else{
                if((str1[i] - 'a' + 1) % 26  + 'a' == str2[j]){
                    j++;
                }
            }
        }
        if(j == len) return true;
        return false;
    }
};
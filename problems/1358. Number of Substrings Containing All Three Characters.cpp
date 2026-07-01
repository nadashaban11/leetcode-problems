
// time complexity: O(N)
// space complexity: O(1)


#include<iostream>
using namespace std;

class Solution {
public:
    int numberOfSubstrings(string s) {
        int l = 0, r = 0, res = 0;
        int app[3] = {0};
        for(; r < s.length(); r++){
            app[s[r] - 'a']++;
            while(app[0] && app[1] && app[2]){
                res += s.length() - r;
                app[s[l] - 'a']--;
                l++;
            }
        }
        return res;
    }
};
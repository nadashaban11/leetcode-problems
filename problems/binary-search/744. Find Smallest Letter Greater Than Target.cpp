
#include <iostream>
using namespace std;
#include <vector>
class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int l = 0, r = letters.size() - 1, mid = 0, ans = 0;
        if(letters[r] < target)
            ans = -1;
        while(l <= r){
            mid = (l + r) / 2;
            if(letters[mid] > target){
                ans = mid;
                r = mid - 1;
            }
            else{
                l = mid + 1;
            }
        }
        return (ans == -1)? letters[0] : letters[ans];
    }
};

// time complexity: O(n)
// space complexity: O(1)

#include <iostream>
using namespace std;

class Solution {
public:
    bool canChange(string start, string target) {
        int t = 0, s = 0;
        int n = target.length();
        int m = start.length();

        while(s < m || t < n){
            while(t < n && target[t] == '_') t++;
            while(s < m && start[s] == '_') s++;

            if(target[t] != start[s]){
                return false;
            }
            if(target[t] == 'L' && start[s] == 'L' && s < t){
                return false;
            }
            if(target[t] == 'R' && start[s] == 'R' && s > t){
                return false;
            }
            else{
                s++;
                t++;
            }
        }
        return true;
    }
};
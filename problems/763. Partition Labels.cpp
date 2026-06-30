
// time complexity: O(n)
// space complexity: O(1)

#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    vector<int> partitionLabels(string s) {
        vector<int> ans;
        vector<int> lastApp = lastAppearance(s);
        int st = 0, end = 0;

        for(int i = 0; i < s.length(); i++){
            end = max(end, lastApp[s[i] - 'a']);

            if(i == end){
                ans.push_back(end - st + 1);
                st = end + 1;
            }
        }
        return ans;
    }

    vector<int> lastAppearance(string s){
        vector<int> lastApp(26);
        for(int i = 0; i < s.length(); i++){
            lastApp[s[i] - 'a'] = i;
        }
        return lastApp;
    }
};
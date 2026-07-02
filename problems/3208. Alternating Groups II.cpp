
// time complexity: O(n + k)
// space complexity: O(K)

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors, int k) {
        int ans = 0, len = 1;
        for(int i = 0; i < k - 1; i++){
            colors.push_back(colors[i]);
        }
        for(int i = 0; i < colors.size() - 1; i++){
            if(colors[i] == colors[i+1]){
                len = 1;
                continue;
            }
            len++;
            if(len == k){
                ans++;
                len--;
            }
        }
        return ans;
    }
};
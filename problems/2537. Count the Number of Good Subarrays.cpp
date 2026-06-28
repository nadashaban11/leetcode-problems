
// time complexity: O(n)
// space complexity: O(n)

// sliding window with a hash map

#include<iostream>
#include<unordered_map>
#include<vector>
using namespace std;

class Solution {
public:
    long long countGood(vector<int>& nums, int k) {
        long long ans = 0;
        unordered_map<int,int> app;
        int l = 0, r = 0;
        int pairs = 0;
        for( ;r < nums.size(); r++){
            pairs += app[nums[r]]; 
            app[nums[r]]++;
            while(pairs >= k){
                ans += (nums.size() - r);
                app[nums[l]]--;
                pairs -= app[nums[l]];
                l++;
            }
        }
        return ans;
    }
};
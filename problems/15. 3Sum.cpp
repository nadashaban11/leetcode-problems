
// time complexity: O(N^2)

#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        int l,r; 
        sort(nums.begin(), nums.end());
        for(int i =0; i < nums.size(); i++){
            if(i > 0 && nums[i] == nums[i - 1])
                continue;

            l = i + 1;
            r = nums.size() - 1;
            while(l < r){
                if((nums[r] + nums[l] + nums[i]) == 0){
                    ans.push_back({nums[i], nums[l], nums[r]});
                    while(l < r && nums[l] == nums[l + 1]) l++;
                    while(l < r && nums[r] == nums[r - 1]) r--;
                    l++; r--;
                }
                else if((nums[r] + nums[l] + nums[i]) > 0){
                    r--;
                }
                else{
                    l++;
                }
            }
        }
        return ans;
    }
};
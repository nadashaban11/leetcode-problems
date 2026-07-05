// time complexity: O(NlogN)
// space complexity: O(1)

#include <iostream>
#include <vector>
#include<algorithm>
using namespace std;

class Solution {
public:
    int maximumBeauty(vector<int>& nums, int k) {
        int ans = 0;
        int l = 0, r = 0;
        sort(nums.begin(), nums.end());
        while(true){
            if(r == nums.size()){
                break;
            }
            if(nums[r] - nums[l] <= 2 * k){
                ans = max(ans, r - l + 1);
                r++;
            }
            else{
                l++;
            }
        }
        return ans;
    }
};
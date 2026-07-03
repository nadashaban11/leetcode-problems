

// time complexity: O(n)
// space complexity: O(1)

#include <iostream>
using namespace std;

class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        int l = 0, r = 0;
        int w_count = 0;
        int ans = k;
        for (; r < blocks.length(); r++) {
            if (blocks[r] == 'W') {
                w_count++;
            }
            if (r - l + 1 == k) {
                ans = min(ans, w_count);
                if (blocks[l] == 'W') {
                    w_count--;
                }
                l++;
            }
        }
        return ans;
    }
};
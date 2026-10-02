
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
    public:
        vector<string> reorderLogFiles(vector<string>& logs) {
            vector<string> digits, letters;
            for(int i = 0; i < logs.size(); i++){
                int j = 0;
                while(logs[i][j] != ' '){
                    j++;
                }
                if(isdigit(logs[i][j+1])){
                    digits.push_back(logs[i]);
                }
                else{
                    letters.push_back(logs[i]);
                }
            }
            sort(letters.begin(), letters.end(), [] (const string& a, const string& b) {
                int pos_a = a.find(' ');
                int pos_b = b.find(' ');
                string contA = a.substr(pos_a);
                string contB = b.substr(pos_b);
                if(contA != contB) return contA < contB;
                string idA = a.substr(0, pos_a);
                string idB = b.substr(0, pos_b);
                return idA < idB;
            } );
            for(int i = 0; i < digits.size(); i++){
                letters.push_back(digits[i]);
            }
            return letters;
        }
    };
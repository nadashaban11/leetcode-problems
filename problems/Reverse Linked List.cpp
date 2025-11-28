// leetCode Reverse Linked List

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        if(head == nullptr){
            return nullptr;
        } 
        vector<int> list;
        for(ListNode *p = head; p!= nullptr; p = p->next){
            list.push_back(p->val);
        } 
        ListNode* h = new ListNode(list.back());
        list.pop_back();
        ListNode* cur = h;
        while(list.size() != 0){
            cur->next = new ListNode(list.back());
            list.pop_back();
            cur = cur->next;
        }
        return h;
    }
};

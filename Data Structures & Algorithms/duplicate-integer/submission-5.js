class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        const countN = new Map;

        for (let i=0;i<nums.length;i++){
            
            countN.set(nums[i],(countN.get(nums[i])|| 0)+1)
            
        }
        for (let [key, count] of countN){
            if (count>1){
                return true
            }
        }
        return false
    }
}

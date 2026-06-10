class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //[1,2,3,3]
        const seen=new Set();
        for(let i=0;i<nums.length;i++){
            if (seen.has(nums[i])){
                return true
            }

            seen.add(nums[i])

        }
        return false;

            }

        }




    


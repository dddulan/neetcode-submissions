class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const compare = new Set();
        
        for  (let num of nums)
        {
            if (compare.has(num)){
                return true

            }
            compare.add(num)

        }
                            return false;


    }

}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const prev = new Map

        for (let i=0;i<nums.length;i++) {

            let difference = target - nums[i]

            if (prev.has(difference)){
                return[prev.get(difference),i]
            }
            prev.set(nums[i],i)

        }


    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) 
    {

        const list = new Map;

        for (let i=0;i<strs.length;i++){

            const word = strs[i]
            let count = new Array(26).fill(0)

            for (let j=0;j<word.length;j++){

                let index = word.charCodeAt(j)-97
            
                count[index]++

            }

            const key= count.join(',');
            
            //add the key into the list map
            if (!list.has(key)){

                list.set(key,[])            

            }
            list.get(key).push(word)
        }
        return Array.from(list.values())

        


    }
}

/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) solution using Set but not correct as it allocates extra space by creating a new array
//therefore slow runtime of 112ms
const removeDuplicates = function(nums) {
  let numSet = [...new Set(nums)]
    for (let i = 0; i < numSet.length; i++){
      nums[i] = numSet[i]
    }
    return numSet.length
};



//O(n) with 84ms runtime
const removeDuplicates = function (nums) {
  if(nums.length === 0) return 0 //edge case
	let l = 1; //start left pointer at first index
	for (let r = 1; r < nums.length; r++) {
		//start right pointer at index one
		if (nums[r] != nums[r - 1]) {
			//as you loop array and find two values next to each other that are not the same
			nums[l] = nums[r]; //set value of unique value found by right pointer to left pointer
			l++; //iterate left pointer
		}
	}
	return l;
};

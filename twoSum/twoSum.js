/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//BRUTE FORCE O(n2) time complexity
// const twoSum = function(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if (nums[i] + nums[j] === target){
//         return [i, j]
//       }
//     }
//   }
// }

//Hashmap O(n) time complexity

const twoSum = function (nums, target) {
	const hashMap = {}; //start with empty object to store values
	for (let i = 0; i < nums.length; i++) {
		let neededVal = target - nums[i];
		if (hashMap[neededVal] != null) { //if index in hashMap exists
			return [hashMap[neededVal], i]; 
		} else {
			hashMap[nums[i]] = i;
		}
	}
};
twoSum([3, 2, 4], 6); //[1,2]

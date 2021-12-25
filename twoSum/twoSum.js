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

//Map O(n) time and space complexity 80ms runtime
// const twoSum = function(nums, target){
//   const map = new Map();
//   for(let i = 0; i < nums.length; i++){
//     let neededVal = target - nums[i];
//     if(map.has(neededVal)){
//       return [map.get(neededVal), i]
//     } else {
//       map.set(nums[i], i)
//     }
//   }
// }


//Hashmap O(n) time and space complexity
//most optimal solution according to leetcode 72ms runtime
const twoSum = function (nums, target) {
	const hashMap = {}; //start with empty object to store value : index
	for (let i = 0; i < nums.length; i++) {
		let neededVal = target - nums[i];
		if (hashMap[neededVal] != null) { //if index in hashMap exists
			return [hashMap[neededVal], i]; 
		} else {
			hashMap[nums[i]] = i; //otherwise store index in hashmap
		}
	}
};


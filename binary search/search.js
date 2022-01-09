/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Time complexity O(log N)
//Space complexity O(1)
const search = function (nums, target) {
  //declare 2 pointers to each end of the array to start 
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};

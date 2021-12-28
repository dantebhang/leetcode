/**
 * @param {number} x
 * @return {boolean}
 */
//solution that first converts the numbers into a string 
//challenge is not to do this and it would require extra space
const isPalindrome = function(x) {
  const xString = x.toString();
  return xString === xString.split("").reverse().join("")
};
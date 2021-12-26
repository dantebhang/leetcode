/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const xString = x.toString();
  return xString === xString.split("").reverse().join("")
};
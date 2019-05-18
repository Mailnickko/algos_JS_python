/*
	Prompt: Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in the array in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

	Input: [3, 5, -4, 8, 11, 1, -1, 6] , 10
	Output: [-1, 11]
*/

const twoNumSum = (arr, target) => {
  if (!Array.isArray(arr) || !arr.length || !target) {
    return [];
  }

  const memo = {};
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (memo[diff] !== undefined) {
      return [arr[i], diff].sort((a, b) => a - b);
    }
    memo[arr[i]] = i;
  }

  return [];
};

console.log(twoNumSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

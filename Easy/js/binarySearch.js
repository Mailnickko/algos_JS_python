/*
	Prompt: Use binary search to find index of target. Return -1 if it doesn't exist

	Input: [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
	Output: 3
*/

const binarySearch = (array, target) => {
  if (!Array.isArray(array) || !array.length || isNan(target)) {
    return -1;
  }
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] < target) {
      start = mid + 1;
    } else if (array[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};

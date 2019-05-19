/*
	Prompt: Find nth Fibnonacci number

	Input: 6
	Output: 5 => (0, 1, 1, 2, 3, 5)
*/

const nthFibIterative = n => {
  const memo = [0, 1];

  while (n >= 3) {
    const nextFib = memo[0] + memo[1];
    memo[0] = memo[1];
    memo[1] = nextFib;
    n -= 1;
  }

  return n > 1 ? memo[1] : memo[0];
};

const nthFibCached = (n, memo = { 1: 0, 2: 1 }) => {
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = nthFibCached(n - 1, memo) + nthFibCached(n - 2, memo);
  return memo[n];
};

const nthFibRecursive = n => {
  if (n === 2) {
    return 1;
  }
  if (n === 1) {
    return 0;
  }

  return nthFibRecursive(n - 1) + nthFibRecursive(n - 2);
};

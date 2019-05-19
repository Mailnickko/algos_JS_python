def nthFibIterative(n):
    memo = [0, 1]

    while n >= 3:
        nextFib = memo[0] + memo[1]
        memo[0] = memo[1]
        memo[1] = nextFib
        n -= 1

    return memo[1] if n > 1 else memo[0]


def nthFibCached(n, memo={1: 0, 2: 1}):
    if n in memo:
        return memo[n]
    else:
        memo[n] = nthFibCached(n - 1, memo) + nthFibCached(n - 2, memo)
        return memo[n]


def nthFibRecursive(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
        return nthFibRecursive(n - 1) + nthFibRecursive(n - 2)

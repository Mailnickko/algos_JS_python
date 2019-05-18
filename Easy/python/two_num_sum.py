def two_num_sum(arr, target):
    if not arr or type(arr) is not list or not target:
        return []
    memo = {}
    for num in arr:
        diff = target - num
        if diff in memo:
            return sorted([diff, num])
        memo[num] = True
    return []


print(two_num_sum([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(two_num_sum([], 10))
print(two_num_sum('taco', 10))

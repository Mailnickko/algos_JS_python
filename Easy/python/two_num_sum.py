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


def two_num_sum_bin_search(arr, target):
    if not arr or type(arr) is not list or not target:
        return []
    sorted_arr = sorted(list(arr))  # make sorted copy
    left = 0
    right = len(arr) - 1
    while left < right:
        the_sum = sorted_arr[left] + sorted_arr[right]
        if the_sum < target:
            left += 1
        elif the_sum > target:
            right -= 1
        else:
            return [sorted_arr[left], sorted_arr[right]]
    return []


print(two_num_sum_bin_search([3, 5, -4, 8, 11, 1, -1, 6], 10))
print(two_num_sum_bin_search([], 10))
print(two_num_sum_bin_search('taco', 10))

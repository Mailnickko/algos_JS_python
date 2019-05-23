def is_palindrome(string):
    formatted = ''.join([char.lower() for char in string if char.isalnum()])
    return formatted == formatted[::-1]


print(is_palindrome("race car"))  # true
print(is_palindrome("A man, a plan, a canal. Panama"))  # true
print(is_palindrome("never odd or even"))  # true
print(is_palindrome("0_0 (: /- :) 0–0"))  # true
print(is_palindrome("My age is 0, 0 si ega ym."))  # true
print(is_palindrome("nope"))  # false
print(is_palindrome("not a palindrome"))  # false
print(is_palindrome("almostomla"))  # false
print(is_palindrome("1 eye for of 1 eye."))  # false

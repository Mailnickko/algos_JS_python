const palindromeCheck = str => {
  const reg = /[\W_]/g;
  const formatted = str.replace(reg, "").toLowerCase();
  return (
    formatted ===
    formatted
      .split("")
      .reverse()
      .join("")
  );
};

console.log(palindromeCheck("race car")); // true
console.log(palindromeCheck("A man, a plan, a canal. Panama")); // true
console.log(palindromeCheck("never odd or even")); // true
console.log(palindromeCheck("0_0 (: /- :) 0–0")); // true
console.log(palindromeCheck("My age is 0, 0 si ega ym.")); // true
console.log(palindromeCheck("nope")); // false
console.log(palindromeCheck("not a palindrome")); // false
console.log(palindromeCheck("almostomla")); // false
console.log(palindromeCheck("1 eye for of 1 eye.")); // false

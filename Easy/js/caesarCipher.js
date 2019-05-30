const caesarCipher = (string, key) => {
  const newLetters = [];
  const newKey = key % 26;
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
  string.split("").forEach(letter => {
    newLetters.push(getNewLetter(letter, newKey, ALPHABET));
  });

  return newLetters.join("");
};

const getNewLetter = (letter, key, alphabet) => {
  const letterIndex = alphabet.indexOf(letter) + key;
  return letterIndex <= 25
    ? alphabet[letterIndex]
    : alphabet[(letterIndex % 25) - 1];
};

/**
 * @description - Method to check vowel character
 *
 * Step 1 - Compare the input with a || e || i || o || u
 * Step 2 - Check if it's not a valid input or string
 * Step 3 - Check if it's matching
 * Step 3.1 - It's vowel & return
 * Step 4 - It's a consonant
 */
const checkVowels = (input) => {
  // Any false value
  if (!input || typeof input !== "string") {
    return "Please enter a valid character";
  }

  if (
    input === "a" ||
    input === "e" ||
    input === "i" ||
    input === "o" ||
    input === "u"
  ) {
    return "It's a vowel";
  }

  return "It's a consonant";
};

console.log(checkVowels("a"));
console.log(checkVowels("e"));
console.log(checkVowels("b"));
console.log(checkVowels("c"));
console.log(checkVowels());
console.log(checkVowels(""));
console.log(checkVowels(null));

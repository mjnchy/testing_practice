function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function reverseString (string) {
  return string.split("").reverse().join("");
};

const calculator = {
  add: (a, b) => {
    return a + b;
  },

  subtract: (a, b) => {
    return a - b;
  },

  multiply: (a, b) => {
    return a * b;
  },

  divide: (a, b) => {
    return a / b;
  }
};

function ceaserCipher (string, shift) {
  let charObj = {};
  let charIndex = [];
  let encrypted = "";

  for (let i = 0; i < 26; i++) {
    let letter =  String.fromCharCode(65 + i).toLowerCase();
    charObj[letter] = i;
    charIndex[i] = letter;
  }

  let strArr = string.split("");
  
  strArr.forEach(char => {
    let index = charObj[char] + shift - 1;
    if (index >= 25) index = index % 25;
    let newChar = `${charIndex[index]}`;
    if (char == " ") newChar = " ";
    encrypted += newChar;
  });

  return encrypted;
};

export {capitalize, reverseString, calculator, ceaserCipher };

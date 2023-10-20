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
  };

  return cipherText(string, charObj, charIndex, shift, encrypted);
};

function cipherText (string, obj, arr, shift, result) {
  let strArr = string.split("");

  strArr.forEach(char => {
    let casedChar = char.toLowerCase();
    let index = obj[casedChar] + shift;
    if (index > 25) index = (index % 26);
    let newChar = `${arr[index]}`;
    
    if (char == " ") newChar = " ";
    if (char.match(/[A-Z]/)) newChar = newChar.toUpperCase();
    if (char.match(/\p{P}/u)) newChar = char;
    result += newChar;
  });

  return result;
};


export {capitalize, reverseString, calculator, ceaserCipher };

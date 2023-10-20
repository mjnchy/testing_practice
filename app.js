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

  // let strArr = string.split("");
  //
  // strArr.forEach(char => {
  //   let index = charObj[char] + shift;
  //   if (index > 25) index = (index % 25) - 1;
  //   let newChar = `${charIndex[index]}`;
  //   if (char == " ") newChar = " ";
  //   encrypted += newChar;
  // });
};

function cipherText (string, obj, arr, shift, result) {
  let strArr = string.split("");

  strArr.forEach(char => {
    let index = obj[char] + shift;
    if (index > 25) index = (index % 25) - 1;
    let newChar = `${arr[index]}`;
    if (char == " ") newChar = " ";

    result += newChar;
  });

  return result;
}


export {capitalize, reverseString, calculator, ceaserCipher };

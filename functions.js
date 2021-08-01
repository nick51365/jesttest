function sum(a, b) {
    return a + b;
}

function capitalize(string){
  let firstChar = string[0];
  let rest = string.slice(1, string.length);
  
  return firstChar.toUpperCase() + rest.toLowerCase();
}
 
function reverseString(string){
  let newStr = [];
  for (let i = 0; i < string.length; i++){
    newStr[i] = string[string.length - (i + 1)];
  }
  return newStr.join("");
}

const calculator = {
  add:(a,b) => {
    return a + b;
  },
  subtract:(a,b) => {
    return a - b;
  },
  divide:(a,b) => {
    return a / b;
  },
  multiply:(a,b) => {
    return a * b;
  },
}

function caesar(plaintext,key){

  //Converts a character to ASCII code
  const charCode = (char) => {
    return char.charCodeAt(0);
  };

  //Returns true for alphabetical characters
  const isAlpha = function(ch){
    return /^[A-Za-z]$/.test(ch)
  }

  let ciphertext = [];

  for(let i = 0; i < plaintext.length; i++){
    if(isAlpha(plaintext[i])){
      //currentCode is ASCII code of current char
      let currentCode = charCode(plaintext[i]);
      
      //If currentCode is for an uppercase char
      if (currentCode > 64 && currentCode < 91){
        currentCode += key;
        if (currentCode > 90){
          currentCode = (currentCode % 90) + 64;
        };
        ciphertext[i] = String.fromCharCode(currentCode);
      }
      //If curentCode is for a lowercase char
      if (currentCode > 96 && currentCode < 123){
        currentCode += key;
        if (currentCode > 122){
          currentCode = (currentCode % 122) + 96;
        };
        ciphertext[i] = String.fromCharCode(currentCode);
      }
    }else{
      ciphertext[i] = plaintext[i];
    }
  }
  return ciphertext.join("");
}


export{
  sum,
  capitalize,
  reverseString,
  calculator,
  caesar,
}
const reverseOnlyLetters = (inputStr: string) => {
  let newStr = "";
  const existingChar: any = [];
  for (let i = inputStr.length - 1; i >= 0; i--) {
    const asciiVal = inputStr[i].charCodeAt(0);
    if (
      !(asciiVal < 95 && asciiVal < 90) &&
      !(asciiVal < 97 && asciiVal < 122)
    ) {
      existingChar.push([i, inputStr[i]]);
      newStr += "_";
    } else {
      newStr += inputStr[i];
    }
  }

  console.log(newStr, existingChar);
};

console.log(reverseOnlyLetters("ab-cd"));

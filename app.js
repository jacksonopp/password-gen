function start() {
  const generateBtn = document.getElementById("generate-password");
  const passwordP = document.getElementById("password");
  const slider = document.getElementById("formControlRange");
  const passwordLengthOutput = document.getElementById("password-length-output");
  const lowercaseCheckBox = document.getElementById("lowercase-check");
  const uppercaseCheckBox = document.getElementById("uppercase-check");
  const numberCheckBox = document.getElementById("number-check");
  const specialCheckBox = document.getElementById("special-check")

  passwordLengthOutput.innerHTML = slider.value;

  slider.oninput = function () {
    passwordLengthOutput.innerHTML = this.value;
  }

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const specialCharacters = "!@#$%^&*()_+=-<>,.?/~`"
  const numbers = "1234567890"

  function randomIndex(randStr) {
    return Math.floor(Math.random() * randStr.length)
  }

  function getRandomCharacter(type, length, divisor, arrayCB) {
    for (let i = 0; i < Math.ceil(length / divisor); i++) {
      const randomCharacter = type.charAt(randomIndex(type))
      arrayCB.push(randomCharacter);
    }
  }

  function shuffleArray(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }


  function generatePassword(passwordLength, areLowercase, areUppercase, areSpecial, areNumbers) {
    passwordP.innerHTML = "";
    const output = [];
    let howManyTypes = 0
    if (areLowercase) {
      howManyTypes++
    }
    if (areUppercase) {
      howManyTypes++
    }
    if (areSpecial) {
      howManyTypes++
    }
    if (areNumbers) {
      howManyTypes++
    }

    console.log("howMany", howManyTypes)

    if (howManyTypes > 0) {
      if (areLowercase) {
        getRandomCharacter(lowercaseLetters, passwordLength, howManyTypes, output);
      }
      if (areUppercase) {
        getRandomCharacter(uppercaseLetters, passwordLength, howManyTypes, output);
      }
      if (areSpecial) {
        getRandomCharacter(specialCharacters, passwordLength, howManyTypes, output);
      }
      if (areNumbers) {
        getRandomCharacter(numbers, passwordLength, howManyTypes, output);
      }
      const outputTrimmed = output.slice(0, passwordLength)
      const outputShuffled = shuffleArray(outputTrimmed)
      const outputStr = outputShuffled.join("")
      passwordP.innerText = `${outputStr}`;
    } else {
      passwordP.innerText = "Please select at least one type"
    }
  }

  generateBtn.addEventListener("click", () => {
    const wantsLower = lowercaseCheckBox.checked;
    const wantsUpper = uppercaseCheckBox.checked;
    const wantsSpecial = numberCheckBox.checked;
    const wantsNumber = specialCheckBox.checked;
    console.log("stuff", wantsLower, wantsUpper, wantsSpecial, wantsNumber);
    generatePassword(slider.value, wantsLower, wantsUpper, wantsSpecial, wantsNumber);
  })
}

start();
function start() {
  const generateBtn = document.getElementById("generate-password");
  const passwordP = document.getElementById("password");
  const slider = document.getElementById("formControlRange");
  const passwordLengthOutput = document.getElementById("password-length-output")
  passwordLengthOutput.innerHTML = slider.value;

  slider.oninput = function () {
    passwordLengthOutput.innerHTML = this.value;
  }

  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const specialCharacters = "!@#$%^&*()_+=-<>,.?/~`"
  const numbers = "1234567890"
  const randomIndex = (randStr) => {
    return Math.floor(Math.random() * randStr.length)
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

    for (let i = 0; i < passwordLength; i++) {
      const randomCharacter = lowercaseLetters.charAt(randomIndex(lowercaseLetters));
      output.push(randomCharacter);
    }
    passwordP.innerText = output.join("");
  }

  generateBtn.addEventListener("click", () => {
    generatePassword(slider.value, true, true, false, true);
  })
}

start();
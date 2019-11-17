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
  const randomNumber = (randStr) => {
    return Math.floor(Math.random() * randStr.length)
  }

  const output = []

  function generatePassword(passwordLength) {
    generateBtn.addEventListener("click", () => {
      passwordP.innerHTML = "";
      for (let i = 0; i < passwordLength; i++) {
        const randomLetter = lowercaseLetters.charAt(randomNumber(lowercaseLetters));
        console.log("letter", randomLetter);
        output.push(randomLetter);
      }
      console.log(output);
      passwordP.innerText = output.join("");
    })
  }
  generatePassword(slider.value);
}

start();
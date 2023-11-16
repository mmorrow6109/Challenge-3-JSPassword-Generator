var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("How many characters would you like your password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }

  else {
    var lowercaseConfirm = confirm("Would you like to include lowercase letters?");
    var uppercaseConfirm = confirm("Would you like to include uppercase letters?");
    var numbersConfirm = confirm("Would you like to include numbers?");
    var specialCharactersConfirm = confirm("Would you like to include special characters?");
    var optionsString = "";
    
    if (lowercaseConfirm) {
     optionsString += lowercase;
    }
    
    if (uppercaseConfirm) {
      optionsString += uppercase;
    }

    if (numbersConfirm) {
      optionsString += numbers;
    }

    if (specialCharactersConfirm) {
      optionsString += specialCharacters;
    }

  }

  for (var i = 0; i < passwordLength; i++) {
    var randomChars = Math.floor(Math.random() * optionsString.length);
    password += optionsString.charAt(randomChars);
  }
  
  passwordText.value = password;

  console.log(password);

}

generateBtn.addEventListener("click", generatePassword);

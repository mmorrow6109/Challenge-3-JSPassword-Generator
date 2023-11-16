// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

function generatePassword() {
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

  return password;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  


  
    

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

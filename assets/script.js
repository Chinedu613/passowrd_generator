// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Criteria Arrays

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "'"];

var userPasswordCriteria = [];
console.log(userPasswordCriteria);
var userPassword = "";
console.log(userPassword);

//Function to Start Generating Password
function generatePassword() {
  var passwordLength = prompt("provide password length");//says password length and input length is not defined

    inputLength = parseInt(passwordLength)
  console.log(inputLength)

  // check if the 8 < passwordLength < 128
  if (inputLength < 8 || inputLength > 128) {
    alert("password lenght must be at least 8 characters long and no more than 128 characters");
    return console.log(inputLength);
  }

  // Confirm the Characters the User would like to use
  else {
    var lowerCaseLetters = confirm("Would you like to make your password contain lower case alphabetical characters?");
    if (lowerCaseLetters){
      userPasswordCriteria = userPasswordCriteria.concat(lowerCaseLetters);
      console.log(userPasswordCriteria); 
    }
    var upperCaseLetters = confirm("Would you like to make your password contain upper case alphabetical characters?"); 
    if (upperCaseLetters){
      userPasswordCriteria = userPasswordCriteria.concat(upperCaseLetters);
      console.log(userPasswordCriteria);
  }
  var numeric = confirm("Would you like to make your password contain numeric characters?"); 
  if (numeric){
    userPasswordCriteria = userPasswordCriteria.concat(numeric);
    console.log(userPasswordCriteria);
}
var specialCharacters = confirm("Would you like to make your password contain numeric characters?"); 
if (specialCharacters){
  userPasswordCriteria = userPasswordCriteria.concat(specialCharacters);
  console.log(userPasswordCriteria);
}
  
  if (lowerCaseLetters === false && upperCaseLetters === false){
    alert("must choose a password criteria")
  }return userPasswordCriteria;
  console.log(userPasswordCriteria);
  }

  //Create Loop for Password
for (var i = 0; i <= inputLength; i++){

  var entry = Math.floor(Math.random() * userPasswordCriteria.length);
  
  userPassword += userPasswordCriteria[entry]; 



}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

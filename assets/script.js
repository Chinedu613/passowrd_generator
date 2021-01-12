// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Criteria Arrays

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "'"];




//Function to Start Generating Password
function generatePassword() {
  var userPassword = "";

  var userPasswordCriteria = [];

  var passwordLength = parseInt(prompt("provide password length"));//says password length and input length is not defined

   /*  inputLength = parseInt(passwordLength)
  console.log(inputLength) */

  // check if the 8 < passwordLength < 128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("password lenght must be at least 8 characters long and no more than 128 characters");

    return console.log(passwordLength);
  }

  if (isNaN(passwordLength)){
    alert("Password Length must be a number");
    return;
  }

  // Confirm the Characters the User would like to use

    var confirmLowerCaseLetters = confirm("Would you like to make your password contain lower case alphabetical characters?");
    if (confirmLowerCaseLetters){
      userPasswordCriteria = userPasswordCriteria.concat(lowerCaseLetters);
     
    }
    var confirmUpperCaseLetters = confirm("Would you like to make your password contain upper case alphabetical characters?"); 
    if (confirmUpperCaseLetters){
      userPasswordCriteria = userPasswordCriteria.concat(upperCaseLetters);
    
  }
  var confirmNumeric = confirm("Would you like to make your password contain numeric characters?"); 
  if (confirmNumeric){
    userPasswordCriteria = userPasswordCriteria.concat(numeric);
  
}
var confirmSpecialCharacters = confirm("Would you like to make your password contain numeric characters?"); 
if (confirmSpecialCharacters){
  userPasswordCriteria = userPasswordCriteria.concat(specialCharacters);
 
}
  
  /* if (confirmLowerCaseLetters  === false && upperCaseLetters === false && upperCaseLetters === false){
    alert("must choose a password criteria")
  }return userPasswordCriteria; */
  /* console.log(userPasswordCriteria); */

  
  //Create Loop for Password
for (var i = 0; i <= passwordLength; i++){
//entry holds random index of array
  var entry = Math.floor(Math.random() * userPasswordCriteria.length);

  userPassword += userPasswordCriteria[entry]; 
}

// console.log("This is line 65", userPassword);
return userPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

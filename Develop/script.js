//Assignment Code
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Build password consisiting of specified number of characters using while loop.

function generatePassword() {

  //Prompt stating password needs to be between 8-128 characters, asking for input. 
  let inputLength = prompt("PASSWORD CRITERIA: Enter password length (between 8-128 characters).");
 
//Use parseInt function to convert the user input value from a string to a number.
  inputLength = parseInt(inputLength)

     //Include alert in case an invalid response outside of the 8-128 character range is entered. 
    while (inputLength < 8 || inputLength > 128) {
      alert("Please enter a valid length from 8 to 128 characters.")
      inputLength = prompt("PASSWORD CRITERIA: Enter password length (between 8-128 characters).");
    }
    
  //Next, 4 confirm prompts appear asking whether or not to include different types of characters.
  let isLower = confirm("PASSWORD CRITERIA: Include lowercase letters?");
  let isUpper = confirm("PASSWORD CRITERIA: Include uppercase letters?");
  let isNumber = confirm("PASSWORD CRITERIA: Include numbers?");
  let isSpecial = confirm("PASSWORD CRITERIA: Include special characters?");

  //Use the .split("") function to create 4 arrays listing each individual character  in the uppercase alphabet, lowercase alphabet, a list of all single-digit numbers, and a list of all special characters--all to be pulled from in the while loop.
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = '1234567890'.split("");
  const specialChar = "~`!@#$%^&*()_-+<>?+={}[]|:;',.".split("");

  let newPassword = "";
  let index ;

 //A while loop is used to loop through the input values the specified amount of times until the user input password length is attained. The getRandomIndex function will be defined and used last.
 while ( newPassword.length <= inputLength) {

        if (isLower) {
          index = getRandomIndex(lowerCase.length);
          newPassword = newPassword +  lowerCase[index];
        }
       if (isUpper) {
         index = getRandomIndex(upperCase.length);
         newPassword = newPassword + upperCase[index];
       }
       if (isNumber) {
        index = getRandomIndex(numbers.length);
        newPassword = newPassword + numbers[index];
      }
      if (isSpecial) {
        index = getRandomIndex(specialChar.length);
        newPassword = newPassword + specialChar[index];
      }

  }

console.log(newPassword);
  return newPassword
}

//The getRandomIndex function uses a math.random function (with inclusive maximum and minimum values). This randomizes the results of the getRandomIndex function, thus creating the final randomized password that meets all user-seleted criteria.
function getRandomIndex(max) {
  return Math.floor(Math.random() * max); 
}
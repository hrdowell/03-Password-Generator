// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Build password consisiting of specified number of characters using a WHILE loop.

//Include a PROMPT stating password needs to be between 8-128 characters, asking for input. 

//Use parseInt function to convert the user input value from a string to a number, for later functions.

//Include alert in case an invalid response outside of the 8-128 character range is entered.

//Include 4 CONFIRM prompts to ask whether or not to include different types of characters: uppercase letters, lowercase letters, numbers, & special characters.

//Use the .split("") function to create 4 arrays listing each individual character  in the uppercase alphabet, lowercase alphabet, a list of all single-digit numbers, and a list of all special characters--all to be pulled from in the while loop.


//Use while loop to include all password criteria clicked for the specificed length inputted by the user.

//Use math.random function with inclusive max & min values to randomize the results from the previous function to create the final random password with a length that matches the user input values from the first prompt and the 4 confirm prompts.

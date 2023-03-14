// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];



// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


var results = []

var PasswordLength = 8

function generatePassword() {
    console.log('password');

    var PasswordLength= window.prompt('Choose between 8-128 Characters.')
    if (PasswordLength < 8 || PasswordLength > 128) {
        alert('Invalid Amount of Characters.');
        PasswordLength = window.prompt('Choose between 8-128 Characters.')
    }

    else {
        window.alert('success')
    }

    var specialChars = window.confirm('Would you like to include special Characters?');
    if (specialChars) {
        results.push(specialCharacters)
        console.log('Has Special Characters')
    }

    var upperCased = window.confirm('Would you like to include Uppercase letters?');
    if (upperCased) {
        results.push(upperCasedCharacters)
        console.log('Has Uppercase')
    }

    var lowerCased = window.confirm('Would you like to include Lowercase letters?');
    if (lowerCased) {
        results.push(lowerCasedCharacters)
        console.log('Has Lowercased')
    }

    var numberChars = window.confirm('Would you like to include Numeric characters?');
    if (numberChars) {
        results.push(numericCharacters)
        console.log('Has Numbers')
    }

   
    if (results.length === 0) {
        window.alert('Invalid');
        generatePassword();
    }

    var password = '';
    for (var i = 0; i < PasswordLength; i++) {
        var resultsIndex = Math.floor(Math.random() * results.length);
        var selection = results[resultsIndex];
        password += selection[Math.floor(Math.random() * selection.length)]
    }



    return password;
}




// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here
var letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var lowerLetters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "è"]
var userpassword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generateletters() {
  var randomletters = letters[Math.floor(Math.random() * letters.length)]
  return (randomletters)
}

function generatenumbers() {
  var randomnumbers = numbers[Math.floor(Math.random) * numbers.length]
  return (numbers)
}

function generatespecialcharacters() {
  var randomspecialcharacters = specialcharacters[Math.random() * specialcharacters.length]
  return (specialcharacters)
}

function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you want this password?"))
  var containsUppercase = confirm("Would you like uppercase letters in your password?")
  var containsLowercase = confirm("Would you like lowercase letters in your password?")
  var containsNumbers = confirm("Would you like numbers in your password?")
  var containsSpecialcharacters = confirm("Would you like special characters in your password?")
  console.log(letters)
  console.log(lowerLetters)
  console.log(numbers)
  console.log(specialcharacters)
  if (passwordLength >= 8 && passwordLength <= 128) {
    if (containsUppercase || containsLowercase || containsNumbers || containsSpecialcharacters) {
      var selectedCharacters = [];
      if (containsUppercase) {
        selectedCharacters = selectedCharacters.concat(letters)
      }
      if (containsLowercase) {
        selectedCharacters = selectedCharacters.concat(lowerLetters)
      }
      if (containsNumbers) {
        selectedCharacters = selectedCharacters.concat(numbers)
      }
      if (containsSpecialcharacters) {
        selectedCharacters = selectedCharacters.concat(specialcharacters)
      }
      for (var i = 0; i < passwordLength; i++) {
        let rng = Math.floor(Math.random() * selectedCharacters.length);
        console.log(rng)
        console.log(selectedCharacters) 
        userpassword += selectedCharacters[rng];
        console.log("pw:", userpassword)
      }

      return userpassword
    } } }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
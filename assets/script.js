// Assignment code here
var letters = ["A", "B", "C", "D", "E", "F", "G"]
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specialcharacters = ["!", "@", "#", "$", "%", "è"]
var userpassword = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generateuppercase() {
  var randomuppcase = letters[Math.floor(Math.random() * letters.length)]
  return (randomuppcase)
}

function generatenumber(){
  var randomnumber = numbers[Math.floor(math.random) * numbers.length]
  return (numbers)
}

function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you want this password?"))
  var uppercase = confirm("Would you like uppercase in your password?")
  var lowercase = confirm("Would you like lowercase in your password?")
  var numbers = confirm("Would you like numbers in your password?")
  var specialcharacters = confirm("Would you like special characters in your password?")
  if (passwordLength >= 8 && passwordLength <=128) {
  if (uppercase || lowercase || numbers  || specialcharacters) {
  for(var i = 0; i < passwordLength; i++) {
  userpassword = userpassword + generateuppercase()
}
  } else {
    generatePassword()
  }

  } else {
    generatePassword()
  }
  return userpassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

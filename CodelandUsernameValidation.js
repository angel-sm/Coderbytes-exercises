// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function CodelandUsernameValidation(str) { 
    const exp = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/
    return str.length >= 4 && str.length <= 25 && exp.test(str)
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));
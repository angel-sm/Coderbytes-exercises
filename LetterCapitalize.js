// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. 
// Words will be separated by only one space.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LetterCapitalize(str) { 
    const newwords = str.split(' ').map(word => {
      return word.replace(/^\w/g, c => c.toUpperCase());
    })
    return newwords.join(' ')
  
  
  }
     
  // keep this function call here 
  console.log(LetterCapitalize(readline()));
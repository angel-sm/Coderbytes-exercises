// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. 
// If there are two or more words that are the same length, return the first word from the string with that length. 
// Ignore punctuation and assume sen will not be empty.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

function LongestWord(sen) { 

    // code goes here  
    return sen.replace(/[^a-zA-Z ]/ig,'').split(' ').reduce((prev, next) => prev.length < next.length ? next : prev); 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));
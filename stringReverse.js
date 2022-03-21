//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the
// name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.



//Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
//My way 

function spinWords(string) {
    var finalString = "";
    var myArray = string.split(' ');
    for(let i = 0; i < myArray.length; i++) {
        
        // console.log(myArray[i]);
        if(myArray[i].length >= 5) {
            var splitString = myArray[i].split("");
            var reverseArray = splitString.reverse();
            var joinArray = reverseArray.join("");
            // console.log(joinArray);
            finalString = finalString + " " + joinArray;
            finalString = finalString.trim();
            
        }
        else {
            finalString = finalString + " " + myArray[i];
            finalString = finalString.trim();
        }
        
    }
    finalString.concat();
    console.log(finalString);
    // }
    // if(myArray[i].length > 2) {
    //     console.log(myArray[i]);
    // }
}

spinWords('This is another test');


//Easy way from solutions

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }
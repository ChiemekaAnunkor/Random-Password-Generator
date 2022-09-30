//create a button that prompts users to enter a number
//if selected, confirm for  uppercase,lowercase,special and numeric values
// validated responces

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//S

function generatePassword() {
  //password variables
  const numbers = "1234567890";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChar = "!@#$%^&*()_+-=?<>/~";

  let pwLength = prompt("Type Password Length (i.e numbers between 8-128)");
  let listOfRandomItems = [];

  //validate pwlength password recieved to check if its between 8 and 128
  if (pwLength > 7 && pwLength < 129) {
    //validate if lowercase

    const confirmLowerCase = confirm("Does it include LOWERCASE");
    //validate if uppercase

    const confirmUpperCase = confirm("Does it include UPPERCASE");

    //validate if special characters

    const confirmSpecial = confirm("Does it include SPECIAL CHARACTERS");

    //validate if numeric

    const confirmNumeric = confirm("Does it include NUMERIC VALUES");

    //varriables to hold numbers
    const arrayOFConfirmPrompts = [];

    //validate truty or falsey values on confrim prompts
    if (confirmLowerCase) {
      //pushes value to array to be stored ( the lenght used at the forloop )
      arrayOFConfirmPrompts.push(confirmLowerCase);
    }
    if (confirmUpperCase) {
      arrayOFConfirmPrompts.push(confirmUpperCase);
    }
    if (confirmSpecial) {
      arrayOFConfirmPrompts.push(confirmSpecial);
    }
    if (confirmNumeric) {
      arrayOFConfirmPrompts.push(confirmNumeric);
    }
    let pwLengthDivedByArrayLength = Math.ceil(
      pwLength / arrayOFConfirmPrompts.length
    );

    ///validate if incorrect
    let noResponceCounter = 0;
    if (!confirmLowerCase) {
      noResponceCounter++;
    }
    if (!confirmUpperCase) {
      noResponceCounter++;
    }
    if (!confirmSpecial) {
      noResponceCounter++;
    }
    if (!confirmNumeric) {
      noResponceCounter++;
    }
    if (noResponceCounter === 4) {
      alert(
        "You must select an option form the confrim menu (i.e number,uppercase, lowercase, special character )"
      );
    }

    pwLengthDivedByArrayLength = pwLengthDivedByArrayLength + 1;
    //variable to store all of the new selected characters

    if (confirmLowerCase) {
      //create group of random lowercase to add to listofrandomitems
      for (let i = 0; i < pwLengthDivedByArrayLength; i++) {
        var randomLowerCase =
          lowerCase[Math.floor(Math.random() * lowerCase.length)];
        listOfRandomItems.push(randomLowerCase);
      }
    }
    if (confirmUpperCase) {
      //create group of random uppercase to add to listofrandomitems
      for (let i = 0; i < pwLengthDivedByArrayLength; i++) {
        var randomUpperCase =
          upperCase[Math.floor(Math.random() * upperCase.length)];
        listOfRandomItems.push(randomUpperCase);
      }
    }
    if (confirmSpecial) {
      //create group of random specialcases to add to listofrandomitems
      for (let i = 0; i < pwLengthDivedByArrayLength; i++) {
        var randomSpecialCase =
          specialChar[Math.floor(Math.random() * specialChar.length)];
        listOfRandomItems.push(randomSpecialCase);
      }
    }
    if (confirmNumeric) {
      //create group of random specialcases to add to listofrandomitems
      for (let i = 0; i < pwLengthDivedByArrayLength; i++) {
        var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
        listOfRandomItems.push(randomNumbers);
      }
    }

    //view
  } else {
    alert("must enter valid number between 8 and 128");
  }

  let finalGeneratedpw = [];
  for (let i = 0; i < pwLength; i++) {
    let generatedpw =
      listOfRandomItems[Math.floor(Math.random() * listOfRandomItems.length)];
    finalGeneratedpw.push(generatedpw);
  }

  return finalGeneratedpw.join("");
}

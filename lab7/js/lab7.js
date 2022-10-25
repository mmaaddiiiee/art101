/**
 * Author:    Madelyn Sutherland
 * Created:   10.24.2022.
 **/
function nameSorter() {
  //Step 1:
 var userName = window.prompt("Enter your name, so I can make a new one.");
 console.log("user's input= ", userName);

 //step 2:
 var userNameArray = userName.split("");

 //step 3:
 var userNameArraySorted = userNameArray.sort();

 //Step 4:
 var userNameSorted = userNameArraySorted.join("");
 console.log(userNameSorted);
//Step 5:
  return userNameSorted
};


 //runs
 document.writeln("Here is your new name: "), nameSorter(userInput), "</br");

 //task // X:

 var userInput = window.prompt("Enter name here for sorting.");

 function nameSorter2(name) {

   var userNameArray2 = name.split("");

   var userNameArraySorted2 = userNameArray2.sort();

   var userNameSorted2 = userNameArraySorted2.join("");
   console.log(userNameSorted2);

   return userNameSorted2
 };

 document.writeln("Here is your new name: ", nameSorter2(userInput), "</br");

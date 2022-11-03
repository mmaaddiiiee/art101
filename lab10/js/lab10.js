/**
 * Author:    Madelyn Sutherland
 * Created:   11.1.2022.
 **/

 //Step 1: borrow sort function form lab 7
 function nameSorter(name) {
   var nameArray = name.split("");
   var nameArraySorted = nameArray.sort();
   var nameSorted = nameArraySorted.join("");
   return nameSorted
 };

var outputEl = document.getElementById("output");
var buttonEl = document.getElementById("my-button");
var usersInputEl = document.getElementById("user-name");
var outputEl = document.getElementById("output");
 //
buttonEl.addEventListener("click", function() {
  var usersInput = usersInputEl.value;

  var sortedUsersInput = nameSorter(usersInput);

  outputEl.innerHTML = "Hello " + sortedUsersInput
});

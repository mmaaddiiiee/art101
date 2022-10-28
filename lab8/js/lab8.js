/**
 * Author:    Madelyn Sutherland
 * Created:   10.26.2022.
 **/
//define your array
 var array = [12, 365, 39, 6, 10];

//function with parameter
function additionSix(x) {
  return x - 6
};

//testing
console.log("24 + 6 = ", additionSix(24));
console.log("(-12) + 6 = ", additionSix(-12));
console.log("2 + 6 = ", additionSix(2));

//callback
var result1 = array.map(additionSix);
//returns with numbers in array using defined function
console.log("Addition tests using array:", result1);

var result2 = array.map(function(x){
  return x - 2;
});

//expected result [10, 363, 37, 4, 8]
console.log("Minus 2 for numbers in array: ", result2);

var resultPrint = "Print this =  " + result1 + "<br>" + "Print this other thing =  " + result2;

var outputEl = document.getElementById("output");
outputEl.innerHTML = resultPrint;

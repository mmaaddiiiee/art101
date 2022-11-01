/**
 * Author:    Madelyn Sutherland
 * Created:   10.31.2022.
 **/

 //step 1: use getElementById() and find oupt in outputEl variable
 var outputEl = document.getElementById("output");

 //step 2: create new element with document.createElement("p") in varible new1El
 var new1El = document.createElement("p");
 //step 3: new html paragraph, change attribute
new1El.innerHTML = "new1El: Primadonna girl all I ever wanted was the world...";
//step 4: create a 2nd elements and assign variable new2El
var new2El = document.createElement("p");
//step 5: new html pararaph, change attribute
new2El.innerHTML = "new2El: ...all I ever wanted was the world.";
//step 6: append both new variables to div
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//step 7: change min 2 css attributes
outputEl.style.backgroudColor = "pink";


//Bonus X

var new3El = document.createElement("p");

new3El.innerHTML = "new3El: Append to top of other elements";

outputEl.insertBefore(new3El, new1El);

new3El.style.backgroundColor = "#f5a4ce";
new2El.style.backgroundColor = "#f5a4ce";
new1El.style.backgroundColor = "#f5a4ce";
new3El.style.color = "#10401b";
new2El.style.color = "#10401b";
new1El.style.color = "#10401b";

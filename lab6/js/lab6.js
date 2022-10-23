/**
 * Author:    Madelyn Sutherland
 * Created:   10.22.2022.
 **/

 // Define variables
 var myTransport = ["Loop Bus", "Santa Cruz Metro", "Walking"]

 var myMainRide = {
   make: "Honda",
   model: "Accord",
   color: "Blue Pearl",
   year: 2005,
   ownIt: true,
   age: function() {
     return 2022 - year;
   }
 }

 //  Output
 document.writeln("My forms of transportation: " + myTransport + "<br>");
 document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

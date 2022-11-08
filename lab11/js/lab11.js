/**
 * Author:    Madelyn Sutherland
 * Created:   11.7.2022.
 **/
 //create buttons and put into each section
$("#Challenges").append("<button class='challenge-button'>Challenge");
$("#Problems").append("<button class='problem-button'>Problem");
$("#Results").append("<button class='result-button'>Result");

//create event listener with click function for each button
$(".challenge-button").click(function(){
  $(".challenge-button").toggleClass("special");
});

$(".problem-button").click(function(){
  $(".problem-button").toggleClass("special");
});

$(".result-button").click(function(){
  $(".result-button").toggleClass("special");
});


//Task X toggle and switch button elements for problem button and result

$("#output").append("<button class='color-change'>Color Change");



$(".color-change").click(function(){
  $(".result-button").toggleClass("special2");
  $(".problem-button").toggleClass("special2");
  $(".challenge-button").toggleClass("special2");


})

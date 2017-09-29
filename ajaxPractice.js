/*
$(function() {
    $("#Doggo").click(function(){
      $("#Doggo").text("Generating Doggo...");
      console.log("Generating Doggo...");
    })
});
*/

$(document).ready(function () {
  $(".Doggo").click(function(){
    console.log("Generating Doggo...");
    $(".Doggo").text("Generating Doggo...");
    $.get('https://dog.ceo/api/breeds/image/random');
  })
});

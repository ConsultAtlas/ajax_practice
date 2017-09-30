/*
$(document).ready(function () {
  $(".Doggo").click(function(){
    console.log("Generating Doggo...");
    $(".Doggo").text("Generating Doggo...");

    $.get('https://dog.ceo/api/breeds/image/random', function(data){
      console.log(data.message);
      var randomDog = data.message; //select the key pair in the JSON Object
      $('body').append('<img id="rdi" />'); // add an image with the id 'rdi' tot he div
      $('#rdi').attr('src', randomDog); // selected the image and changed the source to the randomDog url
      $(".Doggo").text("Generate Doggo");
    });
    });
  $('body').append('<br><br>');
  $('body').append('<select></select>');
  $('body').append('<br><br>');
});
*/


$(document).ready(function () {
  $(".Doggo").click(function(){
    $.get.('https://dog.ceo/api/breeds/list');
  }
}

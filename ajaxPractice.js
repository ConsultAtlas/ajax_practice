$(document).ready(function () {
  $(".Doggo").click(function(){
    console.log("Generating Doggo...");
    $(".Doggo").text("Generating Doggo...");

    $.get('https://dog.ceo/api/breeds/image/random', function(data){
      console.log(data.message);
      var randomDog = data.message;
      
    });
      /*$(".button").append("<img id='theDogImg'></img>");
      $('#theDogImg').attr('src', 'dogPicture');*/
    });

});

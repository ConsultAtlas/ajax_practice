
/*$(document).ready(function () {
  $(".Doggo").click(function(){

    $(".Doggo").text("Generating Doggo...");

    $.get('https://dog.ceo/api/breeds/image/random', function(data){

      var randomDog = data.message; //select the key pair in the JSON Object
      $('body').append('<img id="rdi" />'); // add an image with the id 'rdi' tot he div
      $('#rdi').attr('src', randomDog); // selected the image and changed the source to the randomDog url
      $(".Doggo").text("Generate Doggo");
    });
    });
});
*/

$(document).ready(function(){
    $('#dog').click(function(){

        $("#dog").text("Generating Doggo...");

        $.get('https://dog.ceo/api/breeds/image/random', function(data){

            var image = $('<img />');
            image.attr('src', data.message);
            $('body').append(image);
            $("#dog").text("Generate Doggo");

        });

    });

    $.get("https://dog.ceo/api/breeds/list", function(data){
        data.message.forEach(function(breed){

            var option = $('<option></option>');
            option.val(breed);
            option.text(breed);
            //$("select").append('<option></option>') Not sure yet why wer are deleting
            $("select").append(option);
        });

    });

    $('select').change(function(){
        var currentlySelectedBreed = $(this).val();
        var url = 'https://dog.ceo/api/breed/'+ currentlySelectedBreed +'/images/random';

        $.get(url, function(data){
            var image = $('<img />');
            image.attr('src', data.message);
            $('body').append(image);
        });
    });
  });

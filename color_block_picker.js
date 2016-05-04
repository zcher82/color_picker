$(document).ready(function () {

  $('body').on('submit', function(event) {
    event.preventDefault();
  });

  var z = 1;
  var color = 'RED';
  console.log(z);
  console.log(color);
  //append containers that house each div color class
  $('body').append('<div class="container1"></div>');
  $('body').append('<div class="container2"></div>');
  $('body').append('<div class="container3"></div>');

  //append class for question box
  $('body').append('<div class="questionBox"><p>PICK ' + color + '</p></div>')


  //append 6 divs for 6 different colors and "result" divs
  $('.container1').append('<div id="button" class="red" data-id="1"></div>');
  $('.container1').append('<div id="button" class="blue" data-id="2"></div>');
  $('.container2').append('<div id="button" class="green" data-id="3"></div>');
  $('.container2').append('<div class="result"></div>');
  $('.container2').append('<div id="button" class="yellow" data-id="4"></div>');
  $('.container3').append('<div id="button" class="purple" data-id="5"></div>');
  $('.container3').append('<div id="button" class="orange" data-id="6"></div>');

  //append text box inside "result" div
  $('.result').append('<h1></h1>');

  //meat & potatoes...creating event handler for each color's color_block_picker
  $('body').on('click','#button', function() {
    if (z == $(this).data().id) {
      $('.result').text('CORRECT!');
      z = randomNumber();
      equateNumToColor();
      $('.questionBox').find('p').text('PICK ' + color);
      console.log(z);
    } else {
      $('.result').text('TRY AGAIN');
    }
  });

  function equateNumToColor () {
    switch (z) {
      case 1:
        color = "RED";
        break;
      case 2:
        color = "BLUE";
        break;
      case 3:
        color = "GREEN";
        break;
      case 4:
        color = "YELLOW";
        break;
      case 5:
        color = "PURPLE";
        break;
      case 6:
        color = "ORANGE";
      }
  }


  //UTILITY FUNCTIONS
  function randomNumber(){
    return Math.floor(Math.random() * (1 + 6 - 1) + 1);
  }

});

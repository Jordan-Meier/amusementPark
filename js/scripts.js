$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in cm?"));

  if (height >= 102) {
    $('#tallEnough').show();
  } else {
    $('#notTallEnough').show();
  }

});

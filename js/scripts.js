$(document).ready(function(){
  var height = parseInt(prompt("How tall are you in cm?"));

  if (height >= 102) {
    $("div.taller").addClass("allowed");


  } else {
    // $("div.allowed").removeClass();
    $("div.smaller").addClass("allowed");
  }
});

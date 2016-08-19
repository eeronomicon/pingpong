// Back End Code
var pingArray = [];
function pingSplit(userNumber) {
  for (i = 1; i <= userNumber; i++) {
    pingArray.push(i);
  };
  return pingArray;
};


// Front End Code
function pongDisplay(pongInput) {
  pongInput.forEach(function(pongDigit) {
    $("#pongResults").append("<li>" + pongDigit + "</li>");
  });
};

$(document).ready (function(){
  $("#pingForm").submit(function(event) {
    $("#pongResults").empty();
    pingNumber = parseInt($("#pingInput").val());
    pingResult = pingSplit(pingNumber);
    pongDisplay(pingResult);

    event.preventDefault();
  });
});

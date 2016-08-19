// Back End Code
var pingArray = [];
function pingSplit(userNumber) {
  pingArray = [];
  for (i = 1; i <= userNumber; i++) {
    pingArray.push(i);
  };
  return pingArray;
};
function pingProcess(pingedArray) {
  for (i = 0; i < pingedArray.length; i++) {
    if (pingedArray[i] % 15 === 0) {
        pingedArray[i] = "<span class=\"ping-pong\">ping-pong</span>";
    } else if (pingedArray[i] % 5 === 0) {
      pingedArray[i] = "<span class=\"pong\">pong</span>";
    } else if (pingedArray[i] % 3 === 0) {
      pingedArray[i] = "<span class=\"ping\">ping</span>";
    }
  };
  return pingedArray;
};

// Front End Code
function pongDisplay(pongInput) {
  $("#pongResults").empty();
  if (pongInput.length < 10) {
    pongInput.forEach(function(pongDigit) {
      $("#pongResults").append("<li class=\"list-group-item\">" + pongDigit + "</li>");
    });
  }

};
$(document).ready (function(){
  $("#pingForm").submit(function(event) {
    pingNumber = parseInt($("#pingInput").val());
    pingResult = pingProcess(pingSplit(pingNumber));
    pongDisplay(pingResult);
    event.preventDefault();
  });
});

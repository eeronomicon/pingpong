// Back End Code
// Create initial array of numbers
function pingSplit(userNumber) {
  pingArray = [];
  for (i = 1; i <= userNumber; i++) {
    pingArray.push(i);
  };
  return pingArray;
};
// Replace specified numbers with text and styling
function pingProcess(pingedArray) {
  for (i = 0; i < pingedArray.length; i++) {
    if (pingedArray[i] % 15 === 0) {
      pingedArray[i] = "ping-pong";
    } else if (pingedArray[i] % 5 === 0) {
      pingedArray[i] = "pong";
    } else if (pingedArray[i] % 3 === 0) {
      pingedArray[i] = "ping";
    }
  };
  return pingedArray;
};
// Front End Code
// Add color styling to output based on text
function pongColor(pingResults) {
  var pongResults = [];
  pingResults.forEach(function(pingResult) {
    if (pingResult === "ping-pong") {
      pongResults.push("<span class=\"ping-pong\">ping-pong</span>");
    } else if (pingResult === "pong") {
      pongResults.push("<span class=\"pong\">pong</span>");
    } else if (pingResult === "ping") {
      pongResults.push("<span class=\"ping\">ping</span>");
    } else {
      pongResults.push(pingResult);
    }
  });
  return pongResults;
}
// Populate 1 or 3 columns with output, based on output length
function pongDisplay(pongInput) {
  $(".pongResults").empty();
  $(".pongHeader").show();
  if (pongInput.length < 6) {
    pongInput.forEach(function(pongDigit) {
      $("#pongResults1").append("<li class=\"list-group-item\">" + pongDigit + "</li>");
    });
  } else {
    var pongOutputIndex = 0;
    var noItemsPerCol = Math.ceil(pongInput.length / 3);
    for (i = 1; i < 4; i++) {
      var colName = "#pongResults" + i;
      for (j = 0; j < noItemsPerCol; j++) {
        if (pongOutputIndex < pingResult.length) {
          pongAppend = "<li class=\"list-group-item\">" + pingResult[pongOutputIndex] + "</li>";
        } else {
          pongAppend = "";
        }
        $(colName).append(pongAppend);
        pongOutputIndex++;
      }
    }
  }
};
$(document).ready(function(){
// Collect, process, and display data
  $("#pingForm").submit(function(event) {
    pingNumber = parseInt($("#pingInput").val());
    pingResult = pongColor(pingProcess(pingSplit(pingNumber)));
    pongDisplay(pingResult);
    event.preventDefault();
  });
});

//time display at top of webpage
var timeDisplayEl = $('#currentDay');


function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);
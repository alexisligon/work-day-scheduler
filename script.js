//time display at top of webpage
var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

//--------------------------
var workHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']


function displayHours (hour) {
  var hourRow = $('<tr>');

  var hourDisplay = $('<td>').addClass('p-2').text('hour');

  var todoBox = $('<td>').addClass('p-2');
  var todoInput = $('<textarea>');
  todoBox.append(todoInput);

  var saveBox = $('<td>').addClass('p-2');
  var saveBtn = $('<button>').addClass('btn btn-primary btn-lg saveBtn').text('save').attr('data-time', hour);
  
  saveBox.append(saveBtn);

  var nextHour = moment().format('hh a');
  console.log(nextHour);

  hourDisplay.text(hour);
  console.log(hourDisplay);

$('#todo-display').append(hourRow);
  hourRow.append(hourDisplay);
  hourRow.append(todoBox);
hourRow.append(saveBox);
}

for (var i = 0; i < workHours.length; i++) {
  displayHours(workHours[i]);
}

//---------------

$('.saveBtn').on('click', function(){
  $('data-time')
});
console.log('button click')

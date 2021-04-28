//time display at top of webpage
var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

//--------------------------
//array for work hours in the day
var workHours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

//function to display table
function displayHours (hour) {
  var hourRow = $('<tr>');//creat a table row

  var hourDisplay = $('<td>').addClass('p-2').text('hour');//create a data cell to display the hour

  var todoBox = $('<td>').addClass('p-2');//create a data cell to write out todos
  var todoInput = $('<textarea>');//creates text area for input
  todoBox.append(todoInput);//inserts a text area box to the data cell

  var saveBox = $('<td>').addClass('p-2');//create a data cell for save button
  var saveBtn = $('<button>').addClass('btn btn-primary btn-lg saveBtn').text('save').attr('data-time', hour);//creates the button
  
  saveBox.append(saveBtn);//inserts a button into the box

  var nextHour = moment().format('hh a');
  console.log(nextHour);

  hourDisplay.text(hour);
  console.log(hourDisplay);

$('#todo-display').append(hourRow);//appends the row to the table
  hourRow.append(hourDisplay);//appends the hour to the row
  hourRow.append(todoBox);//appends the textbox to the row
hourRow.append(saveBox);//appends the save box to the row
}

//displays a new row for each hour in the array
for (var i = 0; i < workHours.length; i++) {
  displayHours(workHours[i]);
}

//---------------

$('.saveBtn').on('click', function(){
  $('data-time')
});
console.log('button click')

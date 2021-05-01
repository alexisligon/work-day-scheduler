var timeDisplayEl = $('#currentDay');

function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

getText();

function getText() {
    var chngTxt9 = localStorage.getItem('9am');
    $('#9text').text(chngTxt9);

    var chngTxt10 = localStorage.getItem('10am');
    $('#10text').text(chngTxt10);

    var chngTxt11 = localStorage.getItem('11am');
    $('#11text').text(chngTxt11);

    var chngTxt12 = localStorage.getItem('12pm');
    $('#12text').text(chngTxt12);

    var chngTxt1 = localStorage.getItem('1pm');
    $('#1text').text(chngTxt1);

    var chngTxt2 = localStorage.getItem('2pm');
    $('#2text').text(chngTxt2);

    var chngTxt3 = localStorage.getItem('3pm');
    $('#3text').text(chngTxt3);

    var chngTxt4 = localStorage.getItem('4pm');
    $('#4text').text(chngTxt4);

    var chngTxt5 = localStorage.getItem('5pm');
    $('#5text').text(chngTxt5);
}

$('#9am').on('click', function (){
    var nineText = $('#9text').val();
    localStorage.setItem('9am', nineText);
})

$('#10am').on('click', function (){
    var tenText = $('#10text').val();
    localStorage.setItem('10am', tenText);
})

$('#11am').on('click', function (){
    var elevenText = $('#11text').val();
    localStorage.setItem('11am', elevenText);
})

$('#12pm').on('click', function (){
    var twelveText = $('#12text').val();
    localStorage.setItem('12pm', twelveText);
})

$('#1pm').on('click', function (){
    var oneText = $('#1text').val();
    localStorage.setItem('1pm', oneText);
})

$('#2pm').on('click', function (){
    var twoText = $('#2text').val();
    localStorage.setItem('2pm', twoText);
})

$('#3pm').on('click', function (){
    var threeText = $('#3text').val();
    localStorage.setItem('3pm', threeText);
})

$('#4pm').on('click', function (){
    var fourText = $('#4text').val();
    localStorage.setItem('4pm', fourText);
})

$('#5pm').on('click', function (){
    var fiveText = $('#5text').val();
    localStorage.setItem('5pm', fiveText);
})


//variable for the current time to compare with row times
var current = moment().hour();


//variables for each row's hours
var eightAm = moment("08 am", "hh a").hour();
var nineAm = moment("09 am", "hh a").hour();
var tenAm = moment("10 am", "hh a").hour();
var elevenAm = moment("11 am", "hh a").hour();
var twelvePm = moment("12 pm", "hh a").hour();
var onePm = moment("01 pm", "hh a").hour()
var twoPm = moment("02 pm", "hh a").hour()
var threePm = moment("03 pm", "hh a").hour()
var fourPm = moment("04 pm", "hh a").hour()
var fivePm = moment("05 pm", "hh a").hour()
var sixPm = moment("06 pm", "hh a").hour()

//variable for each row to add class for color
var nineRow = $('#nineRow');
var tenRow = $('#tenRow');
var elevenRow = $("#elevenRow");
var twelveRow = $('#twelveRow');
var oneRow = $('#oneRow');
var twoRow = $('#twoRow');
var threeRow = $('#threeRow');
var fourRow = $('#fourRow');
var fiveRow = $('#fiveRow');


//for nine am row
if (current === nineAm){
    nineRow.addClass('present')
} else if (current > nineAm) {
    nineRow.addClass('past')
} else {
    nineRow.addClass('future')
}


//for ten am row
if (current === tenAm){
    tenRow.addClass('present')
} else if (current > tenAm) {
    tenRow.addClass('past')
} else {
    tenRow.addClass('future')
}

//for eleven am row
if (current === elevenAm){
    elevenRow.addClass('present')
} else if (current > elevenAm) {
    elevenRow.addClass('past')
} else {
    elevenRow.addClass('future')
}

//for twelve pm row
if (current === twelvePm){
    twelveRow.addClass('present')
} else if (current > twelvePm) {
    twelveRow.addClass('past')
} else {
    twelveRow.addClass('future')
}

//for one pm row
if (current === onePm){
    oneRow.addClass('present')
} else if (current > onePm) {
    oneRow.addClass('past')
} else {
    oneRow.addClass('future')
}

//for two pm row
if (current === twoPm) {
    twoRow.addClass('present')
} else if (current > twoPm) {
    twoRow.addClass('past')
} else {
    twoRow.addClass('future')
}

//for three pm row
if (current === threePm) {
    threeRow.addClass('present')
} else if (current > threePm) {
    threeRow.addClass('past')
} else {
    threeRow.addClass('future')
}

//for four pm row
if (current === fourPm){
    fourRow.addClass('present')
} else if (current > fourPm) {
    fourRow.addClass('past')
} else {
    fourRow.addClass('future')
}

//for five pm row
if (current === fivePm){
    fiveRow.addClass('present')
} else if (current > fivePm) {
    fiveRow.addClass('past')
} else {
    fiveRow.addClass('future')
}


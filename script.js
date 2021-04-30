// var timeDisplayEl = $('#currentDay');

// function displayTime() {
//   var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }
// setInterval(displayTime, 1000);

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
    console.log('9am button clicked');
    var nineText = $('#9text').val();
    console.log(nineText);
    localStorage.setItem('9am', nineText);
})

$('#10am').on('click', function (){
    console.log('10am button clicked');
    var tenText = $('#10text').val();
    console.log(tenText);
    localStorage.setItem('10am', tenText);
})

$('#11am').on('click', function (){
    console.log('11am button clicked');
    var elevenText = $('#11text').val();
    console.log(elevenText);
    localStorage.setItem('11am', elevenText);
})

$('#12pm').on('click', function (){
    console.log('12pm button clicked');
    var twelveText = $('#12text').val();
    console.log(twelveText);
    localStorage.setItem('12pm', twelveText);
})

$('#1pm').on('click', function (){
    console.log('1pm button clicked');
    var oneText = $('#1text').val();
    console.log(oneText);
    localStorage.setItem('1pm', oneText);
})

$('#2pm').on('click', function (){
    console.log('2pm button clicked');
    var twoText = $('#2text').val();
    console.log(twoText);
    localStorage.setItem('2pm', twoText);
})

$('#3pm').on('click', function (){
    console.log('3pm button clicked');
    var threeText = $('#3text').val();
    console.log(threeText);
    localStorage.setItem('3pm', threeText);
})

$('#4pm').on('click', function (){
    console.log('4pm button clicked');
    var fourText = $('#4text').val();
    console.log(fourText);
    localStorage.setItem('4pm', fourText);
})

$('#5pm').on('click', function (){
    console.log('5pm button clicked');
    var fiveText = $('#5text').val();
    console.log(fiveText);
    localStorage.setItem('5pm', fiveText);
})

//if else statement for conditional timing with colorblocks

//if the current time is less than 9am(for example), then change color class to past ELSE
//if current time is equal to or greater than, change color class to present ELSE
//if current time greater than 1 hour change color class to future

var current = moment().format('hh a');

var eightAm = moment("08 am", "hh a").format("hh a");
var nineAm = moment("09 am", "hh a").format("hh a");
var tenAm = moment("10 am", "hh a").format("hh a");
var elevenAm = moment("11 am", "hh a").format("hh a");
var twelvePm = moment("12 pm", "hh a").format("hh a");
var onePm = moment("01 pm", "hh a").format("hh a")
var twoPm = moment("02 pm", "hh a").format("hh a")
var threePm = moment("03 pm", "hh a").format("hh a")
var fourPm = moment("04 pm", "hh a").format("hh a")
var fivePm = moment("05 pm", "hh a").format("hh a")
var sixPm = moment("06 pm", "hh a").format("hh a")

var nineRow = $('#nineRow');

if (current < tenAm) {
    nineRow.attr('class', 'present');
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that

$(document).ready(function () {
  $('#currentDay').text(dayjs().format('dddd, MMM D, YYYY: hh:mm'));

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // click savebtn gets info and stores in local storage
  $('.saveBtn').on('click', function (){
    // (this) references the .saveBtn element.
    var time = $(this).parent().attr('id')
    var value = $(this).siblings('.description').val()
    localStorage.setItem(time, value)
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function timeCheck() {
    // sets the hour
    var currentHour = dayjs().hour()
    // each method specifies the function to run for each matched element
    $('.time-block').each(function () {
      // parseInt turns string into a number (integer). [1]
      var hourBlock = parseInt ($(this).attr('id').split("-")[1]) 
      if (hourBlock < currentHour) {
        $(this).addClass('past')
      } else if (hourBlock === currentHour) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  }
  timeCheck()
  setInterval(timeCheck, 15000)

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
 
 
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
  
 
});

$(document).ready(function () {
    var day = moment().format("dddd");
    console.log(day);

    $("#currentDay").html("<h2>" + day + "</h2>");
    console.log(moment().format("h a"));

    var timeBlocks = document.querySelectorAll(".time");
    var businessHours = [
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
    ];

    for (var i = 0; i < timeBlocks.length; i++) {
      // console.log(timeBlocks[i]);
      timeBlocks[i].textContent = businessHours[i];
    }

    var past = "red";
    var present = "green";
    var future = "yellow";

    var currentTime = moment().format("LT");
    var currentHour = Number(currentTime.split(":")[0]);
    var currentMin = currentTime.split(":")[1];
    currentMin = currentMin.replace(/[AMPM]/g, "");
    currentMin = Number(currentMin);
    var currentAmPm = currentTime.split(" ")[1];
    currentAmPm = currentAmPm.toLowerCase();
    console.log(currentAmPm)

    console.log(currentMin);
    console.log(currentHour);

    var tr = $(".table .time");
    console.log(tr);

    $.each(tr, function (i, val) {
      // console.log(val);
      var number = $(val).text();
      number = number.replace(/[ampm]/g, "");
      // number = number.replace(/pm/g,'') replace jq
      // console.log(number)
      number = number.split(":");
      console.log(number);

      var hour = Number(number[0]);
      var min = Number(number[1]);
      var ampm = $(val).text();

      switch(ampm){
        case '9am':
        case '10am':
        case '11am':
        case '12am':
          ampm = 'am';
          break;
        case '12pm':
        case '1pm':
        case '2pm':
        case '3pm':
        case '4pm':
        case '5pm':
          ampm = 'pm';
          break;
      }
      console.log(ampm);
      // console.log(hour, min);

      //for testing
      // currentHour = 10;
      // currentAmPm = 'pm'

      var input = $(val).next().find("input");

      if(ampm == 'am' && currentAmPm == 'am') {
        console.log('its morning');
        if(hour > currentHour){
          $(input).css('background', future);
        } else if(hour < currentHour){
          $(input).css('background', past);
        }
      } else if (ampm == 'pm' && currentAmPm == 'pm') {
        console.log('its PM');
        if(currentHour == 12) {
          // console.log('the hour is:');
          // console.log(hour);
          // console.log('the current hour is:');
          // console.log(currentHour);
          switch(hour){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
              $(input).css('background', future);
              break;      
            case 12:
              $(input).css('background', present);
              break;              
          }
        }
        else if(hour < currentHour) {
          $(input).css('background', past);
        }
        else if(hour > currentHour){
          $(input).css('background', future);
         if(hour == 12) {
          $(input).css('background', past);                   
          }
        }
        

      } else if (ampm == 'pm' && currentAmPm == 'am'){
        // console.log('it is morning');
        $(input).css("background", future);
      } else if (ampm == 'am' && currentAmPm == 'pm'){
        // console.log('it is afternoon');
        $(input).css("background", past);
      }


      // if (hour < currentHour) {
      //   console.log("yes it less than current hour");
      //   console.log(val);
      //   var input = $(val).next().find("input");
      //   console.log(input);
      //   $(input).css("background", past);
      // }
    });
    var tableElement = document.getElementsByClassName('table')[0].children[0].children;
    console.log('tableElement', tableElement);
    //enter and save event calendar 
    //grab all btns then create functions on click
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        switch (localStorage[i]) {
            // switch () {
            //     case '9am':
            //     case '10am':
            //     case '11am':
            //     case '12am':
            //     case '12pm':
            //     case '1pm':
            //     case '2pm':
            //     case '3pm':
            //     case '4pm':
            //     case '5pm':
        }}

    function saveInput (){
        console.log(this)

        var parentEl = this.parentElement;
        console.log(parentEl);

        var siblingEl = parentEl.previousElementSibling;
        console.log('sibling:', siblingEl);

        var siblingFirstEl = siblingEl.previousElementSibling;
        console.log('time', siblingFirstEl.innerHTML);

        var inputEl = siblingEl.firstElementChild;
        console.log('input', inputEl.value);

        localStorage.setItem(siblingFirstEl.innerHTML, inputEl.value);
    }

    var btns = document.querySelectorAll('button');
    // console.log(btns);
    for (let i = 0; i < btns.length; i++ ) {
        // function saveInput(el) {
        // console.log(el.value);
        btns[i].addEventListener("click", saveInput);
    }
    btns[i]
    
  });
  
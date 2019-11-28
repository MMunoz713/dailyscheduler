var currentDay = moment().format("MMMM Do YYYY, h:mm");
$("#currentDay").text(currentDay);
var hours = ["NineAM", "TenAM", "ElevenAM", "TwelvePM", "OnePM", "TwoPM", "ThreePM", "FourPM", "FivePM"];
var curTime = moment().format("H");

// Changes background color of time blocks depeneding on the hour.
$(".time").each(function (index, value) {
  console.log(index)

  var time = moment($(this).text(), "hA").format("H");
  if (time < 10) {
    time = "0" + time;
  }

  console.log(time);

  if (time < curTime) {
    $(this).css("backgroundColor", "darkgray");
  }
  else if (time > curTime) {
    $(this).css("backgroundColor", "limegreen");
  }
  else {
    $(this).css("backgroundColor", "red");
  }
})

// This function retrieves the values from the text input and saves it to its specified hour.
function store(hour) {
  var textFieldInput = document.getElementById("textField" + hour);
  localStorage.setItem(hour, textFieldInput.value);
  console.log("Stored value for: " + hour + " : " + textFieldInput.value);
}

// Loops through hours array to find stored values. This function gets called everytime the app runs.
function init() {
  for (i = 0; i < hours.length; i++) {
    var hour = hours[i];
    document.getElementById("textField" + hour).value = localStorage.getItem(hour);
  }

  console.log("App Initialized");
}

// Runs 'init' function
init();

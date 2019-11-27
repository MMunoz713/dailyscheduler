var currentDay = moment().format("MMMM Do YYYY, h:mm");
$("#currentDay").text(currentDay);


var curTime = moment().format("H");
$(".time").each(function(index, value){
  console.log(index)
 var time = moment($(this).text(),"hA").format("H");
 if (time < 10) {
   time = "0"+ time;
 }
 console.log(time)
 if(time < curTime)
 {
  $(this).css("backgroundColor","darkgray");
 }
 else if (time > curTime ){
  $(this).css("backgroundColor","limegreen");
 }
 else {
   $(this).css("backgroundColor","red")
 }
})


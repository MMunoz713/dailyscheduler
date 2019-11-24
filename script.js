var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentDay);

$(document).ready(function(){
    $('div.col-sm-2').css({
            'height':'200px',
            'width': '200px',
            'border-radius':'10px',
            'border-color':'pink',
            'border-width': '2em'});
});

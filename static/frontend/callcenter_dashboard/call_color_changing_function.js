/*function to change div row when call is selected*/

$(document).ready(function () {
  $(".queue_row").click(function() {
    $(".queue_row").removeClass("selected_call"); /* removes the "selected_call class from every other div but the current selected"*/ 
    $(this).addClass("selected_call");
    $(this).find(".queue_col5").text("answered"); /* changes text to answered when call is selected*/
    $("#account_info").text("poo");
}); 
});

$(document).ready(function () {
  $(".queue_row").dblclick(function() {
    $(".queue_row").removeClass("selected_call"); /* removes the "selected_call class from every other div but the current selected"*/ 
    $(this).addClass("selected_call");
    $(this).find(".queue_col5").text("on hold"); /* changes text to answered when call is selected*/
    $("#account_info").text("poo");
}); 
});



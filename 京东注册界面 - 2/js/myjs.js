$(document).ready(function($) {
    $("#research").mouseover(function(event) {
        $("#research").attr({
            src: 'img/dc1.png'
        });
    });
    $("#research").mouseout(function(event) {
        $("#research").attr({
            src: 'img/grey_build.png'
        });
    });
    $("#middle_left_items_click").click(function() {
        $("#middle_left_items_input").focus();
        // $("#middle_left_items_text").css("opacity", "0");
        $("#middle_left_items_text").hide();
        $("#middle_left_items_alert").css("opacity", "1");
    });
    $("#middle_left_items_input").blur(function() {
        // $("#middle_left_items_text").css("opacity", "1");
        $("#middle_left_items_text").show();
        $("#middle_left_items_alert").css("opacity", "0");
    });
});

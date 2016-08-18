$(document).ready(function($) {
    $("#lalala").mouseover(function(event) {
        $("#lalala").attr({
            src: 'img/dc1.png'
        });
    });
    $("#lalala").mouseout(function(event) {
        $("#lalala").attr({
            src: 'img/grey_build.png'
        });
    });
    $("#inp_one").focus(function() {
        $("#info_one").css("opacity", "1");
    });
    $("#inp_one").blur(function() {
        $("#info_one").css("opacity", "0");
    });
    $("#inp_two").focus(function() {
        $("#info_two").css("opacity", "1");
    });
    $("#inp_two").blur(function() {
        $("#info_two").css("opacity", "0");
    });
    $("#inp_three").focus(function() {
        $("#info_three").css("opacity", "1");
    });
    $("#inp_three").blur(function() {
        $("#info_three").css("opacity", "0");
    });
    $("#inp_four").focus(function() {
        $("#info_four").css("opacity", "1");
    });
    $("#inp_four").blur(function() {
        $("#info_four").css("opacity", "0");
    });
    $("#inp_five").focus(function() {
        $("#info_five").css("opacity", "1");
    });
    $("#inp_five").blur(function() {
        $("#info_five").css("opacity", "0");
    });
});

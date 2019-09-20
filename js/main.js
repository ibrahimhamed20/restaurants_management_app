/*global $, alert, console*/
console.log('hello from restaurants system!');
// toggle navbar side
$(document).ready(function () {
    $('.leftmenutrigger').on('click', function (e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
    });
});

$(function() {
    'use strict';
    $('.navbar-nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
})
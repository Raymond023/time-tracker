'use strict';

const weekly = $('.weekly');
const activity = $('.activity');
const daily = $('.daily');
const monthly = $('.monthly');
const list = $('li');


$(list[0]).click(function () {
    daily.addClass("selected");
    weekly.removeClass("selected");
    monthly.removeClass("selected");
});

$(list[1]).click(function () {
    daily.removeClass("selected");
    weekly.addClass("selected");
    monthly.removeClass("selected");
});

$(list[2]).click(function () {
    daily.removeClass("selected");
    weekly.removeClass("selected");
    monthly.addClass("selected");
});

list.click(function () {
    list.removeClass("active");
    $(this).addClass("active");
});

// hover effect

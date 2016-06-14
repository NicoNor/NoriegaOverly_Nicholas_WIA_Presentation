$(window).load(function(){


$(function() {
  'use strict';

  var options = {
    format: "y-m-d",
    placeholder: "Press here",
    lang: "eng",
    minYear: "2000",
    maxYear: "2020"
  };

  $('#fade').dateDropper($.extend({}, options, { animation: "fadeIn" }));
  $('#bounce').dateDropper($.extend({}, options, { animation: "bounce" }));
} ());


});

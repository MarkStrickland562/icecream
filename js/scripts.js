$(document).ready(function() {
  event.preventDefault();

  var things = ["Vanilla", "Chocolate", "Strawberry"];

  things.forEach(function(thing) {
    $('ul#list').prepend('<li>' + thing + '</li>');
  });
});

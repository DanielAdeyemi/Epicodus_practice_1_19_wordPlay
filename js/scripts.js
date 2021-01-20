$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let inputs = $(".input").val().split(" ");
    let nAr = [];
    inputs.forEach(function(input) {
      if (input.length > 2) {
        nAr.push(input);
      }
    });
    $(".output").text((nAr.reverse().join(" ")));
  });
});
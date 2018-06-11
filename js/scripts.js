//user interface
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputLocation = $("input#new-location").val();
    var inputHighlight = $("input#new-highlight").val();
    var inputFood = $("input#new-food").val();

    var newPlace = new Place(inputLocation, inputHighlight, inputFood);


    $("ul#placesVisited").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $(".place").last().click(function(){
      //alert();
      $("#show-place").show();
      $("#show-place h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".highlight").text(newPlace.highlight);
      $(".food").text(newPlace.food);
    });

    $("input#new-location").val("");
    $("input#new-highlight").val("");
    $("input#new-food").val("");
  });

});


//business logic
function Place (newLocation, newHighlight, newFood) {
  this.location = newLocation;
  this.highlight = newHighlight;
  this.food = newFood;
}

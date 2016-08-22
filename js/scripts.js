function Places(place, landmark, time) {
  this.placeBeen = place;
  this.landmarkSeen = landmark;
  this.timeWent = time;
}

$(document).ready(function (){
  $("form#places-been").submit(function(event){
    event.preventDefault();

    var inputPlace = $("input#new-place").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputTime = $("input#new-time").val();

    var newInputPlace = new Places(inputPlace, inputLandmark, inputTime);

    debugger;

    $("ul#placeInfo").append("<li><span class='contact'>" + newInputPlace.placeBeen + "</span></li>");
    $(".contact").last().click(function(){
      $("#show-info").show();
      $("#show-info h2").text(newInputPlace.placeBeen);
      $(".placeB").text(newInputPlace.placeBeen);
      $(".landmarkS").text(newInputPlace.landmarkSeen);
      $(".timeW").text(newInputPlace.timeWent);
    });

    $("input#new-place").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");

  });
});

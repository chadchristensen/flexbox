$(document).ready(function(){
  $("#toggle-direction").click(function(){
    var flexDirection = $("section").css("flex-direction");
    if (flexDirection === "row") {
      $("section").css("flex-direction", "column");
    } else {
      $("section").css("flex-direction", "row");
    }
  });

});

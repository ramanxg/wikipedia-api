$(document).ready(function() {
  $(".random").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random")
  })
  $("#search").on("click", searchArticles);
  $("#input").on("keypress", function(e){
    if (e.which == 13) {
        searchArticles()
    }
  });
});


function searchArticles() {
  var input = $("#input").val();
    if (input === "") {
      $("#result-title").html("Please enter an input.");
    } else {
      var corrected = encodeURIComponent(input);
      $("ul").html("");
      $("#result-title").html("Results for " + "\"" + input + "\"");
      $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + corrected + "&callback=?", function(json) {
        for (var i = 0; i < json[1].length; i++) {
          
          $("ul").append("<li><a href = \"" + json[3][i] + "\"><r>" + json[1][i] + "</r><br><p>" + json[2][i] + "</p></a></li>");
        }
      });
    }
}

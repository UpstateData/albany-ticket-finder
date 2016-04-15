// Components of API URL to look up parking violations.
var url_base = 'https://data.albanyny.gov/resource/474r-rd62.json?license_plate_number=[number]&$select=*';

// Method to make API call.
function requestJSON(url, callback) {
$.ajax({
  url: url,
  beforeSend: function() {
    clearContents();
    $(".working").show();
  },
  complete: function(xhr) {
     $(".working").hide();
    callback.call(null, xhr.responseJSON);
  }
});
}

// Clear the contents of the results section, about & search field.
function clearContents() {
  $("#results").empty();
  $(".about").hide();
  $("#plate").val('');
}

$(document).ready(function() {

  // Hide the lookup prompt & about section on page load.
  $('.working, .about').hide();

  // Handler for search button
  $("#search").click(function() {
    var searchText = $("#plate").val();
      if(searchText == "") {
        $(".form-control").addClass("error");
      }
      else {
        url = url_base.replace('[number]', searchText);
        requestJSON(url, function(json) {
          if(json.length == 0) {
            $("#results").append('<p class="info">No tickets found.</p>');
          }
          else {
            details = Handlebars.templates.details({ Details : json[0] });
            $("#results").append(details);  
          }
        });
      }
  });

  // User presses enter.
  $("#plate").keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $("#search").trigger('click');  
    }
  });

  // Handler for focus on text input field.
  $("#plate").focus(function(){
    $(this).removeClass("error");
  });

  // Show the about section.
  $("#about").click(function() {
    $('.about').show();
  });

});
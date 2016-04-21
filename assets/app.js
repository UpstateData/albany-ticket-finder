// Components of API URL to look up parking violations.
var url_base = 'https://data.albanyny.gov/resource/jryy-j5wq.json?license_plate_number=';

// Method to make API call.
function requestJSON(url, callback) {
$.ajax({
  url: url,
  beforeSend: function() {
    clearContents();
    $('.alert-warning').show();
  },
  complete: function(xhr) {
    $('.alert-warning').hide();
    callback.call(null, xhr.responseJSON);
  },
  error: function() {
    $('.alert-danger').show();
  }
});
}

// Clear the contents of the results section, about & search field.
function clearContents() {
  $('#results').empty();
  $('.alert, .about').hide();
  $('#plate').val('');
}

$(document).ready(function() {

  // Hide the lookup prompt & about section on page load.
  $('.alert, .about').hide();

  // Handler for search button
  $('#search').click(function() {
    var searchText = $('#plate').val();
      if(searchText == '') {
        $('.form-control').addClass('inputerror');
      }
      else {
        url = url_base + searchText;
        requestJSON(url, function(json) {
          if(json.length == 0) {
            $('.alert-success').show();
          }
          else {
            var details = Handlebars.templates.details({ Details : json });
            $('#results').append(details);  
          }
        });
      }
  });

  // User presses enter.
  $('#plate').keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      $('#search').trigger('click');  
    }
  });

  // Handler for focus on text input field.
  $('#plate').focus(function(){
    $(this).removeClass('inputerror');
  });

  // Show the about section.
  $('#about').click(function() {
    $('.about').show();
  });

});
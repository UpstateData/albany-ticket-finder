// Components of API URL to look up parking violations.
var url_base = 'https://data.albanyny.gov/resource/mjsm-pbzk.json?vehicle_plate_number=';

// Method to make API call.
function requestJSON(url, callback) {
$.ajax({
  url: url,
  beforeSend: function() {
    clearContents();
    $('.alert-warning').removeClass('hide');
  },
  complete: function(xhr) {
    $('.alert-warning').addClass('hide');
    if(xhr.status == 200) {
      callback.call(null, xhr.responseJSON);
    }
    else {
      $('.alert-danger').removeClass('hide');
    }
  },
  error: function() {
    $('.alert-danger').removeClass('hide');
  }
});
}

// Clear the contents of the results section, about & search field.
function clearContents() {
  $('#results').empty();
  $('.alert, .about').addClass('hide');
  $('#plate').val('');
}

$(document).ready(function() {

  // Handler for search button
  $('#search').click(function() {
    var searchText = $('#plate').val();
      if(searchText == '') {
        $('.form-control').addClass('inputerror');
      }
      else {
        url = url_base + searchText.toUpperCase();
        requestJSON(url, function(json) {
          if(json.length == 0) {
            $('.alert-success').removeClass('hide');
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
    $('.about').removeClass('hide');
  });

});

// Insert any API endpoint here to avoid hardcoding thre function
var endpoint = "https://eightballapi.com/api";

// Defines function that gets data from API
function getAPIData() {
  // Goes to API for data using AJAX
  $.ajax({
      // API endpoint
      url: endpoint,
      // GET request
      type: "GET",
      // data type we expect back
      dataType: "json",
  })
  // If the request succeeds
  // data is passed back
  .done(function(data) {
      console.log("Success:", data);
      var fortune = data.reading
      $("#output").text(fortune);

  })
  // If the request fails, throw error
  .fail(function(request,error) {
      console.log(request, error);
  });
}

// Event for when button is pressed, it will return API data
$("#activate").click(getAPIData);

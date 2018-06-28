// event listener for all button elements
    $("button").on("click", function() {
      // In this case, the "this" keyword refers to the button that clicked
      var tvShow = $(this).attr("data-person");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
       tvShow + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function(response) {
          //Storing an array of result sin the results variable
          var topics = response.data;
          // Looping over every result item
          for (var i = 0; i < topics.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = topics[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var tvImage = $("<img>");
            tvImage.attr("src", topics[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(tvImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });

    $(".item").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
    
  
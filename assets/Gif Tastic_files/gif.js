$(document).ready(function(){

  //var disneyMovies = ["The Little Mermaid", "Mulan", "The Lion King", "Aladdin", "Lady and the Tramp", "The Aristocats", "Bambi", "Chicken Little", "Pinocchio", "Brother Bear"];
  
  
  $('button').on('click', function() {

  // displayMovieInfo function re-renders the HTML to display the appropriate content
  //function displayMovieInfo() {

     // var movie = $(this).data('name');
      var movie = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=GxTep39gN0O08oxfAnKwNABsEqNH9UPO&limit=10";
          console.log(movie);
      $.ajax({
          url: queryURL,
          method: 'GET'
      }) //ajax   //.done
          .done(function(response) {


              console.log(response)

               // storing the data from the AJAX request in the results variable

              var results = response.data;

              for (var i = 0; i < results.length; i++) {

                  var movieDiv = $('<div/>');

                 // var p =$('<p/>').text("  This Movie is rated :  " + results[i].rating);

                                                                                                                                                                                                      
                  // Creating and storing an image tag
                  var movieImage = $('<img/>');

                  movieImage.addClass('anImg')

                  movieImage.attr('src', results[i].images.fixed_height.url);

                  movieImage.attr('data-still', results[i].images.fixed_height_still.url)

                  movieImage.attr('data-animate', results[i].images.fixed_height.url)

                 .attr('data-state', 'still');

                  movieDiv.append(p);

                  movieDiv.append(movieImage);

                  // Prependng the movieDiv to the HTML page in the "#gifs-appear-here" div
                 $("#gifs-appear-here").prepend(movieDiv);

                 var p =$('<p/>').text("  This Movie is rated :  " + results[i].rating);

                 //movieDiv.prependTo($('#gifs'));
              } //for

              $('.anImg').on('click', function() {
              
          
                  var state = $(this).attr('data-state'); 
                  console.log(this);

                  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                  // Then, set the image's data-state to animate
                  // Else set src to the data-still value

                  if (state === 'still') {

                  // $(this).attr("src", $(this).attr("data-animate"));

                  $(this).attr('src', $(this).data('animate'));
                  
                  $(this).attr('data-state', 'animate');

                  } else {

                 // $(this).attr("src", $(this).attr("data-still"));
                          
                  $(this).attr('src', $(this).data('still'));
                  
                  $(this).attr('data-state', 'still');
                  }   
                  
                  
                  
                  

              });//.animg
           
          });//response
  });//funtion

  var movies = [''];

  
      //This function "adds" the buttons 

      // handles the event when clicked
      $('#theButton').on('click', function(){
          var movieButton = $("#gif-input").val();
          //adds the new movie
          console.log(newButton);


          var newButton = $("<button/>").addClass( "btn btn-info movie").attr('data-name',movieButton).html(movieButton).css({'margin': '5px'});
          //(movieButton).css({'margin': '5px'}
          $("#moviesbuttons").append(newButton);
              console.log("Work");
              console.log(newButton);

              $('button').on('click', function() {


              



          queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieButton + "&api_key=GxTep39gN0O08oxfAnKwNABsEqNH9UPO&limit=10";
              console.log(movieButton);

          $.ajax({
          url: queryURL,
          method: 'GET'
          })

          .done(function(response) {

          var results = response.data;

              for (var i = 0; i < results.length; i++) {

                  var movieDiv = $('<div/>');

                  var p =$('<p/>');

                  p.text(results[i].rating);

                  var movieImage = $('<img/>');

                  movieImage.addClass('anImg')

                  movieImage.attr('src', results[i].images.fixed_height_still.url);

                  movieImage.attr('data-still', results[i].images.fixed_height_still.url)

                  movieImage.attr('data-animate', results[i].images.fixed_height.url)

                  .attr('data-state', 'still');

                  movieDiv.append(p);

                  movieDiv.append(movieImage);

                  movieDiv.prependTo($('#gifs'));
              }//for

              $('.anImg').on('click', function() {
          
                  var state = $(this).attr('data-state'); 
                  console.log(this);

                  if (state == 'still') {
                  
                  $(this).attr('src', $(this).data('animate'));
                  
                  $(this).attr('data-state', 'animate');

                  } else {
                          
                  $(this).attr('src', $(this).data('still'));
                  
                  $(this).attr('data-state', 'still');
                  }      
              });//.animg
          });//response
        })//button

          $("#gif-input").val("");
          return false;
      //})//button

    });//funtion



});//ready
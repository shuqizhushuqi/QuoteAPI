var url = "https://cors-everywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
var twitterUrl;
var authorUrl;

var getQuote = function(data) {
  $.getJSON(url, function(data) {
    //get quote text
    $("#quote").html(data.quoteText);
    //get quote author
    //if the author is nothing, become unknown
    //authorUrl for tweeter link
    if (data.quoteAuthor == "") {
      $("#author").html("Unknown");
      authorUrl = " -Unknown"
    } else {
      $("#author").html(data.quoteAuthor);
      authorUrl = " -" + data.quoteAuthor;
    }

    //fill twitter url
    //not using twitter widget because it only works with initial quote
    twitterUrl = "https://twitter.com/intent/tweet?text=" + JSON.stringify(data.quoteText) + authorUrl;

    //send url to href of twitter button
    $('a[href]').each(function() {
      $(this).attr('href', twitterUrl);
    });
  });
};

//get quote on click
$("#btnQuote").on("click", getQuote);

//get quote on pageload so there is one already on the page
$(document).ready(function() {
  getQuote();
})
// //
// scrolling header //
// //

var headerNav = $(".header");
var homepage = $(".homepage");
// Setting up the variables that speak to the classes in HTML


//listening to the window on scoll
$(window).scroll(function(){
	
	if ($(this).scrollTop() > 580){
//once the page has scrolled past 580px add this class name
		headerNav.addClass("header__scrolled");
	} else {
//if it is less than 580px remove this class name
		headerNav.removeClass("header__scrolled");
	}
});

// //
// twitter
// //

// setting up twitter api
$.ajax({
	url: 'http://bdw-api.herokuapp.com/api/v1/twitter/favs/acpislimitless',
	type: 'GET',
	dataType: 'jsonp'
}).done(function (data) {
		
        console.log(data);
//setting up the function that adds last 4 favorited tweets to page
     	function addTwitter(working){
			for (i = 0; i < data.length && i < 4; i++){
				//loop through data and pull these variables from it
				var tweet = data[i].text;
				var name = data[i].user.name;
				var handle = data[i].user.screen_name;
				var avatar = data[i].user.profile_image_url;
				var image = data[i].entities.urls.url;
				
//adding the code for these variables to go
				$('<img />',{src: avatar}).appendTo('.twitter__feed').addClass('twitter__avatar');
				$('<div>'+'<h2>'+name+'</h2>'+' '+'<p>'+'@'+handle+'</p>'+'<p>' +tweet+'</p>'+'</div>').appendTo('.twitter__feed').addClass('twitter__content');

				console.log('working');
			}
		}

        addTwitter();
}).fail(function(data){
//setting up a message for it to read if the api fails
		$('<h2>Twitter feed not currently available!  Try again. </h2>').appendTo('.twitter__feed').addClass('twitter__fail');
});


// //
// smoothScroll
// //

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
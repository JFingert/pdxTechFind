
$(function () {

	var current = "home"; 
	//Current nav
	$('.navlink').mousedown(function(e){

		$('.navlink.clickedNav').removeClass('clickedNav'); //iterates through all such elements automagically
		$(this).addClass('clickedNav');

	});



	//keep track of current page
	$('.item').mousedown(function(c){
		var $self = $(this);

		if ($self.hasClass('homeview')){
			current = "home";
		} else if ($self.hasClass('groupsview')){
			current = "groups";
		} else if ($self.hasClass('eventsview')){
			current = "events";
		};

	});






	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// $('.toggle').mousedown(function(z){
	// 	console.log("YEAAAAAAAH")
	// });

	//GROUP DETAIL VIEW ANIMATION
	$('.group').mousedown(function(m){

		if ( $(m.target).hasClass('toggle') ) {
			
			var $self = $(this);
			var speed = 1250;
			var offset = {x : $self.offset().left, y : $self.offset().top};
			var size = '300px';
			var $win = $(window).width();
			//console.log(m.pageX + " " + m.pageY); //position of mouse when mousedown called
			
			if($self.hasClass('detailed')){
				minimize();
			} else {
				maximize();
			};


			function maximize() {
				var $win = $(window).width();
				var more = '300px';
				if($win <= 350 && $win > 340){
					more = '350px'
				}else if($win <= 340 && $win > 320){
					more = '400px'
				}else if($win <= 320 && $win > 300){
					more = '500px'
				}else if($win <= 300){
					more = '600px'
				};

				readyAnimation();

				$('.group').not($self).addClass('hide');
				$('.grouptext').hide();
				$('.extendedtext').css({display : 'block'});
				$('.grouptitle').css({'text-align' : 'center'})
				$self.animate({'width' : '100%', 'height' : '+=' + more}, {left: 'offset.x' + 'px', top: 'offset.y' + 'px'}, speed);

				function readyAnimation () {
					$self.css({display : 'block'});
					$self.css({'-webkit-box-sizing' : 'border-box', '-moz-box-sizing' : 'border-box', 'box-sizing' : 'border-box'});
					$self.css({margin : '0px'});
				};
				$self.addClass('detailed');
			};

		
			function minimize () {
				resetAnimation();

				$('.grouptext').show();
				$('.extendedtext').css({display : ''});
				$('.grouptitle').css({'text-align' : ''});

				if($win > 380){
					$self.animate({'width' : size, 'height' : ''}, speed);
				} else if($win <= 380 && $win > 360) {
					$self.animate({'width' : '335px', 'height' : ''}, speed);
				} else if($win <= 360 && $win > 350){
					$self.animate({'width' : '325px', 'height' : ''}, speed);
				} else if($win <= 350 && $win > 340){
					$self.animate({'width' : '315px', 'height' : ''}, speed);
				} else if($win <= 340 && $win > 320){
					$self.animate({'width' : '300px', 'height' : ''}, speed);
				} else if($win <= 320 && $win > 300){
					$self.animate({'width' : '275px', 'height' : ''}, speed);
				} else if($win <= 300 && $win > 275){
					$self.animate({'width' : '250px', 'height' : ''}, speed);
				} else if($win <= 275 && $win > 250){
					$self.animate({'width' : '225px', 'height' : ''}, speed);
				} else if($win <= 250){
					$self.animate({'width' : '200px', 'height' : ''}, speed);
				};

				function resetAnimation () {
					//$self.css({display : ''}); //Empty quotes resets the CSS value to what it was originally (in the CSS file)
					$self.css({'-webkit-box-sizing' : '', '-moz-box-sizing' : '', 'box-sizing' : ''});
					$self.css({margin : ''});
				};

				$self.removeClass('detailed');
				$self.css({display : ''});
				$self.promise().done(show);
			};


			function show () {
				$('.group').removeClass('hide');
			};

		};
		

	});
	//END MOUSEDOWN




	$(window).resize(function() {
		if(current == "groups"){
			verifySize();
		};
	});


	function verifySize() {
			var $win = $(window).width();
			if( !$('.group').hasClass('detailed') ){ //if doesnt have detailed
				if($win > 380){
					$('.group').css({'width' : '300px'});
				} else if($win <= 380 && $win > 360) {
					$('.group').css({'width' : '335px'});
				} else if($win <= 360 && $win > 350){
					$('.group').css({'width' : '325px'});
				} else if($win <= 350 && $win > 340){
					$('.group').css({'width' : '315px'});
				} else if($win <= 340 && $win > 320){
					$('.group').css({'width' : '300px'});
				} else if($win <= 320 && $win > 300){
					$('.group').css({'width' : '275px'});
				} else if($win <= 300 && $win > 275){
					$('.group').css({'width' : '250px'});
				} else if($win <= 275 && $win > 250){
					$('.group').css({'width' : '225px'});
				} else if($win <= 250){
					$('.group').css({'width' : '200px'});
				};
			};
	};






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	// //Click on the group square
	// $('.group').mousedown(function(e) {
	// 	/* Act on the event */
	// 	document.location.href="detail.html";
	// 	e.stopPropagation(); //prevents parents of this element from being notified of mousedown
	// });

	// //Click elsewhere
	// $(document).mousedown(function (e) {
 //        if($('.detailbg').length > 0){ //checks if the page has the css class detailbg (i.e, if you're on the detail.html page) and if so, run the code
 //        	document.location.href = "index.html";
 //        	e.stopPropagation();
 //        };
 //    });
 //    $('.detailwhite').mousedown(function (e) {
 //        e.stopPropagation();
 //    });

 //    //Positioning of navbar
 //    var y = 0;
 //    function scrollFunction() {
 //    	var y = window.pageYOffset;
 //    	if(y > 280){ //checks if the vertical scroll is greater than 280px from top (the length of portland.png)
 //    		$('.navbar').css({top : '0px', position : 'fixed'})
 //    	} else {
 //    		$('.navbar').css({top : '280px', position : 'absolute'});
 //    		};
 //    };
 //    window.onscroll=scrollFunction;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //See drawResize function for group view widths of time and description
// 	var beginstack = 1000;

// 	   	function drawResize() {
// 	    	var win = $(window).width(); //this = window
// 	    	var cutoff = 1500;
// 	    	var percent = 0;
// 	    	//widths
// 	    	var descript = 75
// 	    	var funct = 25

// 	    	if(win > beginstack){
// 	    		console.log("yep");
// 	    		codifyHeight();
// 	    	};

// 	    	//if window size is between cutoff and stacking
// 	    	if(win < cutoff && win > beginstack){
// 	    		resetInline();
// 	    		for(var i = ((cutoff - win) / 50); i > 0; --i){
// 			    	++percent;
// 			    	$('.eventdescription').css({width : descript - percent + '%'});
// 					$('.function').css({width : funct + percent + '%'});
// 			    };
// 	    	//if window is greater than cutoff (aka widescreen)
// 			} else if(win > cutoff){
// 				resetInline();
// 				$('.eventdescription').css({width : descript + '%'});
// 				$('.function').css({width : funct + percent + '%'});
// 			//if window is in stacking mode (aka small screen)
// 			} else {
// 				$('.eventdescription').css({display : 'block', width : '100%'});
// 				$('.function').css({display : 'block', width : '100%'});
// 			};
// 		};

// 		function resetInline () {
// 			$('.eventdescription').css({display : 'inline-block'});
// 			$('.function').css({display : 'inline-block'});
// 		};

// 		function codifyHeight() {
// 			if( $('.eventdescription').height() != $('.function').height() ){

// 				if( $('.eventdescription').height() > $('.function').height() ){
// 					var dif = $('.eventdescription').height() - $('.function').height(); 
// 					$('.function').css({height : '+=' + dif});
// 				} else if( $('.eventdescription').height() < $('.function').height() ){
// 					var dif = $('.function').height() - $('.eventdescription').height();
// 					$('.function').css({height : '-=' + dif});
// 				};
// 			};
// 		};

//    $(window).bind('resize', drawResize);
//    drawResize();
//    codifyHeight();












})
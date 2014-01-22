
$(function () {


	//Current nav
	$('.navlink').mousedown(function(e){

		$('.navlink.clickedNav').removeClass('clickedNav'); //iterates through all such elements automagically
		$(this).addClass('clickedNav');

	});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	
	//Re-arrange navbar based on currently selected
	//note: this needs to be worked on so 'home' is always on far left when not selected
	// $('li').mousedown(function(e){

	// 	$('li').addClass('flanking');
	// 	$(this).removeClass('flanking');

	// 	var $parent = $(this).parent();
    	
 //    	// var $first = $('ul li:eq(0)');
 //    	// var $last = $('ul li:eq(2)');
 //    	// var $middle = $('ul li:eq(1)');
    		


	// 	// if ($(this).index() === 0) {
 //  //       	$(this).next().prependTo($parent);
 //  //   	} else if ($(this).index() === 2) {
 //  //       	$(this).prev().appendTo($parent);
 //  //   	}

 //  		//console.log( $('ul li:eq(0)').text() );

 //    	if( $(this).index() === 0 ){
 //    		$(this).next().prependTo($parent);


 //    		// if( $('ul li:eq(0)').text() != 'Home' && $('ul li:eq(2)').text() == 'Home' ){
 //    		// 	$last.prependTo($parent);
 //    		// 	$middle.prev().appendTo($parent);
 //    		// };

 //    	} else if ($(this).index() === 2) {
 //    		$(this).prev().appendTo($parent);

 //    		// if( $('ul li:eq(0)').text() != 'Home' && $('ul li:eq(2)').text() == 'Home' ){

 //    		// 	$last.prependTo($parent);
 //    		// 	$middle.prev().appendTo($parent);

 //    		// };

 //    	}
 //        	// if( $text == 'Home' ){
 //        	// 	console.log("home was clicked");
 //        	// }
 //        	// console.log($first);
 //        	// console.log($last);
	// });

	
	
	// $('li').mousedown(function(event) {


	// 	var $first = $('ul li:eq(0)');
	// 	var $middle = $('ul li:eq(1)');
	// 	var $last = $('ul li:eq(2)');


		



	// });

	
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




	//Click on the group square
	$('.group').mousedown(function(e) {
		/* Act on the event */
		document.location.href="detail.html";
		e.stopPropagation(); //prevents parents of this element from being notified of mousedown
	});

	//Click elsewhere
	$(document).mousedown(function (e) {
        if($('.detailbg').length > 0){ //checks if the page has the css class detailbg (i.e, if you're on the detail.html page) and if so, run the code
        	document.location.href = "index.html";
        	e.stopPropagation();
        };
    });
    $('.detailwhite').mousedown(function (e) {
        e.stopPropagation();
    });

    //Positioning of navbar
    var y = 0;
    function scrollFunction() {
    	var y = window.pageYOffset;
    	if(y > 280){ //checks if the vertical scroll is greater than 280px from top (the length of portland.png)
    		$('.navbar').css({top : '0px', position : 'fixed'})
    	} else {
    		$('.navbar').css({top : '280px', position : 'absolute'});
    		};
    };
    window.onscroll=scrollFunction;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//See drawResize function for group view widths of time and description
	var beginstack = 1000;

	   	function drawResize() {
	    	var win = $(window).width(); //this = window
	    	var cutoff = 1500;
	    	var percent = 0;
	    	//widths
	    	var descript = 75
	    	var funct = 25

	    	if(win > beginstack){
	    		console.log("yep");
	    		codifyHeight();
	    	};

	    	//if window size is between cutoff and stacking
	    	if(win < cutoff && win > beginstack){
	    		resetInline();
	    		for(var i = ((cutoff - win) / 50); i > 0; --i){
			    	++percent;
			    	$('.eventdescription').css({width : descript - percent + '%'});
					$('.function').css({width : funct + percent + '%'});
			    };
	    	//if window is greater than cutoff (aka widescreen)
			} else if(win > cutoff){
				resetInline();
				$('.eventdescription').css({width : descript + '%'});
				$('.function').css({width : funct + percent + '%'});
			//if window is in stacking mode (aka small screen)
			} else {
				$('.eventdescription').css({display : 'block', width : '100%'});
				$('.function').css({display : 'block', width : '100%'});
			};
		};

		function resetInline () {
			$('.eventdescription').css({display : 'inline-block'});
			$('.function').css({display : 'inline-block'});
		};

		function codifyHeight() {
			if( $('.eventdescription').height() != $('.function').height() ){

				if( $('.eventdescription').height() > $('.function').height() ){
					var dif = $('.eventdescription').height() - $('.function').height(); 
					$('.function').css({height : '+=' + dif});
				} else if( $('.eventdescription').height() < $('.function').height() ){
					var dif = $('.function').height() - $('.eventdescription').height();
					$('.function').css({height : '-=' + dif});
				};
			};
		};

   $(window).bind('resize', drawResize);
   drawResize();
   codifyHeight();












})
//Global JS File//
//window size//
var windowW = window.innerWidth;
var windowH = window.innerHeight;
//breakpoints detection/
var xsmall = 320;
var small = 414;
var medium = 768;
var mediumLarge = 992;
var large = 1024;
var xlarge = 1280;

var hasTouch = 'ontouchstart' in window;
    END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
    MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
    CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';

(function( $ ) {
	$(document).ready(function(){
	    $(".addBtn").click(function(){
	        $("<div class='row travel-points-row'><div class='col-sm-5'><select id='airline_carriers'><option value='?????''>Alaska Airlines – Mileage Plan</option><option value='?????'>American Airlines – AAdvantage</option><option value='?????''>Delta Air Lines – SkyMiles</option><option value='?????''>Frontier Airlines – EarlyReturns</option><option value='?????''>Hawaiian Airlines – HawaiianMiles</option><option value='?????'>JetBlue Airways – TrueBlue</option><option value='?????'>Southwest Airlines – Rapid Rewards</option><option value='?????'>Spirit Airlines – FREE SPIRIT</option><option value='?????'>United Airlines – MileagePlus</option><option value='?????'>Virgin America – eleVAte</option></select></div><div class='col-sm-5'><input type='text' name='airlinePoints' class='airline-points' autocomplete='off' placeholder='XXXXXXXXXXXXX'></div><div class='col-sm-2'><div class='removeBtn'></div></div></div>").appendTo('.points');
	    }); 
	});
})(jQuery);


//Global JS File//

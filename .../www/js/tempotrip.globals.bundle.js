(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Search Site files//
var gobal = require('./src/global.js');
var nav = require('./src/global-navigation.js');
var hero = require('./src/hero-carousel.js');
var search= require('./src/search.js');
var sidebar = require ('./src/sidebar.js');
var sidebar = require ('./src/form-slider.js');
},{"./src/form-slider.js":2,"./src/global-navigation.js":3,"./src/global.js":4,"./src/hero-carousel.js":5,"./src/search.js":6,"./src/sidebar.js":7}],2:[function(require,module,exports){
(function( $ ) {
    $( document ).ready(function(e) {
        // start doc ready          
        var myScroll;
        var hasTouch = 'ontouchstart' in window,
            END_EV = hasTouch ? 'touchend' : 'click'; 
    });
})(jQuery);

var hasTouch = 'ontouchstart' in window;
        END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
    var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
        CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';


     


},{}],3:[function(require,module,exports){
//Global Navigation JS File//


//Global Navigation JS File//

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
//Hero Carousel JS File//


//Hero Carousel JS File//





},{}],6:[function(require,module,exports){


},{}],7:[function(require,module,exports){
//Sidebar Comment//

},{}]},{},[1]);

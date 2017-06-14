(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//Search Site files//
var gobal = require('./src/global.js');
var nav = require('./src/global-navigation.js');
var hero = require('./src/hero-carousel.js');
var search= require('./src/search.js');
var sidebar = require ('./src/sidebar.js');
},{"./src/global-navigation.js":2,"./src/global.js":3,"./src/hero-carousel.js":4,"./src/search.js":5,"./src/sidebar.js":6}],2:[function(require,module,exports){
//Global Navigation JS File//
var searchBtn = document.getElementById('search-btn');
var searchCloseBtn = document.getElementById('search-close-btn');
var mobileSearchBtn = document.getElementById('mobile-search-btn');

var clickCount =0;  
var clickSearchCount =0;

var homePage = document.getElementById('search-results');
var searchResults = document.getElementById('home-page');
var liverDisease = document.getElementById('liver-disease');
var liverDiseaseResearch = document.getElementById('liver-disease-research');

function clearSubNav(){
	$("#therapies-sub-nav").removeClass('open');
	$("#research-sub-nav").removeClass('open');
	$("#responsibility-sub-nav").removeClass('open');
	$("#newsroom-sub-nav").removeClass('open');
	$("#about-sub-nav").removeClass('open');
	$("header").removeClass('open');
	$(".desktop-nav").removeClass('open');
  //$('#desktop-search-btn, #mobile-search-btn').removeClass('active');
	
}
//Button Functions//
function resetSearch(){
  $(".search-nav-container").removeClass('in');
  $('#desktop-search-btn, #mobile-search-btn').removeClass('active');
  $(".modal-backdrop").removeClass('in');
  clickSearchCount = 0;
  console.log(clickSearchCount);
}
$(document).on(END_EV, '.navbar-toggle', function(e){
    resetSearch();
});

$(document).on(END_EV, "#desktop-search-btn, #mobile-search-btn", function(e){
      clearSubNav();
      $('.navbar-collapse').collapse('hide');
      $('#desktop-search-btn, #mobile-search-btn').toggleClass('active');
      
});
//Hover functions//
$(document).on(END_EV, '#therapies-btn', function(e){
      clearSubNav();
      $("#therapies-sub-nav").addClass('open');
      $("header").addClass('open');
});
$(document).on(END_EV, '#research-btn', function(e){
      clearSubNav();
      $("#research-sub-nav").addClass('open');
      $("header").addClass('open');
});
$(document).on(END_EV, '#responsibility-btn', function(e){
      clearSubNav();
      $("#responsibility-sub-nav").addClass('open');
      $("header").addClass('open');
});
$(document).on(END_EV, '#newsroom-btn', function(e){
      clearSubNav();
     $("#newsroom-sub-nav").addClass('open');
      $("header").addClass('open');
});
$(document).on(END_EV, '#about-btn', function(e){
      clearSubNav();
    $("#about-sub-nav").addClass('open');
      $("header").addClass('open');
});

$('header').on( "mouseleave", function( event ) {
  clearSubNav();
});

$(document).on(END_EV, '#search-close-btn', function(e){
    clearSubNav();
    resetSearch();
});

//Global Navigation JS File//

},{}],3:[function(require,module,exports){
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

var video =  document.getElementById('video')   

$( document ).ready(function() {
    windowDetect(); 
    imagePath();
    checkPage();
});

function windowDetect(){
  if (windowW <= small){
    $('body').addClass('phone w=414');
      var myScroll = new IScroll('#navbar', {
        mouseWheel: true,
        scrollbars: true
      });
  }
  else if ((windowW < mediumLarge) && (windowW > small)){
    $('body').addClass('tablet w=768');
      var myScroll = new IScroll('#navbar', {
        mouseWheel: true,
        scrollbars: true
      });
  }
  else if ((windowW < large) && (windowW > medium)){
    $('body').addClass('tablet w=992');
      var myScroll = new IScroll('#navbar', {
        mouseWheel: true,
        scrollbars: true
      });
  }
  else if ((windowW < xlarge) && (windowW > medium)){
    $('body').addClass('tablet w=1024');
  }
  else if (windowW >= xlarge){
    $('body').addClass('desktop w=1280+');
  }
}
function checkPage(){
  if($('#home-page').length){
  }
  else{
    $('body').addClass("secondary-page");
  }
}

function imagePath(){
  if (windowW <= small){
    $('#myCarousel .item img').each(function(){
      var $this = $(this);
      $this.attr('src',$this.attr('src').replace('desktop','mobile'))
    })
    
  }
  else if ((windowW <= medium) && (windowW > small)){
    $('#myCarousel .item img').each(function(){
      var $this = $(this);
      $this.attr('src',$this.attr('src').replace('desktop','tablet'))
    })
   
  }
  else if (windowW >= large){
    $('#myCarousel .item img').each(function(){
      var $this = $(this);
      $this.attr('src',$this.attr('src').replace('desktop','desktop'))
    })
   
  }

}

//Window Scroll//
$(window).scroll(function () {
    var $this = $(this),
        $head = $('#head');
    if ($this.scrollTop() > 20) {
        $( ".top-nav, .nav" ).addClass('scroll');
    } else if($this.scrollTop() < 20){
       $( ".top-nav, .nav" ).removeClass('scroll');
    }
});
$(window).resize(function(){
    windowDetect(); 
    imagePath();
    checkPage();
})
//Global JS File//

},{}],4:[function(require,module,exports){
//Hero Carousel JS File//


//Hero Carousel JS File//





},{}],5:[function(require,module,exports){


},{}],6:[function(require,module,exports){
//Sidebar Comment//

},{}]},{},[1]);

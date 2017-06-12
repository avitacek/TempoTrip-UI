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

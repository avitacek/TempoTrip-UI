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

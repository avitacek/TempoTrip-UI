(function( $ ) {
    $( document ).ready(function(e) {
        // start doc ready          
        var myScroll;
        var hasTouch = 'ontouchstart' in window,
            END_EV = hasTouch ? 'touchend' : 'click'; 
    });
})(jQuery);

var mySCroll;
var w = $(window).width();
var length = $('#scroller').children('div').length;
var slideW = $(".slide").width()
var hasTouch = 'ontouchstart' in window;
                END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
                MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
    var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
        CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';

$(document).ready(function(){
    $lastPage= $('.slider:first-child');
    initListeners();
    initVariables();
});


(function() {
    function load() {
        $('.slide').css('width', w -80 + 'px');
        $('#scroller').css('width', w * length + 'px');
        myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true, snap: true });
    }
    
    window.addEventListener('load', load, false);
    
})();
function setIScroll(){
    myScroll = new IScroll('#wrapper', { scrollX: true, scrollY: false, mouseWheel: true, snap: true });
}
function initListeners()
{
    $("#btn1").on(END_EV, function (e) {
        mySCroll.goToPage(1,0, 0);
    }); 
    $("#btn2").on(END_EV, function (e) {
        mySCroll.goToPage(2,0, 0);
    });
    $("#btn3").on(END_EV, function (e) {
        mySCroll.goToPage(3,0, 0);
    });
    $("#btn4").on(END_EV, function (e) {
        mySCroll.goToPage(4,0, 0);
    });
    $("#btn5").on(END_EV, function (e) {
        mySCroll.goToPage(5,0, 0);
    });

}  
function initVariables(){
    var hasTouch = 'ontouchstart' in window;
        END_EV = hasTouch ? 'touchend' : 'click'; //public so no new "var"
        MOVE_EV = hasTouch ? 'touchmove' : 'mousemove'; // read mousemove isnt the same as touchmove
        
    var START_EV = hasTouch ? 'touchstart' : 'mousedown', 
        // but....it's the best solution I have
        CANCEL_EV = hasTouch ? 'touchcancel' : 'touchcancel';
}      

function onScrollEndCustom($currPage, $lastPage){
    if($('#slide-1').hasClass('active')){
        resetAllNavs();
        $('.btn1').addClass('active');  
    }
    if($('#slide-2').hasClass('active')){
        resetAllNavs()
        $('.btn2').addClass('active');
    }
    if($('#slide-3').hasClass('active')){
        resetAllNavs();
        $('.btn3').addClass('active');
    }
    if($(' #slide-4').hasClass('active')){
        resetAllNavs();
        $('.btn4').addClass('active');
    }
    if($(' #slide-5').hasClass('active')){
        resetAllNavs();
        $('.btn5').addClass('active');
    }
    

}

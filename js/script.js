$(document).ready(function(){

    /* Aside submenu dropdown */

    var a= false;
    $('.aside-menu>ul>li').click(function(){
        var menuIcon =  $(this).find('i');
         
        $(this).find('ul').slideToggle();
 
        menuIcon.css('-webkit-transform','rotate('+(!a)*180+'deg)');
         a = !a;
    });

    /* Aside bar animation for mobile and laptop */

    $(".menu-icon").click(function () {
        $('aside').toggleClass('aside-closed')
    });

      /* Close menu onBlur on tablets and phones */
    $('main').click(function(){
        var windowW = $(window).width();
        if(windowW < 1024){
            $('aside').addClass('aside-closed');
        }
       
    });
   


});
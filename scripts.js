$(document).ready(function() {  
   
    //Get current year
    $('#year').html(new Date().getFullYear());

    //Open Mobile Menu
    $('.mobile-menu.trigger').click(function () {
        $('.mobile-menu.nav, .mobile-menu.close').addClass('expanded');
        $(this).addClass('hide');
    });
    
    //Close Mobile Menu
    $('.mobile-menu.close').click(function () {
        $('.mobile-menu.nav, .mobile-menu.close').removeClass('expanded');
        $('.mobile-menu.trigger').removeClass('hide');
    });
    
    //Sticky Header
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

});  
$(document).ready(function(){
    
    $('.view-details').click(function(){
       
        if($(this).hasClass('active-view')){
            $(this).removeClass('active-view');
            $(this).parents('.pool-title').next('.pool-description').slideUp('fast');
            $(this).text('More details');
            
        }else{
            $(this).addClass('active-view');
            $(this).parents('.pool-title').next('.pool-description').slideDown('fast');
            $(this).text('Close');
        }
    });
    
    $('.user-profile .user-btn,.notification .noti').focus(function(){
        $(this).next('ul').fadeIn('fast');
    });
    $('.user-profile .user-btn,.notification .noti').focusout(function(){
        $(this).next('ul').fadeOut('fast');
    });
    
    
});

    $('.pool-title').click(function(){
        var width = $('body').innerWidth();
        if(width < 1020){
            $(this).next('.pool-description').slideToggle('fast');
            $(this).toggleClass('grey-bg');
        }
        $('.pool-list ul li .pool-title button').click(function(e){e.stopPropagation();});
    });
       
   


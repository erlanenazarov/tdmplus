/**
 * Created by Erlan on 28.08.2016.
 */

$(document).ready(function() {

    $('a.nav-bar-element[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 800);
        return false;
    });

    $(window).scroll(function () {
        var windowScroll = $(window).scrollTop; //Получаем величину, показывающую на сколько прокручено окно

        $('a.nav-bar-element[href^="#"]').each(function() {
            var el = $(this).attr('href');

            if(windowScroll == $(el).offset().top) {
                $('li', this).addClass('active');
            } else {
                $('le', this).removeClass('active');
            }
        });
    });

});

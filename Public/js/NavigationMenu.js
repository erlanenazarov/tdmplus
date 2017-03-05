/**
 * Created by Erlan on 28.08.2016.
 */

$(document).ready(function() {
    var isScrollingByTap = false;
    $('a.nav-bar-element[href^="#"]').click(function(){
        isScrollingByTap = true;
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top
        }, 800, function() {
            isScrollingByTap = false;
        });
        reactivateNavigationBar(el);
        return false;
    });

    function reactivateNavigationBar(target) {
        $('a.nav-bar-element[href^="#"]').each(function(i, obj) {
            if($(obj).attr('href') === target) {
                if(!$(obj).find('li').hasClass('active'))
                    $(obj).find('li').addClass('active');
            } else {
                if($(obj).find('li').hasClass('active'))
                    $(obj).find('li').removeClass('active');
            }
        });
    }

    $(window).scroll(function () {
        if(!isScrollingByTap) {
            $('a.nav-bar-element[href^="#"]').each(function (i, obj) {
                $(obj).find('li').removeClass('active');
            });
        }
    });

});

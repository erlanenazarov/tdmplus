/**
 * Created by Эрлан on 05.08.2016.
 */
$(document).ready(function() {
    $(".init-slider").each(function() {
        var repeats = 1,
            interval = 8,
            repeat = true,
            slider = $(this),
            repeatCount = 0,
            elements = $(slider).find("li").length,
            pagination = $('.team-slider-pagination');

        $("ul li", this).on('hover', function() {
            repeat = false;
            console.log('Mouse hover on');
        }, function() {
           repeat = true;
            console.log('Mouse hover off');
        });

        if (repeat) {
            repeat = setInterval(function() {
                var index = $(pagination).find('.active').data("slide"),
                    nextIndex = index + 1 < elements ? index + 1 : 0;

                sliderJS(nextIndex, slider, pagination);
            }, interval * 1000);
        }

    });
});

function sliderJS(index, slider, pagination) { // slide
    var ul = $(slider).find("ul"),
        bl = $(slider).find("li[data-slide=" + index + "]"),
        step = $(bl).width();

    $(pagination)
        .find("li").removeClass("active")
        .end()
        .find("li[data-slide=" + index + "]").addClass("active");

    $(ul).animate({
        marginLeft: "-" + step * index
    }, 500);
}

$(document).on("click", ".team-slider-pagination ul li", function(e) { // slider click navigate
    e.preventDefault();
    var slider = $('.init-slider'),
        index = $(this).data("slide");

    sliderJS(index, slider, '.team-slider-pagination');
});
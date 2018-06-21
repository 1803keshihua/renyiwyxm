// jQuery(window).load(function () {
//     "use strict";
//     jQuery("#status").fadeOut();
//     jQuery("#preloader").delay(350).fadeOut("slow");
// });


$(document).ready(function(){
    // one page
    $.fn.single = function(options) {
        var opts = $.extend({}, $.fn.single.defaults, options);
        return this.each(function(){
            var element = $(this);
            changeCSS(element);
            changeIMG(opts);
            $(window).bind("resize", function(){
                changeCSS(element);
                changeIMG(opts);
            });
            $("[data-link]").bind("click", function(event){
                event.preventDefault();
                goToSection(this, opts);
            });
        });
    };

    // function to resize all the "data-target" divs
    function changeCSS(element) {
        var windowWidth 	= "100%";
        var windowHeight	= "auto";
        var targetsSize		= $("[data-target]").size();
        $(element).css({
            "width" : windowWidth,
            "height": windowHeight
        });
        $(element).children("div[data-target]").each(function(){
            $(this).css({
                "width" : windowWidth,
                "height": windowHeight
            });
        });
    }


    // function to scroll the page to a section
    function goToSection(link, opts) {
        var goingTo 		= $(link).attr('data-link'); // get the data-link value
        var targetPosition 	= $('[data-target="'+goingTo+'"]').position().top; // get the position of the target
        $("html, body").animate({
            scrollTop: targetPosition
        }, {
            duration: opts.speed,
            easing: opts.animation
        });
    }

    // function to check the resolution and return the prefix for the image
    function checkResolution(windowWidth, opts) {
        if (windowWidth <= 480) {
            return opts.sufixes.smallest;
        }
        if(windowWidth > 480 && windowWidth <= 767) {
            return opts.sufixes.small;
        }
        if(windowWidth > 767 && windowWidth <= 979) {
            return opts.sufixes.medium;
        }
        if(windowWidth > 979) {
            return opts.sufixes.normal;
        }
    }
});
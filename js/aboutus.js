$('#About_Media_tabs li').click(function () {
    var index = $(this).index()
    $(this).addClass('current').siblings().removeClass('current').parent().next().find('li').eq(index).css('display','block').siblings().css('display','none')
})


$(window).scroll(function(){
    var window_top = $(window).scrollTop();

    if (window_top > 30) {
        $('.us_nav').addClass('fixed_menu')

    } else {
        $('.us_nav').removeClass('fixed_menu');
    }
});
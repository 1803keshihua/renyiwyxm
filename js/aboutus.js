var index = 0
function changeLi() {
    $('#About_Media_tabs li').eq(index).addClass('current').siblings().removeClass('current');
    $('#About_Media_output li').eq(index).css('display','block').siblings().css('display','none')
}
function autoCha() {
    index++
    if(index>1){
        index=0
    }
    changeLi()
}
var timer = window.setInterval(autoCha,1500);

$('.About_Media_list').mouseenter(function () {
    clearInterval(timer);
    $('#About_Media_tabs li').click(function () {
        var index1 = $(this).index()
        $(this).addClass('current').siblings().removeClass('current').parent().next().find('li').eq(index1).css('display','block').siblings().css('display','none')
    })
})
$('.About_Media_list').mouseleave(function () {
    clearInterval(timer);
    timer = window.setInterval(autoCha,1500);
})


$(window).scroll(function(){
    var window_top = $(window).scrollTop();

    if (window_top > 30) {
        $('.us_nav').addClass('fixed_menu')

    } else {
        $('.us_nav').removeClass('fixed_menu');
    }
});
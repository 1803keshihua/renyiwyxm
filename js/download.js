// $('a,.btn,.btn-default').on({
//     'mouseover':addC,
//     'mouseout':removeC
// });
// function addC(){
//     $(this).addClass('active')
//     $(this).find('img').css('display','block')
// }
// function removeC(){
//     $(this).removeClass('active')
//     $(this).find('img').css('display','none')
// }
// $(window).scroll(function(){
//     if($(window).scrollTop() > 800){
//         $('.apps_header').addClass('nav_fixed')
//     }else{
//         $('.apps_header').removeClass('nav_fixed')
//     }
//     console.log(123);
//     console.log($(window).scrollTop());
// })
$('.apps_template_feature_tab ul li a').click(function(e){
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active')
})

// fixed menu
$(window).scroll(function(){
    var slider_height = $(window).innerHeight();

    var window_top = $(window).scrollTop() + 1;
    var div_top = $('#nav-anchor').offset().top + slider_height;
    if (window_top > div_top) {
        $('.apps_header').addClass('fixed_menu');
    } else {
        $('.apps_header').removeClass('fixed_menu');
    }
});
// 楼梯
var flag=0;
$("#apps_menu_id ul li").click(function(e){
    flag=1;
    e.preventDefault();
    var index = $(this).index();
    var top = $('.section').eq(index).offset().top;
    $('html,body').animate({scrollTop:top},1000,function () {
        flag = 0 ;
    });
    $(this).addClass('active').siblings().removeClass('active')
});

$(window).scroll(function(){
    if(flag == 0){
        var top = $(window).scrollTop();
        $('.section').each(function (index) {
            if(top>=$(this).offset().top - 50){
                $('#apps_menu_id ul li').removeClass('active');
                $('#apps_menu_id ul li').eq(index).addClass('active')
                // $('#menu li').eq(index).find('a').addClass('current').parent().siblings().find('a').removeClass('current')
            }
        })
    }
});


//图片文件夹
if ($.fn.mixitup) {
    $('#grid').mixitup( {
        filterSelector: '.filter-item'
    });
    $(".filter-item").click(function(e) {
        e.preventDefault();
        var to_which=$(this).attr('data-filter');
        $('.'+to_which+'_fb').attr('data-fancybox-group',to_which);
    })
}


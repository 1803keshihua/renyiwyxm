// 导航栏 开始
$(window).scroll(function(){
    console.log($(this).scrollTop());
    if($(this).scrollTop()>=90){
        $('#cnav #cnav-move').slideDown(1000);
        $('#cnav #cnav-first').css('display','none');
    }else{
        $('#cnav #cnav-first').slideDown(1000);
        $('#cnav #cnav-move').stop(true,true).css('display','none');
    }
        if ($(this).scrollTop()>=190) {
            setTimeout(function () {
                $('#ctj-con-left').addClass('slideInUp');
            },0)
            setTimeout(function () {
                $('#ctj-con-center').addClass('slideInUp');
            },200)
            setTimeout(function () {
                $('#ctj-con-right').addClass('slideInUp');
            },400)

        }
})
// 导航栏 结束
// 轮播 开始
$(function(){
    var count = 0;
    var $li = $("#slider>ul>li");
    function changeImg(){
        count++;
        if(count == $li.length){
            count =0;
        }
        $li.eq(count).fadeIn().siblings().fadeOut();
        $(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
        console.log(count);
    }

    var timer=setInterval(changeImg,3000);
    $('#slider').hover(function () {
        clearInterval(timer);
    },function () {
        timer=setInterval(changeImg,3000);
        }
    );
    $(".next").click(changeImg);

    $(".prve").click(function(){
        count--;
        if(count == -1){
            count = $li.length-1;
        }
        console.log(count);
        $li.eq(count).fadeIn().siblings().fadeOut();
        $(".slider_icon i").eq(count).addClass("btn_act").siblings().removeClass('btn_act');
    });
    $(".slider_icon i").mouseenter(function(){
        $(this).addClass('btn_act').siblings().removeClass("btn_act");
        $li.eq($(this).index()).fadeIn().siblings().fadeOut();
        count = $(this).index();
    });
});
// 轮播 结束
//
// 今日推荐 开始
$('#ctj-con-left').hover(function () {
    $(this).css({'box-shadow':'5px 5px 5px #ccc','margin':'85px 0 '})
},function () {
    $(this).css({'box-shadow':'none','margin':'90px 0'})
})
$('#ctj-con-center').hover(function () {
    $(this).css({'box-shadow':'5px 5px 5px #ccc','margin':'85px 30px  '})
},function () {
    $(this).css({'box-shadow':'none','margin':'90px 30px'})
})
// 今日推荐 结束
//
// 设计师介绍 开始

$('.main-one').click(function (e) {
e.preventDefault();
    var div=$('<div class="fuceng"></div>');
    $(this).parent().append(div);
    var index = $(this).index() + 1;
    // console.log(index);
    $(div).css({
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,0.5) url("../img/detail'+index+'.png") no-repeat center',
        position:'absolute',
        top:0,
        left:0,
        zIndex:'999'
    })

})
$('#cmain-wrap-con').mouseleave(function () {
        $('.fuceng').remove();
    }
)

// 设计师介绍 结束

// 底部 开始
// 底部 结束
// 侧边栏 开始
$('#ccebian-get').click(function () {
    $('html,body').animate({scrollTop:1150},1000);
    $(this).css({'background':'#00243c','border-radius':'10px','color':'#fff'});

});
$('#ccebian-get').mouseleave(function () {
    $(this).css({'background':'#fff','border-radius':'0','color':'#000'});
})
$('#ccebian-backTop').click(function () {
    $('html,body').animate({scrollTop:0},1000);
    $(this).css({'border-radius':'10px'});

})
$('#ccebian-backTop').mouseleave(function () {
    $(this).css({'border-radius':'0'});
})

// 侧边栏 结束

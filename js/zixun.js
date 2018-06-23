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

});
$('.adBtn').click(function () {
    $(this).find('img').attr('src','../image/cmc/news_adedIcon1.png');
    $(this).find('span').text('638');
})
// 导航栏 结束
// 内容 开始

// 内容 结束
//     更多 开始
    $('.bds_more').hover(function () {
        // $('.bdshare_popup_box').animate({opacity:1},1000);
        $('.adisplay').show();
        $('.adisplay').hover(function () {
            // $(this).animate({opacity:1},0);
            $(this).show();
        },function () {
            // $(this).animate({opacity:0},0);
            $(this).hide();
        });
        $('.bdshare_popup_list').find('li').hover(function(){
            $(this).css('background','#eee');
        },function () {
            $('.bdshare_popup_list').find('li').css('background','#fff');
        });
    },function () {
        // $('.bdshare_popup_box').animate({opacity:0},0);
        $('.adisplay').hide();
    });
    $('.bds_more').click(function () {
        $('.bdisplay').show().css({'position':'fixed','left':'45%','top':'35%'});
    });
$('.bdshare_popup_top').find('span').click(function () {
    $('.bdisplay').hide();
})

//     更多 结束

// 顶部菜单
$("#nav1 li:not(:nth-child(1)) ").mouseenter(function () {
    $(this).children().eq(0).animate({left:"3px",opacity:1})

     $(this).children().eq(2).animate({left:"32px",opacity:1})

    }
)
$("#nav1 li:not(:nth-child(1)) ").mouseleave(function () {
        $(this).children().eq(0).animate({left:"32px",opacity:0});

        $(this).children().eq(2).animate({left:"3px",opacity:0});

    }
)
//轮播
hua(1)
var index=1
var time=setInterval(function () {
    index++;
    if(index>3){
        index=1
    }
    hua(index)
},8000)
    var border=1
    $(".bodya1").click(function () {
        if(border){
            $(this).css("border","solid #a5c7fe 1px")
            border=0
        }else {
            $(this).css("border","1px solid white")
            border=1
        }

    })

$(".bodya_ul li").click(function () {
     index=$(this).index()+1;

    hua(index)

})

function hua(index) {
    $("#bodya .bodya1").attr({style:"z-index:-10"});
    $("#bodya .bodya1  .text").removeClass("animated2 fadeInUp");
    $("#bodya .bodya1  img").removeClass("animated1 zoomIn");
    $("#bodya .bodya1  .bodya_div").removeClass("animated2 rotateInDownRight");
    $(".bodya_ul li").removeClass("bodya_li");
    $("#bodya .bodya1:nth-child("+index+") img").addClass("animated1 zoomIn");

    setTimeout(function () {
        $("#bodya .bodya1:nth-child("+index+") .bodya_div").addClass("animated2 rotateInDownRight")
    },600)

    setTimeout(function () {
        $("#bodya .bodya1:nth-child("+index+") .text").addClass("animated2 fadeInUp")
    },2000)
    $("#bodya .bodya1:nth-child("+index+")").attr({style:"z-index: 10;"});
    $(".bodya_ul li:nth-child("+index+")").addClass("bodya_li")
};


//图1
$("#bodyb").css("opacity","0");
$("#bodyc").css("opacity","0");
$("#bodyd").css("opacity","0");
$("#bodye").css("opacity","0");
$("#bodyf").css("opacity","0");
$("#bodyg").css("opacity","0");
$("#bodyh").css("opacity","0");
$("#bodyi").css("opacity","0");
$(window).scroll(function(){
    var s=$(window).scrollTop();
    console.log(s);
    //图1
    if(s>400&&s<=1300){
        $("#bodyb1").addClass("animated fadeInLeft");
        $("#bodyb2").addClass("animated fadeInRight");
        $("#bodyb3").addClass("animated fadeInUp");
        setTimeout(function () {
            $("#bodyb").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>1300&&s<=1900){
        $("#bodyc1").addClass("animated fadeInUp ");
        $("#bodyc2").addClass("animated fadeInRight");

        setTimeout(function () {
            $("#bodyc").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>1900&&s<=2500){
        $("#bodyd1").addClass("animated fadeInLeft ");
        setTimeout(function () {
            $("#bodyd").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>2500&&s<=3400){
        $("#bodye1").addClass("animated fadeInUp ");
        $("#bodye2").addClass("animated fadeInLeft ");
        setTimeout(function () {
            $("#bodye").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>3400&&s<=4200){
        $("#bodyf1").addClass("animated fadeInLeft ");
        $("#bodyf2").addClass("animated fadeInUp ");
        setTimeout(function () {
            $("#bodyf").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>4200&&s<=5000){
        $("#bodyg1").addClass("animated  fadeInUp");
        $("#bodyg2").addClass("animated fadeInRight ");
        setTimeout(function () {
            $("#bodyg").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>5000&&s<=5800){
        $("#bodyh1").addClass("animated fadeInLeft ");
        $("#bodyh2").addClass("animated fadeInUp ");
        $("#bodyh3").addClass("animated1_2 fadeInUp ");
        $("#bodyh4").addClass("animated1_4 fadeInUp ");
        setTimeout(function () {
            $("#bodyh").animate({opacity:"1"},1000)
        },200)
    }
    else if(s>5800){
        $("#bodyi1").addClass("animated fadeInUp ");
        $("#bodyi2").addClass("animated1_2  fadeInUp ");
        $("#bodyi3").addClass("animated1_4 fadeInUp ");
        $("#bodyi4").addClass("animated1_6 fadeInUp ");
        $("#bodyi5").addClass("animated1_8 fadeInUp ");
        setTimeout(function () {
            $("#bodyi").animate({opacity:"1"},800)
        },200)
        var t3 =setInterval(function () {
            var sum = parseInt($("#bodyi4 span").html()) ;
            sum++;
            if(sum>=5000){
                clearInterval(t3)
            }
            $("#bodyi4 span").html(sum)
        },10)
        var t4 =setInterval(function () {
            var sum = parseInt($("#bodyi5 span").html()) ;
            sum++;
            if(sum>=1000){
                clearInterval(t4)
            }
            $("#bodyi5 span").html(sum)
        },10)
    }
})
//图2滑动
    img2(0);
    $("#bodyc .box").click(function () {
        var num =$(this).index();
        img2(num)
    })
function img2(num) {
    $("#bodyc .box").css("display","block");
    $("#bodyc .image img").css("display","none");
    $("#bodyc .text-box").css("display","none");

    $("#bodyc .image img").eq(num).css("display","block");
    $("#bodyc .text-box").eq(num).css("display","block");
    $("#bodyc .box").eq(num).css("display","none");
}
//图3点击
//图片放大
$(".da").click(function () {
  var w=$(window).width()
    var h=$(window).height()

    $(this).next().css(
        {"width":""+w+"px","height":""+h+"px", "display":"block"}
        )
    $(this).next().next().css({"display":"block","left":""+(w/3)+"px"})
})
//图片缩小
$(".da1").click(function () {
    $(this).css(
        {"display":"none"}
    )
    $(this).next().css({"display":"none"})
})
//圈变颜色
$(".icons li").mouseover(function () {
    $(this).css({"border": "#1b6d85 solid 1px"})
})
$(".icons li").mouseout(function () {
    $(this).css({"border": "#e3e3e4 solid 1px"})
})
//显示小框
$(".bodyd_1").mouseenter(function () {
    $(".c2").slideUp(100)
    $(this).find(".c2").slideToggle()

})
$(".bodyd_1").mouseleave(function () {
    $(".c2").slideUp(100)
})

//点击图片变少
$("#filter li").click(function () {
    $("#filter li a").css("color","#eee")
    $(this).find("a").css("color","#3c5ce8")
    if($(this).index()){
        $("#bodyd .txt-frame").animate({height:"280px"},300)
        $(".bodyd_right").animate({top:"40px"},10);
        $(".bodyd_1").hide(300);
        $(".a"+$(this).index()+"").show(300)
    }else{
        $(".bodyd_1").hide(200);
        $("#bodyd .txt-frame").animate({height:"566px"},300);
        $(".bodyd_1").show(300);
        $(".bodyd_right").animate({top:"0"},10);
    }
})

//图4点击
imgf(0);
function imgf(f) {
    $(".bodyf_zhong1 li").hide();
    $(".bodyf_right img").hide();

    $(".bodyf_right img").eq(f).show();
    $(".bodyf_zhong1 li").eq(f).show();

}
$(".bodyf_zhong2 li").click(function () {
    var f = $(this).index();
    $(".bodyf_zhong2 li img").css({"box-shadow": "0 0 20px rgba(0,0,0,0.2)"});
    $(this).find("img").css({"box-shadow": "0 0 20px rgba(0,0,0,0.8)"});
    imgf(f);
});

//结尾无缝滚动
var ke=$("#foot2_1").clone(true);
$("#foot2").append(ke);
var s1= setInterval(gun,10);

function gun() {
    var top=$("#foot2").scrollTop();
    top++;
     if(top>790){
        top=0
    }else if(top%395==0){
        clearInterval(s1);

        setTimeout(function(){
             s1= setInterval(gun,10);
        },1000)
    }
    $("#foot2").scrollTop(top);

}

//表单验证

$(".input1").focus(function () {
    $(".p1").html("请输入字母或汉字")
});
$(".input1").blur(function () {
    var zheng =/^[A-Za-z\u4e00-\u9fa5]+$/
    if(zheng.test($(this).html())){
        $(".p1").html("")
    }else{
        $(".p1").html("输入不正确")
    }
    $("#foot3_1").animate({height:"500px"},100)
})

$(".input2").focus(function () {
    $(".p2").html("请输入11位的电话号码")
});
$(".input2").blur(function () {
    var zheng =/^1[\d]{10}$/
    if(zheng.test($(this).html())){
        $(".p2").html("")
    }else{
        $(".p2").html("输入不正确")
    }
    $("#foot3_1").animate({height:"500px"},100)
})


$(".input3").focus(function () {
    $(".p3").html("请输入字母或汉字")
});
$(".input3").blur(function () {
    var zheng =/^[A-Za-z\u4e00-\u9fa5]+$/
    if(zheng.test($(this).html())){
        $(".p3").html("")
    }else{
        $(".p3").html("输入不正确")
    }
    $("#foot3_1").animate({height:"500px"},100)
})



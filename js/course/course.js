/*******moveNav变化、键入渐出部分********/
(function(){
    var flag=false;
    $("#moveNav").hide();
    $("#moveNav li").click(function(e){
        flag=true;
        e.preventDefault();
        var index=$(this).index();
        var wTop=$(".myList").eq(index).offset().top;
        $("html,body").stop().animate({scrollTop:wTop},2000,function(){
            flag=false;
        });
        $("#moveNav>li>a").removeClass("moveNavHover");
        $("#moveNav li").eq(index).find("a").addClass("moveNavHover")
    })

    $(window).scroll(function(){
        if(flag==false){
            var top=parseInt($(".myNav").css("height"));
            var sTop=parseInt($("#bannert").css("height"))+top-100;
            if($(this).scrollTop()>sTop){
                $("#moveNav").slideDown();
            } else{
                $("#moveNav").slideUp();
            }
            var wTop=$(this).scrollTop();
            $(".myList").each(function(index){
                if(wTop>$(this).offset().top-10){
                    $("#moveNav>li>a").removeClass("moveNavHover");
                    $("#moveNav li").eq(index).find("a").addClass("moveNavHover")
                }
            })
        }
    });

    /*$("#navN li").click(function(e){
        e.preventDefault();
        var index=$(this).index();
        var wTop=$(".myList").eq(index).offset().top;
        $("html,body").stop().animate({scrollTop:wTop},1000);
    })*/

})();

/***********轮播部分*************/
(function(){
    var timer;
    var index=$(".bannerPart").index();

    timer=setInterval(moverBanner,5000);

    function moverBanner(){
        index++;
        $(".bannerPart").eq(index).show().siblings().hide();
        if(index==2){
            index=-1;
        }
    }

    $("#bannert").mouseover(function(){
        $(".arrowBody").show();
        clearInterval(timer);
    })

    $("#bannert").mouseout(function(){
        $(".arrowBody").hide();
        timer=setInterval(moverBanner,5000);
    })

    $(".leftArrow").click(function(){
        index--;
        if(index==-1){
            index=2;
        }
        $(".bannerPart").eq(index).show().siblings().hide();
    })
    $(".rightArrow").click(moverBanner);
})();

/**************用户体验设计***************/
(function(){
    $(".RyEdu_one_main_left").mouseenter(function(){
            $(this).css("transform"," rotateX(360deg)");
    })

    $(".RyEdu_one_main_left").mouseleave(function(){
        $(this).css("transform"," rotateX(0deg)");
    })
})();

/**************课程培训体系***************/
(function(){
    $(".uiTab").mouseenter(function(){
    var index=$(this).index();
    $(this).addClass("tabHover").siblings().removeClass("tabHover");
    $(".tabPageBody").addClass("tabHide");
    $(".tabPageBody").eq(index).removeClass("tabHide");
    })
    $(".tpt_tab").mouseenter(function(){
        var count=$(this).index();
        $(this).addClass("tpt_tabHover").siblings().removeClass("tpt_tabHover");
        $(this).parent().siblings().addClass("tabHide");
        $(this).parent().parent().children().eq(count+1).removeClass("tabHide");
    })
})();

/*********工作机会图片************/
(function(){
    var count=0;
    setInterval(function(){
        if(count%2==0){
            $(".rtm_view").eq(0).css("display","block");
            $(".rtm_view").eq(1).css("display","none");
        } else{
            $(".rtm_view").eq(0).css("display","none");
            $(".rtm_view").eq(1).css("display","block");
        }
        count++;
    },2000)
})();

//Adobe认证
(function(){
    $(".RyEdu_Five_left_mainTab li").mouseenter(function(){
        var index=$(this).index();
        $(this).addClass("li1");
        $(this).siblings().removeClass("li1");
        $(".RyEdu_Five_left_main_p1").hide();
        $(".RyEdu_Five_left_main_p1").eq(index).show();
    });
    var count=0;
    setInterval(function(){
        if(count%2==0){
            $(".RyEdu_Five_right img").eq(0).css("display","block");
            $(".RyEdu_Five_right img").eq(1).css("display","none");
        } else{
            $(".RyEdu_Five_right img").eq(0).css("display","none");
            $(".RyEdu_Five_right img").eq(1).css("display","block");
        }
        count++;
    },2000)
})();

//倒计时
(function(){
    function GetRTime(){
        var EndTime= new Date('2018/06/29 00:00:00');
        var NowTime = new Date();
        var t =EndTime.getTime() - NowTime.getTime();
        var d=numBer(parseInt(t/1000/60/60/24));
        var h=numBer(parseInt(t/1000/60/60%24));
        var m=numBer(parseInt(t/1000/60%60));
        var s=numBer(parseInt(t/1000%60));

        if(m<0){
            m=59;
        }
        if(h<0){
            m=23;
        }
        if(t<0){
            t=d=h=m=s=0;
        }
        function numBer(number){
            if(number<10){
                number="0"+number
            }
            return number;
        }

        document.getElementById("t_d").innerHTML = d;
        document.getElementById("t_h").innerHTML = h;
        document.getElementById("t_m").innerHTML = m;
        document.getElementById("t_s").innerHTML = s;
    }
    setInterval(GetRTime,0);
})();

//教学环境
(function(){
    $(".picPartBox").mouseenter(function(){
        $(this).find("div").stop().fadeIn(800);
    })
    $(".picPartBox").mouseleave(function(){
        $(this).find("div").stop().fadeOut(800);
    })
})();

//返回顶部
(function(){
    $(window).scroll(function(){
        var top=$(this).scrollTop();
        if(top>1000){
            $("#returnHead").show();
        } else{
            $("#returnHead").hide();
        }
    })
    $("#returnHead").click(function(){
        var timer;
        timer=setInterval(fnMove,10);
        function fnMove(){
            var top= $(window).scrollTop();
            top-=50;
            $(window).scrollTop(top);
            if(top<0){
                clearInterval(timer);
            }
        }


    })
})();
/****************返回头部****************/
(function(){
    $(window).scroll(function(){
        var top=$(this).scrollTop();
        if(top>1000){
            $("#returnHead").show();
        } else{
            $("#returnHead").hide();
        }
    })
    $("#returnHeader").click(function(){
        var timer;
        timer=setInterval(fnMove,10);
        function fnMove(){
            var top= $(window).scrollTop();
            top-=50;
            $(window).scrollTop(top);
            if(top<0){
                clearInterval(timer);
            }
        }
    })
})()
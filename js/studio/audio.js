/*************鼠标滚动条跳转功能******************/
$(window).scroll(function(e){
     e.preventDefault();
     e.stopPropagation();
     var Top=$(window).scrollTop();
     if(Top>0){
         $(".j-nav").css("position","fixed");
         $(".j-nav-popup").stop().slideUp();
         $(".nav-popup-bg").stop().slideUp();
         }
 });
/*************网页楼层跳转功能******************/
 {
     /*************导航楼层跳转功能******************/
     var flag=1;
     $(".navbar-nav li").click(function(e) {
         flag=0;
         e.preventDefault();
         var index=$(this).index();
         var scrollTop=$(".j-item").eq(index).offset().top;
         $("html,body").stop().animate({scrollTop},2000,function(){
             flag=1;
         });
         $(this).find('a').addClass("current").parent().siblings().find("a").removeClass("current");
     });

     /*************下拉菜单楼层跳转功能******************/
     $(".j-nav-popup li").click(function(e) {

         $(".j-nav").css("position","fixed");
         $(".j-nav-popup").css("display","none");
         $(".nav-popup-bg").css("display","none");
         flag=0;
         e.preventDefault();
         var index=$(this).index();
         var scrollTop=$(".j-item").eq(index).offset().top;
         $("html,body").stop().animate({scrollTop},2000,function(){
             flag=1;
         });
         $(".navbar-nav li").find("a").removeClass("current");
         $(".navbar-nav li").eq(index).find("a").addClass("current");
         $(this).find('a').addClass("current").parent().siblings().find("a").removeClass("current");
     });

     $(window).scroll(function(){
         if(flag){
             var scrollTop=$(window).scrollTop();
             $(".j-item").each(function(index,ele){
                 if(scrollTop>=$(this).offset().top){
                     $(".navbar-nav li").find("a").removeClass("current");
                     $(".navbar-nav li").eq(index).find("a").addClass("current");
                 }
             });
         }
     });
 }

 /*************导航栏的点击下拉效果******************/
  $(".j-button").click(function () {
    $(".j-nav-popup").slideToggle("slow","linear");
    $(".nav-popup-bg").fadeToggle("slow","linear");
});
  $(".j-nav-popup ul li a").mouseenter(function () {
    var i=$("<i>_________</i>");
        $(this).append(i);
    $(this).mouseleave(function () {
        $("i").remove();
    });
});

 /*************巨幕下的小圆圈动画******************/
  $(".j-ring").mouseenter(function () {
      var Div=$("<div class='j-hover'></div>");
    $(this).append(Div);
  $(this).css("background","rgba(255,255,255,0.9)").find("span").css("color","black");
   $(this).mouseleave(function () {
     $(this).css("background","none").find("span").css("color","white");
       $(".j-hover").remove()
   })

});

 /*************第二页的动画******************/

   $(".j-bgk").each(function (i) {
       $(this).find(".j-img").css(
           {"background":"url('../image/studio/icon_item_"+(i+1)+".png')no-repeat center center",
               "marginTop":"20px"
           });
       $(this).mouseover(function () {
        $(this).css("background","url('../image/studio/bd"+i+".jpg') no-repeat center center", "backgroundSize", "cover" );
        $(this).find(".j-img").css(
            {"background":"url('../image/studio/icon-"+i+".png')no-repeat center center",
                "marginTop":"20px"
            });
        $(this).mouseleave(function () {
            $(this).css("background","url('../image/studio/bd00"+i+".jpg') no-repeat center center", "backgroundSize", "cover");
            $(this).find(".j-img").css(
                {"background":"url('../image/studio/icon_item_"+(i+1)+".png')no-repeat center center",
                    "marginTop":"20px"
                });

        })
    });
       fn();
   });
 /***********************第二页动画效果函数**************************/
      function fn() {
          $(".j-image").hover(function () {
                  $(this).find(".j-rgb").fadeIn("slow");
                  $(this).find(".j-title").css("color","white");
                  $(this).find(".j-brand").css("color","#bfbabb")
              },function(){
                  $(this).find(".j-rgb").fadeOut("slow");
                  $(this).find(".j-title").css("color","black");
                  $(this).find(".j-brand").css("color","black")

              }
          );
      }
 $(".j-three-body li").mouseenter(function(){
     var index=$(this).index()+1;
     var passway="../image/studio/icon_advantage_0"+index+".png";
     $(this).find("img").attr("src",passway).addClass("animated zoomIn");
 });
 $(".j-three-body li").mouseleave(function(){
     $(this).find("img").attr("src","../image/studio/icon_hive.png").removeClass("animated zoomIn");
 });
 /***********************解决方案动画效果**************************/
 $("#msg-11").focus(function () {
     $(this).text("");
     $(this).blur(function () {
         if($(this).text()==""){
             $(this).text("想说点什么呢？")

         }
     });

 });
 /***********************了解MAXLAB**************************/
 $(".about ul li").each(function (i) {
     $(this).mouseenter(function () {
         $(this).css("background","url('../image/studio/0-"+i+".jpg') no-repeat center center", "backgroundSize", "cover");

         $(this).mouseleave(function () {
             $(this).css("background","url('../image/studio/"+i+".jpg') no-repeat center center", "backgroundSize", "cover");
         })
     });
 });

 /***********************鼠标图标动画效果**************************/
 (function(){
     var bot=parseInt($(".arrow").css("bottom"));
     var timer;
     timer=setInterval(function(){
         bot--;
         $(".arrow").css("bottom",bot+"px");
         if(bot<-15){
             bot=-10;
         }
     },200)
 })();










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
  $(".j-ring").mouseenter(function () {
    var Div=$("<div class='j-hover'></div>");
    $(this).append(Div);
  $(this).css("background","white").find("span").css("color","black");
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
    })

       fn();

   });
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














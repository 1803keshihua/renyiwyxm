$(".j-button").click(function () {
    $(".j-nav-popup").slideToggle("slow","linear");
    $(".nav-popup-bg").fadeToggle("slow","linear");
});
var timer=$(".j-nav-popup ul li a").mouseenter(function () {
    var i=$("<i>_________</i>");
        $(this).append(i);
    $(this).mouseleave(function () {
        $("i").remove();
    });
});




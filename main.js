
$(".open-popup").click(function () {
    $(".offcanvas-backdrop").fadeOut(100)
    $(".menu-nav").fadeOut(100)
});

$(".close-popup").click(function(){
    $(".offcanvas-backdrop").fadeIn(100)
    $(".menu-nav").fadeIn(100)
});

$(".open-popup2").click(function () {
    $(".offcanvas-backdrop").fadeOut(100)
    $(".menu-nav").fadeOut(100)
});

$(".close-popup2").click(function(){
    $(".offcanvas-backdrop").fadeIn(100)
    $(".menu-nav").fadeIn(100)
});

$(".open-popup").click(function () {
    $(".popup-bg").fadeIn(200)
    $(".popup-bg2").fadeOut(100)
    $(".button-nav").fadeOut(100)
    $(".icons").fadeOut(100)
});
$(".close-popup").click(function () {
    $(".popup-bg").fadeOut(100);
    $(".button-nav").fadeIn(100)
    $(".icons").fadeIn(100)
});


$(".open-popup2").click(function () {
    $(".popup-bg2").fadeIn(200);
    $(".popup-bg").fadeOut(100)
    $(".button-nav").fadeOut(100)
    $(".icons").fadeOut(100)
})
$(".close-popup2").click(function () {
    $(".popup-bg2").fadeOut(100);
    $(".button-nav").fadeIn(100)
    $(".icons").fadeIn(100)
});

$(".reg").click(function () {
    $(".popup-bg2").fadeIn(200)
    $(".popup-bg").fadeOut(100)

})
$(".close-popup2").click(function () {
    $(".popup-bg2").fadeOut(100);
});


$(".logi").click(function () {
    $(".popup-bg").fadeIn(200)
    $(".popup-bg2").fadeOut(100)
})
$(".close-popup").click(function () {
    $(".popup-bg").fadeOut(100);
});
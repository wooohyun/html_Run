$(function () {


    var createNum = 0;


    $('.main_slider').on('init afterChange', function (e, s, c) {
        $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
        $('.num').css({ backgroundPositionY: -100 * createNum + "px", });
        $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');
        createNum++;
    })

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        autoplayspeed: 4000,
    });


    $('.custom_dots a').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx);
        $('.num').css({ backgroundPositionY: -100 * idx + "px" });
    });


    $('.custom i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });

    $('.custom i:nth-child(4)').on('click', function () {
        $('.main_slider').slick('slickNext');
    });

    $('.custom i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickPause');
    });

    $('.custom i:nth-child(3)').on('click', function () {
        $('.main_slider').slick('slickPlay');
    });













})


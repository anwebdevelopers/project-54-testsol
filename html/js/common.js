$(function() {

    'use strict';

    /*******************************************************/
    //Выпадающий список меню
    /*******************************************************/

    $('.header__menu li').hover(
        function() { $(this).addClass('active'); },
        function() { $(this).removeClass('active'); }
    );

    /*******************************************************/
    //Search
    /*******************************************************/
    $('.header__button-search').click(function() {
        $(this).toggleClass('active');
        $('.header__search').toggleClass('active');
    });

    /*******************************************************/
    //Mobile menu
    /*******************************************************/
    var $headerButtonMenu = $('.header__button-menu'),
        $headerBox = $('.header__box');
    $headerButtonMenu.click(function(e) {
        e.stopPropagation();
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
            $headerBox.slideDown(300).css('display','flex');
            // $headerBox.css({
            //     'transform': 'translateY(200%)'
            // });
        } else {
            $this.removeClass('active');
            $headerBox.slideUp(300)//.css('display','none');
            // $headerBox.css({
            //     'transform': 'translateY(100%)'
            // });
        }
    });

    //Выключение при клике по странице
    $(document).on('click', function(e) {
        e.stopPropagation();
        if (!$(e.target).closest($headerBox).length) {
            $headerButtonMenu.removeClass('active');
            $headerBox.removeAttr('style');
        }
    });
    //Выключение скрытого меню по ресайзу
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 992 && $headerBox.is(':hidden')) {
            $headerBox.removeAttr('style');
        }
    });

    /*******************************************************/
    // Header слайдер
    /*******************************************************/

    $('.header__slider').addClass('owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoHeight: true,
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 800
    });

    /*******************************************************/
    //Chrome Smooth Scroll
    /*******************************************************/
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

});

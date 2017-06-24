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
        } else {
            $this.removeClass('active');
            $headerBox.slideUp(300)
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
        mouseDrag: false,
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
    // News слайдер
    /*******************************************************/

    $('.news__slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoHeight: true,
        autoplayTimeout: 5000,
        autoplay: true,
        smartSpeed: 600
    });

    /*******************************************************/
    // Brands слайдер
    /*******************************************************/
    $('.brands').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 5,
        nav: true,
        navText: '',
        autoplayTimeout: 6000,
        autoplay: true,
        smartSpeed: 600,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            361: {
                items: 2
            },
            641: {
                items: 3
            },
            769: {
                items: 4
            },
            993: {
                items: 5
            }
        }
    });

    /*******************************************************/
    //Scroll Top Button
    /*******************************************************/

    $('.main__button-top').click(function() {
        $('html, body').animate({scrollTop: 0}, $(window).scrollTop() * 0.1 + 600, 'swing');
    });

    /*******************************************************/
    //Brand content link more
    /*******************************************************/

    var $brandContentInner = $('.brand__content-inner'),
        $brandContentInnerHeight = $brandContentInner.height();
    if($brandContentInnerHeight >= 151) {
        $brandContentInner.css({
            'max-height' : '15.1rem'
        }).after('<button class="hide">Подробнее</button>');
    }

    $('.brand__content').on('click', 'button', function() {
       var $this = $(this);
       if ($this.hasClass('hide')) {
           $this.removeClass('hide').prev($brandContentInner);
           var $thisTextHeight = $this.prev($brandContentInner).removeAttr('style').height();
           $this.prev($brandContentInner).css({
               'max-height' : '15.5rem'
           }).animate({
               'max-height' : $thisTextHeight + 'px'
           }, 300).next('button').html('Скрыть');
       } else {
           $this.addClass('hide').prev($brandContentInner).animate({
               'max-height' : '15.5rem'
           }, 300).next('button').html('Подробнее');
       }
    });

    /*******************************************************/
    //Brand content link more
    /*******************************************************/
    var $productItem = $('.product__item');
    $productItem.addClass('hide').find('.product__table').hide();
    $productItem.on('click', '.product__title', function() {
        $(this).closest($productItem).toggleClass('hide').find('.product__table').slideToggle(300);
    });

    /*******************************************************/
    //Ввод в поле формы
    /*******************************************************/

    $('.quantity').on('click', 'button', function() {
        var $this = $(this),
        value = Number($this.siblings('input').val());
        if($this.hasClass('plus')) {
            $this.siblings('input').val( value + 1);
        } else {
            if (value > 1) {
                $this.siblings('input').val( value - 1);
            }
        }
    });

    /*******************************************************/
    //popup
    /*******************************************************/

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $('.basket__close').click(function() {
        $('.mfp-close').trigger('click');
    });

    $('.popup').submit(function() {
        var $this = $(this);
        // $.ajax({
        //     type: 'POST',
        //     url: '', //Change
        //     data: $this.serialize()
        // }).done(function() {
        //         $this.trigger('reset');
        //         $.magnificPopup.open({
        //             items: {
        //                 src: '#success'
        //             },
        //             type: 'inline'
        //         });
        //         setTimeout(function() {
        //             $.magnificPopup.close();
        //         }, 3000);
        //         return false;
        // });
        $this.trigger('reset');
        $.magnificPopup.open({
            items: {
                src: '#success'
            },
            type: 'inline'
        });
        setTimeout(function() {
            $.magnificPopup.close();
        }, 3000);
        return false;
    });

    /*******************************************************/
    //gallery Page Nav
    /*******************************************************/

    $('.gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

    /*******************************************************/
    //Chrome Smooth Scroll
    /*******************************************************/
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

});

/*start show shopping menu*/
$(document).ready(function() {
    $('.shopping').on('click', function() {
        $(this).parentsUntil('.head-mid').find('.basket-info').slideToggle(700);
    });
});
/*end show shopping menu*/
/*start shopping links*/
$(document).ready(function() {
    $('#shop-li').on('click', function() {
        $('.single-products').fadeOut();
        $('.single-product-layout').fadeOut();
        $(this).find('.shop-links').slideToggle(700);
        $('.shop-links').css({
            display: 'flex',
        })
    });
});
$(document).ready(function() {
    $('#plog-links').on('click', function() {
        $('.single-products').fadeOut();
        $('.shop-links').fadeOut();
        $(this).find('.single-product-layout').slideToggle(700);
        $('.single-product-layout').css({
            display: 'flex',
        })
    });
});
$(document).ready(function() {
    $('#single-links').on('click', function() {
        $('.shop-links').fadeOut();
        $('.single-product-layout').fadeOut();
        $(this).find('.single-products').slideToggle(700);
        $('.single-products').css({
            display: 'flex',
        })
    });
});
/*end shopping links*/
/*start main slider*/
$(document).ready(function() {
    $('.slick-slider').slick({
        autoPlay: true,
        Infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlaySpeed: 200,
        arrows: true,
        "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
        "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
    })
});
/*end main-slider*/
/*start arrival links*/
$(document).ready(function() {
    $('.arrival-links a').on('click', function(e) {
        e.preventDefault();
        $('.arrival-links a').removeClass('active');
        $(this).addClass('active');
    });
});
$(document).ready(function() {
    $('.arrival-links .arrival-go').on('click', function() {
        $('.bestseller-slider,.feature-slider').hide(400);
        $('.arrival-slider').show();
    });
    $('.arrival-links .seller-go').on('click', function() {
        $('.arrival-slider,.feature-slider').hide(400);
        $('.bestseller-slider').show();
    });
    $('.arrival-links .feature-go').on('click', function() {
        $('.arrival-slider,.bestseller-slider').hide(400);
        $('.feature-slider').show();
    });
});
/*end arrival links*/
/*start product card */
$(document).ready(function() {
    $('.product-card').hover(function() {
        $(this).children('.product-button').fadeToggle();
    });
});
/*end product card*/
/*start arrival slider*/
$(document).ready(function() {
    $('.slickslider,.seller-slider,.feat-slider,.lab-slider,.tv-slider,.best-slider').slick({
        autoPlay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlaySpeed: 1000,
        arrows: true,
        "nextArrow": '<button type="button" class="leftslick">next</button>',
        "prevArrow": '<button type="button" class="rightslick">prev</button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })
});
/*end arrival slider*/
/*start scroll up*/
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 600) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $('.scroll-up a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0,
        });
    });
});
/*end scroll up */
/*start index2.html*/
$(document).ready(function() {
    $('.category-head').click(function() {
        $(this).parent().find('.category-list').slideToggle(750);
    });
    $('.right-links').click(function(e) {
        e.preventDefault();
        $(this).find('.toggle-menu').slideToggle();
    });
});
/*end index2.html*/
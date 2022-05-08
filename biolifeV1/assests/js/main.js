/*start navbar*/
$(document).ready(function()
{
    $('.sho').on('click',function()
    {
        $('.product-menu').fadeOut();
        $('.demo-menu').fadeOut();
        $('.blog-menu').fadeOut();
        $(this).find('.shop-menu').slideToggle();
        $('.shop-menu').css({
            display:'flex',
        })
    });
});
$(document).ready(function()
{
    $('.pro').on('click',function()
    {
        $('.shop-menu').fadeOut();
        $('.demo-menu').fadeOut();
        $('.blog-menu').fadeOut();
        $(this).find('.product-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.dem').on('click',function()
    {
        $('.shop-menu').fadeOut();
        $('.product-menu').fadeOut();
        $('.blog-menu').fadeOut();
        $(this).find('.demo-menu').slideToggle();
        $('.demo-menu').css({
            display:'flex',
        })
    });
});
$(document).ready(function()
{
    $('.blo').on('click',function()
    {
        $('.shop-menu').fadeOut();
        $('.product-menu').fadeOut();
        $('.demo-menu').fadeOut();
        $(this).find('.blog-menu').slideToggle();
        $('.blog-menu').css({
            display:'flex',
        })
    });
});
$(document).ready(function()
{
    $('.right-toggle-one').mouseover(function(e)
    {
        e.preventDefault();
        $(this).find('.right-menu-one').slideDown();
        $('.right-menu-two').slideUp();
    });
    $('.right-toggle-one').click(function(e)
    {
        e.preventDefault();
        $(this).find('.right-menu-one').slideUp();
    });
});
$(document).ready(function()
{
    $('.right-toggle-two').mouseover(function(e)
    {
        e.preventDefault();
        $(this).find('.right-menu-two').slideDown();
        $('.right-menu-one').slideUp();
    });
    $('.right-toggle-two').click(function(e)
    {
        e.preventDefault();
        $(this).find('.right-menu-two').slideUp();
    });
});
$(document).ready(function()
{
    $('.cart-list .menu-open').click(function(e)
    {
        e.preventDefault();
        $('.cart-menu').slideDown();
    });
    $('.cart-menu .menu-close').click(function(e)
    {
        e.preventDefault();
        $('.cart-menu').slideUp();
    });
});
$(document).ready(function()
{
    $('.shopinng-bag').click(function()
    {
        $('.shopinng-menu').slideToggle();
    });
});
/*end navbar*/
/*start head search*/
$(document).ready(function()
{
    $('.department a').click(function(e)
    {
        e.preventDefault();
        $('.department-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.search-it').click(function(e)
    {
        e.preventDefault();
        $('.search-box').fadeIn();
    });
    $('.search-close').click(function(e)
    {
        e.preventDefault();
        $('.search-box').fadeOut();
    });
});
/*end search head*/
/*start mob menu*/
$(document).ready(function()
{
    $('.mob-menu').click(function(e)
    {
        e.preventDefault();
        $('.home-list').slideToggle();
    });
    $('.panel-close').click(function(e)
    {
        e.preventDefault();
        $('.home-list').slideToggle();
    });
    /*end panel*/
    /*start shop*/
    $('.shop-open').click(function(e)
    {
        e.preventDefault();
        $('.shop-mobile-menu').slideDown();
    });
    $('.back-home').click(function(e)
    {
        e.preventDefault();
        $('.shop-mobile-menu').slideUp();
        $('.home-list').slideDown();
    });
    /*end shop*/
     /*start products*/
     $('.product-open').click(function(e)
     {
         e.preventDefault();
         $('.product-mobile-menu').slideDown();
     });
     $('.product-head .back-home').click(function(e)
     {
         e.preventDefault();
         $('.product-mobile-menu').slideUp();
         $('.home-list').slideDown();
     });
     /*end product*/
     /*start demo*/
     $('.demo-open').click(function(e)
     {
         e.preventDefault();
         $('.demo-mobile-menu').slideDown();
     });
     $('.demo-head .back-home').click(function(e)
     {
         e.preventDefault();
         $('.demo-mobile-menu').slideUp();
         $('.home-list').slideDown();
     });
     /*end demo*/
     /*start blog*/
     $('.blog-open').click(function(e)
     {
         e.preventDefault();
         $('.blog-mobile-menu').slideDown();
     });
     $('.blog-head .back-home').click(function(e)
     {
         e.preventDefault();
         $('.blog-mobile-menu').slideUp();
         $('.home-list').slideDown();
     });
     /*end blog*/
});
/*end mob menu*/
/*start home slider*/
$('.slick-slider').slick({
    infinite: true,
    autoplay:true,
    arrows:true,
    autoplaySpeed:6200,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
    "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
});
/*end home slider*/
/*start pomegrante slider*/
$('.pomegrante-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end pomegrante slider*/
/*start related slider*/
$(document).ready(function() {
    $('.related-slider,.grapes-slider,.blueberries-slider,.lemon-slider,.vegtables-slider').slick({
        autoPlay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoPlaySpeed: 1000,
        arrows: true,
        "nextArrow": '<button type="button" class="leftslick">next</button>',
        "prevArrow": '<button type="button" class="rightslick">prev</button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
    ]
    })
});
/*end related slider*/
/*start related links*/
$(function()
{
    $('.related-links a').click(function(e)
    {
        e.preventDefault();
        $('.related-links a').removeClass('active');
        $('.related-links img').removeClass('active');
        $(this).addClass('active');
        $(this).find('img').addClass('active');
    });
});
/*end related links*/
/*start show sliders by related links*/
$(document).ready(function()
{
    $('.related-links .related-link').click(function()   
    {
        $('.grapess,.blueberries,.lemon,.vegtables').css({
            visibility:'hidden',
        })
        $('.related').css({
            visibility: 'visible',
        })
    });
});
$(document).ready(function()
{
    $('.related-links .grapes-link').click(function()   
    {
        $('.related,.blueberries,.lemon,.vegtables').css({
            visibility:'hidden',
        })
       $('.grapess').css({
        visibility: 'visible',
    })
    });
});
$(document).ready(function()
{
     $('.related-links .blueber-link').click(function()   
    {
       $('.related,.grapess,.lemon,.vegtables').css({
        visibility:'hidden',
    })
       $('.blueberries').css({
        visibility: 'visible',
    })
    });
});
$(document).ready(function()
{
    $('.related-links .lemon-link').click(function()   
    {
       $('.related,.grapess,.blueberries,.vegtables').css({
        visibility:'hidden',
    })
       $('.lemon').css({
        visibility: 'visible',
    })
    });
});
$(document).ready(function()
{
    $('.related-links .vegtables-link').click(function()   
    {
       $('.related,.grapess,.blueberries,.lemon').css({
        visibility:'hidden',
    })
       $('.vegtables').css({
        visibility: 'visible',
    })
    });
});
/*  end show sliders by related links*/
/*start fixed card show on the page*/
$(document).ready(function()
{
    $('.card-img a').click(function(e)
    {
        e.preventDefault();
        $('.fixed-product').slideDown();
    });
    $('.close-fixed').click(function(e)
    {
        e.preventDefault();
        $('.fixed-product').slideUp();
    });
});
/*end fixed card show on the page*/
/*start gallery */
$(document).ready(function()
{
    $('.mini-img img').on('click',function()
    {
        $('.mini-img img').removeClass('active');
        $(this).addClass('active');
        $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(400);
    });
});
/*end gallery*/
/*start fixed product two show on the page*/
$(document).ready(function()
{
    $('.chef-link .menu-view').click(function(e)
    {
        e.preventDefault();
        $('.fixed-product-two').slideDown();
    });
    $('.close-fixed').click(function(e)
    {
        e.preventDefault();
        $('.fixed-product-two').slideUp();
    });
});
/*end fixed card show on the page*/
/*start dealies slider*/
$(document).ready(function() {
    $('.deals-slider').slick({
        autoPlay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:500,
        autoPlaySpeed: 500,
    })
});
/*end dealies slider*/
/*start rated deals slider*/
$('.rate-deal-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:800,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
]
});
/*start brand slider*/
$('.brand-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1200,
    speed: 1200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
]
});
/*start blog*/
$(document).ready(function()
{
    $('.share-icon').click(function()
    {
        $(this).parent().find('.social-icons').slideToggle();
    });
});
$('.blog-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
]
});
/*end blog*/
/*start testimonial slider*/
$('.testimonial-slider').slick({
    infinite: true,
    autoplay:true,
    arrows:true,
    autoplaySpeed:2500,
    speed: 2500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
    "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
});
/*end testimonial slider*/
/*start shopping slider*/
$(document).ready(function() {
    $('.shopping-slider').slick({
        autoPlay: true,
        speed:1000,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoPlaySpeed: 1000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
    ]
    })
});
/*end shopping slider*/
/*start scroll to top*/
$(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 400)
        {
            $('.scroll-to-top').fadeIn();
        }
        else
        {
            $('.scroll-to-top').fadeOut();
        }
    });
});
$(function()
{
    $('.scroll-to-top').click(function()
    {
        $('html , body').animate({
            scrollTop:0,
        })
    });
});
/*end scrollto top*/
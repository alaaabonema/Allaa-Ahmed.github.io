
$(function()
{
    $('.navbar-part .navbar-item a').click(function()
    {
        $('.navbar-part .navbar-item .dropdown-list').slideToggle(500);
    });
});
$(window).scroll(function()
{
    if($(window).scrollTop() >=  50)
    {
        $('.header-content').css({
            top:0,
            left:0,
        })
    }
    else
    {
        $('.header-content').css({
            top:45,
            left:0,
        })
    }
});
/*start fade in mega menu*/
$(function()
{
    $('.navbar-list .navbar-item').click(function()
    {
        $('.dropdown-position-list , .megamenu , .megamenu-category , .dropdown-pages-list , .dropdown-auth-list , .dropdown-blogs-list').removeClass('visible');
        $(this).find('ul , div').toggleClass('visible');
    });
    $('.navbar-list .navbar-item').dblclick(function()
    {
        $(this).find('ul , div').removeClass('visible');
    });
});
/*end fadein mega menu*/
/*start fade fixed menu*/
$(function()
{
    $('.header-widget , .cart-btn').click(function()
    {
        $('.cartlist-fixed-menu').animate({
            right:0,
        })
    });
});
$(function()
{
    $('.fixed-head .fa-close').click(function()
    {
        $('.cartlist-fixed-menu').animate({
            right:-340,
        })
    });
});
$(function()
{
    $('.coupon-btn').click(function()
    {
        $('.coupon-form').fadeToggle(500);
    });
});
/*start dicrement value*/
/*end dicrement value*/
/*end fade fixed menu*/
$(function()
{
    $('.product-card .fa-heart').click(function()
    {
        $(this).css({
            'color':'black',
        })
    });
});
/*start product card*/
$(function()
{
    $('.product-card').hover(function()
    {
        $(this).find('.product-widget').fadeToggle();
        $(this).find('.product-add').toggleClass('active');
    });
});
$(function()
{
    $('.product-add').click(function()
    {
        $(this).fadeOut(500);
        $(this).parent().find('.product-action').toggleClass('select');
    });
});
/* start features card*/
$(function()
{
    $('.feature-card').hover(function()
    {
        $(this).find('.feature-widget').fadeToggle(500);
    });
});
/*start slickslider*/

$(document).ready(function()
{
    $('.newitem-slider .slickSlider.responsive').slick({
        autoplay:true,
        speed:300,
        slidesToShow:4,
        slidesToScroll:1,
        infinite:true,  
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});
/*end slickslider*/
/*start nich part*/
$(function()
{
    $('.niche-part .nav-tabs .order-top').click(function()
    {
        var partID=$(this).attr('href');
        $('#top-discount , #top-rateing').removeClass('active');
        $('#top-order').addClass('active');
    }); 
    $('.niche-part .nav-tabs .rating-top').click(function()
    {
        var partID=$(this).attr('href');
        $('#top-discount , #top-order').removeClass('active');
        $('#top-rateing').addClass('active');
    }); 
    $('.niche-part .nav-tabs .discount-top').click(function()
    {
        var partID=$(this).attr('href');
        $('#top-order , .top-rateing').removeClass('active');
        $('#top-discount').addClass('active');
    }); 
});
/*end nich part*/
/*start brand part*/
$(document).ready(function()
{
    $('.brand-slider .slick-slider.responsive').slick({
        autoplay:true,
        speed:300,
        slidesToShow:4,
        slidesToScroll:1,
        infinite:true,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay:true,
                speed:300,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});
/*end brand slickslider*/
/*start feedback slickslider*/
$(document).ready(function()
{
    $('.feedback-slider .slick-slider.responsive').slick({
        autoplay:true,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true,
        fade:true,
        cssEase:'linear',
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay:true,
                speed:300,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});
/*end feed back slider*/
/*start our articles slider*/
$(document).ready(function()
{
    $('.articles-slider .ourarticles-slider.responsive').slick({
        autoplay:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>', 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay:true,
                speed:300,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});

/*end our articles slider*/
/*start scroll to top*/
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 600)
        {
            $('.scroll-to-top').fadeIn(500);
        }
        else
        {
            $('.scroll-to-top').fadeOut(500);
        }
    });
});
$(document).ready(function()
{
    $('.scroll-to-top').click(function()
    {
        $('html , body').scrollTop(0);
    });
});
/*end scroll to top*/
/*start fixed category menu*/
$(function()
{
    $('.category-item').click(function()
    {
        $('.dropdown-list').removeClass('active');
        $(this).find('.dropdown-list').toggleClass('active');
        $(this).find('i').toggleClass('fa-arrow-right , fa-arrow-down');
    });
});
$(function()
{
    $('.cate-head .fa-close').click(function()
    {
        $('.fixed-category').animate({
            left:'-280',
        })
    });
});
$(function()
{
    $('.cate-btn').click(function()
    {
        $('.fixed-category').animate({
            left:'0',
        })
    });
});
/*end fixed category menu*/
/*plus&minus button*/
/*
$(function()
{
    $('.action-plus').click(function()
    {
        var increment=$('.action-input').val();
        $('.action-input').val(++increment);
    });
    $('.action-minus').click(function()
    {
        var dicrement=$('.action-input').val();
        $('.action-input').val(--dicrement);
    });
});
*/
$(function()
{
    $('.action-plus').click(function()
    {
        var increment=$(this).parent().find('.action-input').val();
        $(this).parent().find('.action-input').val(++increment);
    });
    $('.action-minus').click(function()
    {
        var dicrement=$(this).parent().find('.action-input').val();
        if($(this).parent().find('.action-input').val() <= 0)
        {
            $(this).parent().find('.action-input').val();
        }
        else
        {
            $(this).parent().find('.action-input').val(--dicrement);
        }
    });
});
/*end plus&minus button*/
/*start about slickslider*/
$(document).ready(function()
{
    $('.about-slider .slick-slider.responsive').slick({
        autoplay:true,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        infinite:true,
        fade:true,
        cssEase:'linear',
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:1,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay:true,
                speed:300,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});
/*end about slider*/
/*start team slider*/
$(document).ready(function()
{
    $('.team-slider .slick-slider.responsive').slick({
        autoplay:true,
        speed:600,
        slidesToShow:4,
        slidesToScroll:1,
        infinite:true,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',  
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                autoplay:true,
                speed:300,
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    })
});
/*end team slider*/
/*start our team */
$(function()
{
    $('.team-img').hover(function()
    {
        $(this).find('.team-icons').fadeToggle(700);
    });
});
/*end our team*/
/*start copon number*/
$(function()
{
    $('.copon').click(function()
    {
        $(this).find('span').fadeOut();
        $(this).find('small').fadeIn();
    });
});
/*end copon number*/
/*start contact card*/
$(function()
{
    $('.contact-card').hover(function()
    {
        $(this).find('.card-icons').toggleClass('select');
    });
});
/*end contact card*/
/*start address card*/
$(function()
{
    $('.address-card').hover(function()
    {
        $(this).find('.card-icons').toggleClass('select');
    });
});
/*end contact card*/
/*start payment card*/
$(function()
{
    $('.payment-card').hover(function()
    {
        $(this).find('.card-icons').toggleClass('select');
    });
});
/*end payment card*/
/*delte card*/
$(function()
{
    $('.contact-card .card-icons .fa-pinterest').click(function()
    { 
        $(this).parentsUntil('.card-contain').fadeOut();
    });
    $('.address-card .card-icons .fa-pinterest').click(function()
    { 
        $(this).parentsUntil('.address-contain').fadeOut();
    });
    $('.payment-card .card-icons .fa-edit').click(function()
    { 
        $(this).parentsUntil('.payment-contain').fadeOut();
    });
});
/*delete card*/
/*start profile card*/
$(function()
{
    $('.profile-button').click(function()
    {
        $('.modal-contact-form').fadeOut();
        $('.modal-address-form').fadeOut();
        $('.modal-payment-form').fadeOut();
        $('.modal-form').slideDown(600);
    });
    $('.modal-form .fa-close').click(function()
    {
        $('.modal-form').slideUp(500);
    });
});
/*end profile card*/
/*start contact card*/
$(function()
{
    $('.contact-button').click(function()
    {
        $('.modal-form').slideUp();
        $('.modal-address-form').fadeOut();
        $('.modal-payment-form').fadeOut();
        $('.modal-contact-form').fadeIn(600);
    });
    $('.modal-contact-form .fa-close').click(function()
    {
        $('.modal-contact-form').fadeOut(500);
    });
});
/*end contact card*/
/*start address card*/
$(function()
{
    $('.address-button').click(function()
    {
        $('.modal-form').slideUp();
        $('.modal-contact-form').fadeOut();
        $('.modal-payment-form').fadeOut();
        $('.modal-address-form').fadeIn(600);
    });
    $('.modal-address-form .fa-close').click(function()
    {
        $('.modal-address-form').fadeOut();
    });
});
/*end address card*/
/*start payment card*/
$(function()
{
    $('.payment-button').click(function()
    {
        $('.modal-form').slideUp();
        $('.modal-contact-form').fadeOut();
        $('.modal-address-form').fadeOut();
        $('.modal-payment-form').fadeIn(600);
    });
    $('.modal-payment-form .fa-close').click(function()
    {
        $('.modal-payment-form').fadeOut();
    });
});
/*end address card*/
/*start home links for mobile*/
$(function()
{
    $('.mobile-menu .home-mobile').click(function(e)
    {
        e.preventDefault();
        $('.home-links').slideDown(800);
    });
    $('.home-links .fa-close').click(function()
    {
        $('.home-links').slideUp();
    });
});
/*end home links for mobile*/




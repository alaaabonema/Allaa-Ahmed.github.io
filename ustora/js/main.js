/*start navbar*/
/*start add active links*/
$(document).ready(function()
{
$('.nav-item a').click(function()
{
    $('.nav-item a').removeClass('active');
    $(this).addClass('active');
});
});
/*end add active links*/
/*start scroll to sections*/
/*
$(document).ready(function()
{
    $('.nav-item a').click(function(e)
    {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$('#'+$(this).data('scroll').offset().top),
        },700)
    });
});
*/
/*end scroll to sections*/
/*start add active class when scroll to the section*/
/*
$(document).ready(function()
{
    'use stirct';
    $(window).scroll(function()
    {
        $('.block').each(function()
        {
            if($(window).scrollTop >= $(this).offset().top)
            {
                var blockid=$(this).attr('id');
                $('.nav-item a').removeClass('active');
                $('.nav-item a[data-scroll="'+blockid+'"]').addClass('active');
            }
        });
    });
});
*/
/*end add active class when scroll to the section*/
/*start position for navbar if scroll down*/
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 500)
        {
            $('.navbar').css({
                position:'fixed',
                zIndex:999999,
                top:'0',
                left:'0',
                backgroundColor:'#777',
                color:'#fff',
                borderBottom:'2px solid #ddd',
            })
        }
        else
        {
            $('.navbar').css({
            position:'relative',
            })
        }
    });
});
/*end  position for navbar if scroll down*/
/*end navbar*/
/*start home*/
/*start main slider*/
$(document).ready(function()
{
    $('.main-slider .slickslider').slick({
        autoPlay:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoPlaySpeed:1000,
        dots:true,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa-solid fa-circle-chevron-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa-solid fa-circle-chevron-left"></i></button>',
    })
});
/*end main-slider*/
/*end home*/
/*products*/
/*start main slider*/
$(document).ready(function()
{
    $('.products-slider .slick-slider').slick({
        autoPlay:true,
        slidesToShow:4,
        slidesToScroll:1,
        autoPlaySpeed:1000,
        dots:true,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick"><i class="fa-solid fa-circle-chevron-right"></i></button>', 
        "prevArrow":'<button type="button" class="rightslick"><i class="fa-solid fa-circle-chevron-left"></i></button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1,
            }
            },
            {
            breakpoint: 600,
            settings: {
                
                slidesToShow: 1,
                slidesToScroll:1,
            }
            }
        ]
        });
});
$(function()
{
    $('.slick-text').slideDown(900);
});
/*end main-slider*/
/*end products*/
/*start brand slider*/
/*start main slider*/
$(document).ready(function()
{
    $('.brand-slider').slick({
        autoPlay:true,
        slidesToShow:4,
        slidesToScroll:1,
        autoPlaySpeed:1000,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick">prev</button>', 
        "prevArrow":'<button type="button" class="rightslick">next</button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1,
            }
            },
            {
            breakpoint: 600,
            settings: {
                
                slidesToShow: 1,
                slidesToScroll:1,
            }
            }
        ]
        });
});
/*end main-slider*/
/*end brand slider*/
/*start gallery*/
$(function()
{
    $('.thumbnails img').on('click',function()
    {
        $(this).addClass('active').siblings().removeClass('active');
        $('.main-img img').hide().attr('src',$(this).attr('src')).fadeIn(600);
    });
});
/*end gallery*/
/*start description & review*/
$(function()
{
    $('.prev-button .btn-light').on('click',function()
    {
        $('.prev-product').fadeOut(100);
        $('.description-product').slideDown(800);
    });
});
$(function()
{
    $('.prev-button .btn-primary').on('click',function()
    {
        $('.description-product').fadeOut(100);
        $('.prev-product').slideDown(800);
    });
});
/*end description & review*/
/*start main slider*/
$(document).ready(function()
{
    $('.related-slider').slick({
        autoPlay:true,
        slidesToShow:3,
        slidesToScroll:1,
        autoPlaySpeed:1000,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick">prev</button>', 
        "prevArrow":'<button type="button" class="rightslick">next</button>',
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll:1,
            }
            },
            {
            breakpoint: 600,
            settings: {
                
                slidesToShow: 1,
                slidesToScroll:1,
            }
            }
        ]
        });
});
/*end main-slider*/
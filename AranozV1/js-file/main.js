/*start navbar*/
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 300)
        {
            $('.navbar-default').css({
                backgroundColor:'#fff',
                borderBottom:'1px solid #ddd',
            })
        }
        else
        {
            $('.navbar-default').css({
                backgroundColor:'transparent',
                borderBottom:'transparent',
            })
        }
    });
});
/*end navbar*/
/*start header*/
$(document).ready(function()
{
    $('.main-slider').fadeIn(5200);
});
/*start banner slider*/
$(document).ready(function()
{
    $('.banner-slider').slick({
        autoplay:true,
        Infinity:true,
        speed:900,
        slidesToShow:1,
        slidesToScroll:1,
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
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
        ]
    });
});
/*end banner slider*/
/*end header*/
/*start awesome shop*/
/*start shop slider*/
$(document).ready(function()
{
    $('.shopslider').slick({
        autoplay:true,
        Infinity:true,
        speed:900,
        slidesToShow:4,
        slidesToScroll:4,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick">next</i></button>', 
        "prevArrow":'<button type="button" class="rightslick">previous</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:2,
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
    });
});
/*end shop slider*/
/*end awesome shop*/
/*start bestsellers shop*/
/*start shop slider*/
$(document).ready(function()
{
    $('.best-slider').slick({
        autoplay:true,
        Infinity:true,
        speed:900,
        slidesToShow:4,
        slidesToScroll:1,
        arrows:true,
        "nextArrow":'<button type="button" class="leftslick">next</i></button>', 
        "prevArrow":'<button type="button" class="rightslick">previous</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:3,
                    infinite:true,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow:2,
                slidesToScroll:2,
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
    });
});
/*end shop slider*/
/*end best sellers shop*/
/*start single shop gallery*/
$(function()
{
    $('.shop-thumbnails img').click(function()
    {
        $(this).addClass('active').siblings().removeClass('active');
        $('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn();
    });
});
/*end single shop gallery*/
/*single shop input */
$(function()
{
    $('.fa-plus').on('click',function()
    {
        var inputval=$('#num').val();
        $('#num').val(++ inputval);
    });
    $('.fa-minus').on('click',function()
    {
        var inputval=$('#num').val();
        $('#num').val(-- inputval);
    });
});
/*single shop input*/
/*start discriptio list fade*/
$(function()
{
    $('.description-list a').click(function(event)
    {
        event.preventDefault();
        $('.description-list a').removeClass('active');
        $(this).addClass('active');
    });
});
$(function()
{
    $('.description-list #description').click(function()
    {
        $('.sepecifaction').fadeOut(100);
        $('.comments').fadeOut(100);
        $('.reviews').fadeOut(100);
        $('.description-text').fadeIn();
    });
});
$(function()
{
    $('.description-list #sepecif').click(function()
    {
        $('.description-text').fadeOut(100);
        $('.comments').fadeOut(100);
        $('.reviews').fadeOut(100);
        $('.sepecifaction').slideDown();
    });
});
$(function()
{
    $('.description-list #comment-link').click(function()
    {
        $('.description-text').fadeOut(100);
        $('.sepecifaction').slideUp(100);
        $('.reviews').fadeOut(100);
        $('.comments').fadeIn();
    });
});
$(function()
{
    $('.description-list #review').click(function()
    {
        $('.description-text').fadeOut(100);
        $('.sepecifaction').slideUp(100);
        $('.comments').fadeOut(100);
        $('.reviews').fadeIn();
    });
});
/*end discription list fade*/
/*start home slider*/
$('.home-slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    lazyLoad: 'ondemand',
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end home slider*/
/*start home menu*/
$(document).ready(function()
{
    $('.menu-button').click(function(e)
    {
        e.preventDefault();
        $('.home-menu').slideToggle(900);
    });
});
$(document).ready(function()
{
    $('.more').click(function()
    {
        $('.list-toggle').slideToggle();
    });
});
/*end home menu*/
/*start  slider one*/
$('.slider-one ,.slider-two,.slider-three,.best-slider').slick({
    autoplay: true,
    infinite: true,
    dots:false,
    speed: 300,
    autoplayspeed:300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
    "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
/*end arrival slider*/
/*arrival links*/
$(document).ready(function()
{
    $('.arrival-links .link-one').click(function(e)
    {
        e.preventDefault();
        $('.arrival-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-two,.slider-three').css({
            visibility:'hidden',
        })
        $('.slider-one').css({
            visibility:'visible',
        })
    });
});
$(document).ready(function()
{
    $('.arrival-links .link-two').click(function(e)
    {
        e.preventDefault();
        $('.arrival-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-one,.slider-three').css({
            visibility:'hidden',
        })
        $('.slider-two').css({
            visibility:'visible',
        })
    });
});
$(document).ready(function()
{
    $('.arrival-links .link-three').click(function(e)
    {
        e.preventDefault();
        $('.arrival-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-one,.slider-two').css({
            visibility:'hidden',
        })
        $('.slider-three').css({
            visibility:'visible',
        })
    });
});
/*end arrival links*/
/*arrival links*/
$(document).ready(function()
{
    $('.kitchen-links .link-one').click(function(e)
    {
        e.preventDefault();
        $('.kitchen-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-two,.slider-three').css({
            visibility:'hidden',
        })
        $('.slider-one').css({
            visibility:'visible',
        })
    });
});
$(document).ready(function()
{
    $('.kitchen-links .link-two').click(function(e)
    {
        e.preventDefault();
        $('.kitchen-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-one,.slider-three').css({
            visibility:'hidden',
        })
        $('.slider-two').css({
            visibility:'visible',
        })
    });
});
$(document).ready(function()
{
    $('.kitchen-links .link-three').click(function(e)
    {
        e.preventDefault();
        $('.kitchen-links a').removeClass('active');
        $(this).addClass('active');
        $('.slider-one,.slider-two').css({
            visibility:'hidden',
        })
        $('.slider-three').css({
            visibility:'visible',
        })
    });
});
/*end kitchen links*/
/*start home slider*/
$('.testimonials-slider').slick({
    autoplay: true,
    infinite: true,
    dots:true,
    speed: 300,
    autoplayspeed:300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end home slider*/
/*start look shop section*/
$(document).ready(function()
{
    $('.look-button').hover(function()
    {
       $('.look-card').fadeToggle(700);
    });
    $('.lookbut-two').hover(function()
    {
       $('.lookcard-two').fadeToggle(700);
    });
    $('.lookbut-three').hover(function()
    {
       $('.lookcard-three').fadeToggle(700);
    });
    $('.lookbut-four').hover(function()
    {
       $('.lookcard-four').fadeToggle(700);
    });
    $('.lookbut-five').hover(function()
    {
       $('.lookcard-five').fadeToggle(700);
    });
    $('.lookbut-th').hover(function()
    {
       $('.lookcard-th').fadeToggle(700);
    });
    $('.lookbut-fo').hover(function()
    {
       $('.lookcard-fo').fadeToggle(700);
    });
    $('.lookbut-fi').hover(function()
    {
       $('.lookcard-fi').fadeToggle(700);
    });
    $('.lookbut-thr').hover(function()
    {
       $('.lookcard-thr').fadeToggle(700);
    });
    $('.lookbut-fou').hover(function()
    {
       $('.lookcard-fou').fadeToggle(700);
    });
    $('.lookbut-fiv').hover(function()
    {
       $('.lookcard-fiv').fadeToggle(700);
    });
});
/*end look shop section*/
/*start scroll top*/
$(document).ready(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >=600)
        {
            $('.scroll-top').fadeIn();
        }
        else
        {
            $('.scroll-top').fadeOut();
        }
    });
});
$(document).ready(function()
{
    $('.scroll-top a').click(function(e)
    {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:'0',
        },900)
    });
});
/*end scroll top*/
/*start category list*/
$(document).ready(function()
{
    $('.category-dropdown a').click(function(e)
    {
        e.preventDefault();
        $(this).find('svg').toggleClass('fa-square-plus');
        $(this).find('svg').toggleClass('fa-square-minus');
        $(this).find('svg').toggleClass('active');
        $(this).toggleClass('active');
        $(this).parent().find('.drop-menu').slideToggle();
    });
});
/*end category list*/
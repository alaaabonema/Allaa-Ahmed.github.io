/*start navbar*/
$(function()
{
    $(window).scroll(function()
    {
    if($(window).scrollTop()>=600)
    {
    $('.my-nav').css({
        position:'fixed',
        top:'50px',
        left:'0',
        zIndex:'9999',
        width:'100%',
    });
    }
    else
    {
        $('.my-nav').css({
            width: '100%',
            position: 'relative',
            top:'0',
        });
    }
});
});
$(function()
{
    $(window).scroll(function()
    {
    if($(window).scrollTop()>=600)
    {
    $('.navbar').css({
        backgroundColor:'#343a40',
    });
    }
    else
    {
        $('.navbar').css({
            backgroundColor:'#030e27',
            color:'#fff',
        });
    }
});
});
$(document).ready(function()
{
    $('.nav-item a').click(function(e)
    {
       $('.nav-item a').removeClass('active');
       $(this).addClass('active');
    });
});
$(document).ready(function()
{
    $('.home-link').click(function(e)
    {
        e.preventDefault();
        $('.pages-layout').slideUp();
        $('.element-menu').slideUp();
        $('.serv-menu').slideUp();
        $('.blog-menu').slideUp();
        $('.home-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.serv-link').click(function(e)
    {
        e.preventDefault();
        $('.pages-layout').slideUp();
        $('.element-menu').slideUp();
        $('.home-menu').slideUp();
        $('.blog-menu').slideUp();
        $('.serv-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.pages-link').click(function(e)
    {
        e.preventDefault();
        $('.home-menu').slideUp();
        $('.element-menu').slideUp();
        $('.serv-menu').slideUp();
        $('.blog-menu').slideUp();
        $('.pages-layout').slideToggle();
        $('.pages-layout').css({
            display:'flex',
        })
    });
});
$(document).ready(function()
{
    $('.element-link').click(function(e)
    {
        e.preventDefault();
        $('.pages-layout').slideUp();
        $('.home-menu').slideUp();
        $('.serv-menu').slideUp();
        $('.blog-menu').slideUp();
        $('.element-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.right-toggle').click(function(e)
    {
        e.preventDefault();
        $('.right-menu').slideToggle();
    });
    $('.right-toggle-one').click(function(e)
    {
        e.preventDefault();
        $('.right-menu-one').slideToggle();
    });
});
$(document).ready(function()
{
    $('.blog-link').click(function(e)
    {
        e.preventDefault();
        $('.pages-layout').slideUp();
        $('.element-menu').slideUp();
        $('.serv-menu').slideUp();
        $('.home-menu').slideUp();
        $('.blog-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.search-icon').click(function(e)
    {
        e.preventDefault();
        $('.pages-layout').slideUp();
        $('.element-menu').slideUp();
        $('.serv-menu').slideUp();
        $('.blog-menu').slideUp();
        $('.home-menu').slideUp();
        $('.search-filed').slideToggle();
    });
});
$(document).ready(function()
{
    $('.search-mob-icon').click(function(e)
    {
        $('.search-mob-filed').slideToggle();
    });
});
$(document).ready(function()
{
    $('.drop-icon').click(function(e)
    {
        $(this).find('svg').toggleClass('fa-caret-right');
        $(this).find('svg').toggleClass('fa-caret-down');
        $('.home-mob-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.serv-icon').click(function(e)
    {
        $(this).find('svg').toggleClass('fa-caret-right');
        $(this).find('svg').toggleClass('fa-caret-down');
        $('.services-mob-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.pages-icon').click(function(e)
    {
        $(this).find('svg').toggleClass('fa-caret-right');
        $(this).find('svg').toggleClass('fa-caret-down');
        $('.pages-mob-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.element-icon').click(function(e)
    {
        $(this).find('svg').toggleClass('fa-caret-right');
        $(this).find('svg').toggleClass('fa-caret-down');
        $('.element-mob-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.blog-icon').click(function(e)
    {
        $(this).find('svg').toggleClass('fa-caret-right');
        $(this).find('svg').toggleClass('fa-caret-down');
        $('.blog-mob-menu').slideToggle();
    });
});
$(document).ready(function()
{
    $('.mob-bars').click(function(e)
    {
        e.preventDefault();
        $('.mobile-menu').animate({
            right:0,
        },700)
    });
});
$(document).ready(function()
{
    $('.brand-img a').click(function(e)
    {
        e.preventDefault();
        $('.mobile-menu').animate({
            right:-300,
        },700)
    });
});
$(document).ready(function()
{
    $('.mob-link').click(function()
    {
       $('.mob-link a').removeClass('active');
       $(this).find('a').addClass('active');
    });
});
/*end navbar*/
/*start home slider*/
$('.slick-slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    autoplayspeed:300,
    lazyLoad: 'ondemand',
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end home slider*/
/*start portfolio images*/
$(document).ready(function()
{
    $('.portfolio-nav .case-link').click(function(e)
    {
        e.preventDefault();
        $('.portfolio-nav a').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-buliding').fadeOut(400);
        $('.portfolio-bridge').fadeOut(400);
        $('.portfolio-houses').fadeOut(400);
        $('.portfolio-interio').fadeOut(400);
        $('.portfolio-cases').fadeIn(800);
    });
});
$(document).ready(function()
{
    $('.portfolio-nav .build-link').click(function(e)
    {
        e.preventDefault();
        $('.portfolio-nav a').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-cases').fadeOut(400);
        $('.portfolio-bridge').fadeOut(400);
        $('.portfolio-houses').fadeOut(400);
        $('.portfolio-interio').fadeOut(400);
        $('.portfolio-buliding').fadeIn(800);
    });
});
$(document).ready(function()
{
    $('.portfolio-nav .bridge-link').click(function(e)
    {
        e.preventDefault();
        $('.portfolio-nav a').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-cases').fadeOut(400);
        $('.portfolio-buliding').fadeOut(400);
        $('.portfolio-houses').fadeOut(400);
        $('.portfolio-interio').fadeOut(400);
        $('.portfolio-bridge').fadeIn(800);
    });
});
$(document).ready(function()
{
    $('.portfolio-nav .house-link').click(function(e)
    {
        e.preventDefault();
        $('.portfolio-nav a').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-cases').fadeOut(400);
        $('.portfolio-buliding').fadeOut(400);
        $('.portfolio-bridge').fadeOut(400);
        $('.portfolio-interio').fadeOut(400);
        $('.portfolio-houses').fadeIn(800);
    });
});
$(document).ready(function()
{
    $('.portfolio-nav .interio-link').click(function(e)
    {
        e.preventDefault();
        $('.portfolio-nav a').removeClass('active');
        $(this).addClass('active');
        $('.portfolio-cases').fadeOut(400);
        $('.portfolio-buliding').fadeOut(400);
        $('.portfolio-houses').fadeOut(400);
        $('.portfolio-bridge').fadeOut(800);
        $('.portfolio-interio').fadeIn(800);
    });
});
/*end portfolio images*/
/*start test slider*/
$('.tesimonial-slider').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    autoplayspeed:300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
    "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
});
/*end test slider*/
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
$(document).ready(function(){
    $('.offices-link').on('click',function(e){
       e.preventDefault();
       $('.place-office').slideDown(900);
    })
});
$(document).ready(function(){
    $('.close-office').on('click',function(e){
       e.preventDefault();
       $('.place-office').slideUp(900);
       
    })
})
/*start home slider*/
$('.slick-slider').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:6200,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end home slider*/

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
            left:-300,
        },700)
    });
});
$(document).ready(function()
{
    $('.navbar .menu-bar').click(function(e)
    {
        e.preventDefault();
        $('.mobile-menu').animate({
            left:0,
        },700)
    });
});
$(document).ready(function()
{
    $('.fixed-nav .nav-toggel').click(function(e)
    {
        e.preventDefault();
        $('.mobile-menu').animate({
            left:0,
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

/*start fixed navbar*/
$(function(){
    'use strict';
    $(window).scroll(function(){
        if($(window).scrollTop() >= 500)
        {
            $('#header').fadeOut();
        }
        else
        {
            $('#header').fadeIn(); 
        }
    })
});
/*end navbar*/
/*start bold slider*/
$('.bold-slider').slick({
    infinite: true,
    autoplay:true,
    dots:true,
    autoplaySpeed:6200,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});
/*end home slider*/
/*start news slider*/
$('.news-slider .slickslider').slick({

    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 2,
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
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
/*end home slider*/
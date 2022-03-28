/*start show navbar*/
$(document).ready(function()
{
    $('.nav-brand').click(function()
    {
        $('.nav-links').slideToggle();
    });
});
/*end show navbar*/
/*start go to section with links*/
$(document).ready(function()
{
    $('header .nav-links a ,header .land-text a ,.skill-links a').click(function(e)
    {
        e.preventDefault();
        $('.nav-links a').removeClass('active');
        $(this).addClass('active');
        $('html,body').animate({
            scrollTop:$('#'+$(this).data('scroll')).offset().top,
        },700)
    });
});
$(function()
    {
        'use strict';
        $(window).scroll(function()
        {
            $('.block').each(function()
            {
                if($(window).scrollTop() >= $(this).offset().top){
                    var blockID=$(this).attr('id');
                    $('header .nav-links a').removeClass('active');
                    $('header .nav-links a[data-scroll="'+ blockID +'"]').addClass('active');
                }
            });
        });
});
/*end  go to section with links*/
/*start skill progress*/
$(window).scroll(function()
{
    if($(window).scrollTop() > $('.about').offset().top)
    {
    $('.skill-progress span').each(function()
    {
        $(this).animate({
            width:$(this).attr('data-progress'),
        },4500);
        $(this).text($(this).attr('data-progress'));
    })
    }
    else
    {
        $(this).animate({
            width:'0',
        },800);
    }
});
/*end skill progress*/
/*star services slider*/
$(document).ready(function()
{
    $('.serv-slider .slick-slider').slick({
        autoPlay:true,
        slidesToShow:3,
        slidesToScroll:3,
        autoPlaySpeed:1000,
        dots:true,
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
/*end services slider*/

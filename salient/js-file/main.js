/*start navbar*/
$(document).ready(function()
{
$('.navbar-default .navbar-nav a').click(function(e)
{
    e.preventDefault();
    $('html , body').animate({
        scrollTop:$('#'+ $(this).data('scroll')).offset().top,
    },500)
});
//عند الضغط علي اللينك ياخد صفات السيلكت
$('.navbar-default .navbar-nav  a').click(function()
{
    $(this).addClass('select').parent().siblings().find('a').removeClass('select');
    })
});
//تزامن السيكشن مع اللينك
$(function()
    {
        'use strict';
        $(window).scroll(function()
        {
            $('.block').each(function()
            {
                if($(window).scrollTop() >= $(this).offset().top){
                    var blockID=$(this).attr('id');
                    $('.navbar-default .navbar-nav a').removeClass('select');
                    $('.navbar-default .navbar-nav a[data-scroll="'+ blockID +'"]').addClass('select');
                }
            });
        });
    });
/*end navbar*/
/*start header*/
$(function()
{
showtext();
function showtext()
{
     $('.bg-text .text-one , .bg-text .text-two').fadeToggle(1000,function(){
        $('.bg-text .text-one , .bg-text .text-two').fadeToggle(1600).delay(1500);
        showtext();
     });
}
});
/*scroll to top*/
$(window).scroll(function()
{
    if($(window).scrollTop() > 1000)
    {
        $('.scroll-to-top').fadeIn(600);
    }
    else
    {
        $('.scroll-to-top').fadeOut(600);
    }
});

$('.scroll-to-top').on('click',function()
{
    $('html , body').animate({
        scrollTop:0,
    },600)
});
/*end scroll to top*/
$(window).scroll(function()
{
    if($(window).scrollTop() >= $('.team-skills').offset().top)
    {
        $('.progress>span').each(function()
        {
            $(this).animate({
                width:$(this).attr('data-progress'),
            },1000,
            function()
            {
                $(this).text($(this).attr('data-progress'));
            }
            )
        });
    }
    else
    {
            $(this).animate({
                width:0,
            },1000,
            function()
            {
                $(this).text($(this).attr('data-progress'));
            })
    }
});
/* start button animation*/
$(function()
{
    $('.footer-button').hover(function()
    {
        $(this).find('span').eq(0).animate({
            width:'100%',
        },500)
    });
});

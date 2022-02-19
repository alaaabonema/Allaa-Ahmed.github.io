
/*start navbar*/
$(document).ready(function()
{
$('.navbar-nav li a').click(function(e)
{
    e.preventDefault();
    $('html , body').animate({
        scrollTop:$('#'+ $(this).data('scroll')).offset().top,
    },500)
});
//عند الضغط علي اللينك ياخد صفات السيلكت
$('.navbar-nav li a').click(function()
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
                    $('.navbar-nav a').removeClass('select');
                    $('.navbar-nav a[data-scroll="'+ blockID +'"]').addClass('select');
                }
            });
        });
    });
//end 
/* change background of navbar*/
$(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 400)
        {
            $('.navbar-default').css({
                'backgroundColor':'#fff',
                'color':'black',
                'border-bottom':'1px solid #ddd',
            })
            $('.nav .open .dropdown-menu').css({
                'background-color': '#ddd',
                'color': 'black',
            })
            $('.navbar-default .navbar-nav li a ').css({
                'color':'black',
            })
            $('.navbar-default .navbar-brand').css({
                'color':'black',
            })
            $('.navbar-nav li a.select').css({
                'color':'orange',
            })
        }
        else
        {
            $('.navbar-default').css({
                'backgroundColor':'transparent',
                'border-bottom':'transparent',
            })
            $('.nav .open .dropdown-menu').css({
                'background-color': '#777',
                'color': '#fff',
            })
            $('.navbar-default .navbar-nav li a ').css({
                'color':'#fff',
            })
            $('.navbar-default .navbar-brand').css({
                'color':'#fff',
            })
            $('.navbar-nav li a.select').css({
                'color':'orange',
            })
        }
    });
});
/*end change background of navbar*/
/*end navbar*/
/*start scroll to top*/
$(function()
{
    $('.scroll-to-top').click(function(e)
    {
         e.preventDefault();
         $('html , body').animate({
             scrollTop:0,
         },600);
    });
});

/*start fadein about img*/
$(window).scroll(function()
{
    if($(window).scrollTop() >= 500)
    {
        $('.about-img').animate({
            opacity:'1',
        },700)
    }
});
/*end fadein */
/*start carousel*/
$(function()
{
    $('.carousel').carousel({
        interval:7000,
    })
});
/*end carousel*/
/*start fraq*/
$(function()
{
    $('.first-question , .second-question , .third-question , .fourth-question , .fifth-question').on('click',function()
    {
        $('.first-question , .second-question , .third-question , .fourth-question , .fifth-question').removeClass('max-size');
        $(this).addClass('max-size');
    });
});
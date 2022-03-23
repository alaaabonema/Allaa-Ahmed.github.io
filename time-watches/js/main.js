/*satrt main slider*/
/*start nav links*/
$(function()
{
    $('.nav-item a').click(function(e)
    {
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
    });
});
$(function()
{
    $('.nav-item a').click(function(event)
    {
        event.preventDefault();
        $('html,body').animate({
            scrollTop:$('#'+ $(this).data('scroll')).offset().top,
        },700)
    });
});
$(function()
{
    'use strict';
    $(window).scroll(function()
    {
        $('.section').each(function()
        {
            if($(window).scrollTop() >= $(this).offset().top)
            {
                var sectionId=$(this).attr('id');
                $('.nav-item a').removeClass('active');
                $('.nav-item a[data-scroll="'+sectionId+'"]').addClass('active');
            }
        });
    });
});
$(function()
{
    $(window).scroll(function()
    {
    if($(window).scrollTop()>=600)
    {
    $('.navbar').css({
        position:'fixed',
        top:'0',
        left:'0',
        zIndex:'9999',
        width:'100%',
    });
    }
    else
    {
        $('.navabr').css({
            position:'relative',
            top:'0',
        });
    }
});
});
/*end nav links*/
/*start recommend slider*/
$(document).ready(function()
{
$('.slickslider ').slick({
autoplay:true,
autospeed:1200,
slidesToShow:1,
slidesToScroll:1,
dots:true,
arrows:true,
"nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
"prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',
});
});
/*end recommend slider*/
/*navbar toggeler*/
$(function()
{
    $('.navbar-toggler').click(function()
    {
        $('.nav-icons').toggleClass('active');
    });
});
/*end main slider*/
/*start testimonials slider*/
$(document).ready(function()
{
$('.testimonials-slider ').slick({
autoplay:true,
autospeed:1200,
slidesToShow:1,
slidesToScroll:1,
arrows:true,
"nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
"prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',
});
});
/*end testimonials slider*/
/*start scroll to top*/
/*end scroll to top*/
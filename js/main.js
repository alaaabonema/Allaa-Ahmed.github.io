$(document).ready(function()
{
    $('body').fadeIn(2000);
});
$(document).ready(function()
{
    $('.slick-slider').slick({
        autoplay:true,
        slidesToShow:1,
        slidesToScroll:1,
    })
});
/*end main-slider*/
/*start new collection*/
$(function()
{
    $('.new-card').click(function()
    {
        $(this).find('.card-basket').slideDown(700);
        $('.old-card .card-basket').slideUp();
        $('.old-close').fadeOut();
        $(this).parent().find('.new-close').fadeIn();
    });
});
$(function()
{
$('.new-close').click(function(e)
{
    e.preventDefault();
    $('.card-basket').slideUp(700);
    $('.new-close').fadeOut();
});
});
$(function()
{
    $('.old-card').click(function()
    {
        $(this).find('.card-basket').slideDown(700);
        $('.new-card .card-basket').slideUp();
        $('.new-close').fadeOut();
        $(this).parent().find('.old-close').fadeIn();
    });
});
$(function()
{
$('.old-close').click(function(e)
{
    e.preventDefault();
    $('.card-basket').slideUp(700);
    $('.old-close').fadeOut();
});
});
$(function()
{
    $('.card-input .increment').click(function(e)
    {
        e.preventDefault();
        var increval=$(this).parent().find('.shoes-number').val();
        $(this).parent().find('.shoes-number').val(++increval);
    });
    $('.card-input .decrement').click(function(e)
    {
        e.preventDefault();
        var decreval=$(this).parent().find('.shoes-number').val();
        if($(this).parent().find('.shoes-number').val()<= 0)
        {
            $(this).parent().find('.shoes-number').val();
        }
        else
        {
            $(this).parent().find('.shoes-number').val(--decreval);
        }
    });
});
/*end new collection*/
/*start scroll top*/
$(function()
{
$(window).scroll(function()
{
    if($(window).scrollTop() >= 550)
    {
        $('.scroll-top a').fadeIn();
    }
    else
    {
        $('.scroll-top a').fadeOut();
    }
});
});
$(function()
{
    $('.scroll-top a').click(function(event)
    {
        event.preventDefault();
        $('html , body').animate({
            scrollTop:0,
        })
    });
});
/*end scroll top*/
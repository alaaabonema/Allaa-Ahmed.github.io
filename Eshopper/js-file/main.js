/*start main slider*/
$(document).ready(function()
{
$('.slickslider').slick({
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
/*end mainslider*/
/*start category*/
$(function()
{
    $('.category-links li').click(function()
    {
        $('.category-dropdown').fadeOut(100);
        $(this).find('.category-dropdown').fadeIn(500);
    });
});
/*end category*/
/*start shipping free*/
$(function()
{
    $('.shipping-links a').click(function()
    {
       $('.shipping-links a').removeClass('active');
       $(this).addClass('active');
    });
});
$(function()
{
    $('.shipping-links .tshirt-link').click(function(e)
    {
        e.preventDefault();
        $('#blazers').fadeOut(100);
        $('#sun-glases').fadeOut(100);
        $('#kids').fadeOut(100);
        $('#pshirt').fadeOut(100);
        $('#tshirt').fadeIn();
    });
});
$(function()
{
    $('.shipping-links .blazers-link').click(function(e)
    {
        e.preventDefault();
        $('#tshirt').fadeOut(100);
        $('#sun-glases').fadeOut(100);
        $('#kids').fadeOut(100);
        $('#pshirt').fadeOut(100);
        $('#blazers').fadeIn();
    });
});
$(function()
{
    $('.shipping-links .blazers-link').click(function(e)
    {
        e.preventDefault();
        $('#tshirt').fadeOut(100);
        $('#sun-glases').fadeOut(100);
        $('#kids').fadeOut(100);
        $('#pshirt').fadeOut(100);
        $('#blazers').fadeIn();
    });
});
$(function()
{
    $('.shipping-links .sun-link').click(function(e)
    {
        e.preventDefault();
        $('#tshirt').fadeOut(100);
        $('#blazers').fadeOut(100);
        $('#kids').fadeOut(100);
        $('#pshirt').fadeOut(100);
        $('#sun-glases').fadeIn(100);
    });
});
$(function()
{
    $('.shipping-links .kids-link').click(function(e)
    {
        e.preventDefault();
        $('#tshirt').fadeOut(100);
        $('#blazers').fadeOut(100);
        $('#sun-glases').fadeOut(100);
        $('#pshirt').fadeOut(100);
        $('#kids').fadeIn(100);
    });
});
$(function()
{
    $('.shipping-links .pshirt-link').click(function(e)
    {
        e.preventDefault();
        $('#tshirt').fadeOut(100);
        $('#blazers').fadeOut(100);
        $('#kids').fadeOut(100);
        $('#sun-glases').fadeOut(100);
        $('#pshirt').fadeIn(100);
    });
});
/*end shipping free*/
/*start recommend slider*/
$(document).ready(function()
{
$('.recommend-slider').slick({
autoplay:true,
autospeed:1200,
slidesToShow:3,
slidesToScroll:3,
dots:true,
arrows:true,
"nextArrow":'<button type="button" class="leftslick"><i class="fa fa-arrow-right"></i></button>', 
"prevArrow":'<button type="button" class="rightslick"><i class="fa fa-arrow-left"></i></button>',
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
/*end recommend slider*/
/*start scroll to top*/
$(function()
{
    $(window).scroll(function()
    {
        if($(window).scrollTop() >= 500)
        {
            $('.scroll-to-top').fadeIn();
        }
        else
        {
            $('.scroll-to-top').fadeOut();
        }
    });
});
$(function()
{
    $('.scroll-to-top').click(function()
    {
        $('html , body').animate({
            scrollTop:0,
        })
    });
});
/*end scrollto top*/
/*cart input*/
$(function()
{
    $('.item-input .fa-plus').click(function()
    {
        var inval=$(this).parent().find('input').val();
        $(this).parent().find('input').val(++inval)
    });
});
$(function()
{
    $('.item-input .fa-minus').click(function()
    {
        var inval=$(this).parent().find('input').val();
        $(this).parent().find('input').val(--inval)
    });
});
/*end cart input*/
$('.car-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    "nextArrow": '<button type="button" class="leftslick"><i class="fa-solid fa-angle-right"></i></button>',
    "prevArrow": '<button type="button" class="rightslick"><i class="fa-solid fa-angle-left"></i></button>',
  });
  /*start car show*/
  $(document).ready(function()
  {
      $('.column-view').click(function(event)
      {
          event.preventDefault();
          $(this).addClass('active');
          $('.grid-view').removeClass('active');
          $(this).parents().find('.car-card').parent().removeClass('col-lg-4');
          $(this).parents().find('.car-card').parent().addClass('col-lg-12');
          $(this).parents().find('.car-card').addClass('list');
      });
      $('.grid-view').click(function(event)
      {
          event.preventDefault();
          $(this).addClass('active');
          $('.column-view').removeClass('active');
          $(this).parents().find('.car-card').parent().removeClass('col-lg-12');
          $(this).parents().find('.car-card').parent().addClass('col-lg-4');
          $(this).parents().find('.car-card').removeClass('list');
      });
  });
  $(document).ready(function()
  {
      $('.column-view').click(function(event)
      {
          event.preventDefault();
          $(this).parents().find('.car-card').parent().removeClass('col-md-6');
          $(this).parents().find('.car-card').parent().addClass('col-md-12');
          $(this).parents().find('.car-card').addClass('list');
      });
      $('.grid-view').click(function(event)
      {
          event.preventDefault();
          $(this).parents().find('.car-card').parent().removeClass('col-md-12');
          $(this).parents().find('.car-card').parent().addClass('col-md-6');
          $(this).parents().find('.car-card').removeClass('list');
      });
  });
  /*end car show*/
  /*start search engine*/
  $(document).ready(function()
  {
      $('.search-icon').click(function(e)
      {
          e.preventDefault();
          $('.engine-fixed-search').slideDown();
      });
      $('.close-engine').click(function(e)
      {
          e.preventDefault();
          $('.engine-fixed-search').slideUp();
      });
  });
  /*end search engine*/ 
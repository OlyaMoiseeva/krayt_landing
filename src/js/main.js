$(document).ready(function () {

  var carousel;

  var slides;

  setSlides();

  slider(slides);

  var initialSlides = slides;

  $(window).on('resize', function() {

    setSlides();
    se();
    if (initialSlides !== slides) {
      slider(slides);
      initialSlides = slides;
    }
  });

  function setSlides() {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      slides = 3;
    } else if (window.matchMedia('(min-width: 800px)').matches) {
      slides = 1;
    } else {
      slides = 0;
    }
    return slides;
  }

  function slider(slides) {
    carousel = $("#carousel").waterwheelCarousel({
      flankingItems: slides,
      movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
      },
      movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
      },
      movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
      },
      movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
      },
      clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
      }
    });

    
  }
  $('#prev').bind('click', function () {
      carousel.prev();
      return false
    });

    $('#next').bind('click', function () {
      carousel.next();
      return false;
    });

    $('#reload').bind('click', function () {
      newOptions = eval("(" + $('#newoptions').val() + ")");
      carousel.reload(newOptions);
      return false;
    });


    $('.carousel').slick({
      slidesPerRow: 3,
      rows: 1,
      responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesPerRow: 2,
          rows: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesPerRow: 1,
          rows: 1,
        }
      }
    ]
  });
  function se() {  
    $('.slick-prev').html('<div class="slick-arrow">&#8592</div>');
    $('.slick-next').html('<div class="slick-arrow">&#8594</div>');
  };
  se();
});
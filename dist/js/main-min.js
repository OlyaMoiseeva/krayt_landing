$(document).ready(function(){var carousel,slides;setSlides(),slider(slides);var initialSlides=slides;function setSlides(){return slides=window.matchMedia("(min-width: 1024px)").matches?3:window.matchMedia("(min-width: 800px)").matches?1:0}function slider(e){carousel=$("#carousel").waterwheelCarousel({flankingItems:e,movingToCenter:function(e){$("#callback-output").prepend("movingToCenter: "+e.attr("id")+"<br/>")},movedToCenter:function(e){$("#callback-output").prepend("movedToCenter: "+e.attr("id")+"<br/>")},movingFromCenter:function(e){$("#callback-output").prepend("movingFromCenter: "+e.attr("id")+"<br/>")},movedFromCenter:function(e){$("#callback-output").prepend("movedFromCenter: "+e.attr("id")+"<br/>")},clickedCenter:function(e){$("#callback-output").prepend("clickedCenter: "+e.attr("id")+"<br/>")}})}function setArrows(){$(".slick-prev").html('<div class="slick-arrow">&#8592</div>'),$(".slick-next").html('<div class="slick-arrow">&#8594</div>')}$(window).on("resize",function(){setSlides(),setArrows(),initialSlides!==slides&&(slider(slides),initialSlides=slides)}),$("#prev").bind("click",function(){return carousel.prev(),!1}),$("#next").bind("click",function(){return carousel.next(),!1}),$("#reload").bind("click",function(){return newOptions=eval("("+$("#newoptions").val()+")"),carousel.reload(newOptions),!1}),$(".carousel").slick({slidesPerRow:3,rows:1,responsive:[{breakpoint:1280,settings:{slidesPerRow:2,rows:1}},{breakpoint:950,settings:{slidesPerRow:1,rows:1}}]}),setArrows(),$(".header__burger").on("click",function(){$(".header__link").toggleClass("header__link_des"),$(".header__menu").toggleClass("header__menu_mob")})});
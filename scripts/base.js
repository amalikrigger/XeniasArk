$(document).ready(function(){

  $("#openMenu").click(function(){

      var menu = $("#sidebar");
      if ($(menu).is(":visible")) {
          $(menu).animate({left: -350}, 500, function() {$(menu).hide();});
      } else {
          $(menu).show().animate({left: 0}, 500);
      }

  });

  var winHeight = $( window ).height();

  $( window ).scroll( function(){
    $('.scrollIcon').css("display", "grid");
    var scrTop = $( document ).scrollTop() / winHeight,
    scrTopFixed = scrTop.toFixed(2),
    scrTransform = scrTopFixed * 360;

      $('.scrollIcon').css({
        '-webkit-transform': "rotateZ(" + scrTransform + "deg)",
        '-moz-transform': "rotateZ(" + scrTransform + "deg)",
        'transform': "rotateZ(" + scrTransform + "deg)",
      });

    });

  $(window).scroll($.debounce( 250, function(){
    $('.scrollIcon').hide();
  }));

  $('ul.menu a').click(function(){
    alert('Section coming soon!');
    return false;
  });

});


$(document).on("scroll", function () {

  var pageTop = $(document).scrollTop();

  if(pageTop > $(window).height() - 280){
    $('.scrollIcon').css('z-index', 1);
  }else if(pageTop < $(window).height()){
    $('.scrollIcon').css('z-index', 0);
  }
})

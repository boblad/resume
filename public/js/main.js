;(function ($){
    $(function() {
      window.setTimeout(function() {
        $('.header__title').removeClass('opaque');
        $('.header__middle').removeClass('opaque');
        window.setTimeout(function() {
          $('.header__sub-title').removeClass('opaque');
        }, 1800)
      }, 200)
    });
})(jQuery);

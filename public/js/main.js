;(function ($){
    $(function() {
      window.setTimeout(function() {
        $('.nav__title').removeClass('opaque');
        $('.nav__sub').removeClass('opaque');
        window.setTimeout(function() {
          $('.nav__sub-title').removeClass('opaque');
        }, 1800)
      }, 200)
    });
})(jQuery);

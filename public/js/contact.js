;(function ($){
    $(function() {
      // $('#subject').focus(function() {
      //   $('#subject').addClass('contact__focussed');
      // });
      // $('#subject').focusout(function() {
      //   $('#subject').removeClass('contact__focussed');
      // });
      //
      // $('#message').focus(function() {
      //   $('#message').addClass('contact__focussed');
      // });
      // $('#message').focusout(function() {
      //   $('#message').removeClass('contact__focussed');
      // });
      //
      // $('#email').focus(function() {
      //   $('#email').addClass('contact__focussed');
      // });
      // $('#email').focusout(function() {
      //   $('#email').removeClass('contact__focussed');
      // });

      $('.contact__mail').click(function() {

        $('.contact__form').removeClass('slide-out');
        window.setTimeout(function() {
          $('.contact__form').removeClass('first');
        }, 200)
        window.setTimeout(function() {
          $('.contact__arrow-down').removeClass('open');
        }, 1000)
        window.setTimeout(function() {
          $('.contact__mail').addClass('shrink');
          $('.mailbox__door').addClass('open');
        }, 1200)

        window.setTimeout(function() {
          $('.contact__mail').addClass('send-mail');
        }, 2000)

        window.setTimeout(function() {
          $('.mailbox__door').removeClass('open');
        }, 2500)

        window.setTimeout(function() {
          $('.mailbox__flag').addClass('up');
        }, 2700)
      })

    });
})(jQuery);

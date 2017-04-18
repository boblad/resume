;(function ($){
    $(function() {

      var mailAnim = function() {
        $('.contact__form').removeClass('slide-out');
        $('.contact__submit').removeClass('bring');
        $('.contact__submit').removeClass('bring-up');
        window.setTimeout(function() {
          $('.contact__form').removeClass('first');
        }, 200)
        window.setTimeout(function() {
          $('.contact__arrow-down').removeClass('open');
          $('.contact__arrow-down').removeClass('open-back');


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

        window.setTimeout(function() {
          $('.contact__thank-you').addClass('show');
        }, 2900)
      }

      var submitForm = function() {
        var data = {
          email: $('#email').val(),
          message: $('#message').val(),
        }
        $.ajax({
          url: '/contact/',
          type: 'POST',
          data: data,
          success: function(res) {
            mailAnim();
          },
          error: function(err) {
            console.log('err', err)
          }
        })
      }

      $('.contact__submit').click(function() {
        submitForm();
      })

      $('.contact__submit-mobile').click(function() {
        submitForm();
      })

      $('.contact__click-here').click(function() {
        mailAnim();
		var data = {
			email: "clicked",
			message: "just a click"
		}
        $.ajax({
          url: '/contact/',
          type: 'POST',
          data: data,
          success: function(res) {
          },
          error: function(err) {
            console.log('err', err)
          }
        })
      })

    });
})(jQuery);

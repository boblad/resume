;(function ($){
    $(function() {
      var hasOpened = false;
      let leftStart = $('.nav__title').offset().left;
      let titleWidth = $('.nav__title').width();
      let finalWidth = 195;
      let navDistanceTop = $('.nav__container').offset().top;
      let fontSizeStart = 45;
      let fontSizeEnd = 20;

      let sizeRatio = (fontSizeStart - fontSizeEnd) / leftStart 
      console.log('asdfff', 25 / navDistanceTop)
      console.log('siz', sizeRatio)

      $(window).scroll(function() {
        let distanceFromTop = $('.nav__container').offset().top - window.pageYOffset;

        console.log('sizeR', distanceFromTop)

        if (window.pageYOffset > $('.nav__container').offset().top && $('.nav').hasClass('pin') === false) {
          console.log('greater')
          $('.nav').addClass('pin')
          $('.nav__title').addClass('pin')
          $('.nav__sub').addClass('pin')
        } else if (window.pageYOffset <= $('.nav__container').offset().top && $('.nav').hasClass('pin')) {
          $('.nav').removeClass('pin')
          $('.nav__title').removeClass('pin')
          $('.nav__sub').removeClass('pin')
        }

         var skillsT = $('.skills__section').offset().top;
         var skillsH = $('.skills__section').outerHeight();

         var wH = $(window).height();
         var wS = $(this).scrollTop();

         var profileT = $('.profile').offset().top;
         var profileH = $('.profile').outerHeight();

         var experienceT0 = $('#experience-0').offset().top;
         var experienceH0 = $('#experience-0').outerHeight();

         var experienceT1 = $('#experience-1').offset().top;
         var experienceH1 = $('#experience-1').outerHeight();

         var experienceT2 = $('#experience-2').offset().top;
         var experienceH2 = $('#experience-2').outerHeight();

         var contactT = $('.contact').offset().top;
         var contactH = $('.contact').outerHeight();


         if (wS > (skillsT + skillsH - wH)) {
           window.setTimeout(function() {
             $('#react').addClass('level-9');
             $('#react-native').addClass('level-9');
             $('#javascript').addClass('level-9');
             $('#html-skill').addClass('level-9');
             $('#css-scss').addClass('level-9');
             $('#python').addClass('level-9');
             $('#c-plus-plus').addClass('level-8');
             $('#wordpress').addClass('level-7');
             $('#unix').addClass('level-8');
             $('#django').addClass('level-8');
             $('#php').addClass('level-5');
             $('#rails').addClass('level-6');
             $('#java').addClass('level-7');
             $('#native-android').addClass('level-6');
           }, 400)
         }

         if (wS > (experienceT0+experienceH0-wH - 300)) {
           $('#experience-0').removeClass('flipped');
         }

         if (wS > (experienceT1+experienceH1-wH - 300)) {
           $('#experience-1').removeClass('flipped');
         }

         if (wS > (experienceT2+experienceH2-wH - 300)) {
           $('#experience-2').removeClass('flipped');
         }

         if (wS > (contactT+contactH-wH - 300) && hasOpened == false) {
           hasOpened = true
           $('.contact__arrow-down').addClass('open');
           window.setTimeout(function() {
             $('.mailbox').removeClass('hide');
           }, 1000)
           window.setTimeout(function() {
             $('.contact__arrow-down').addClass('open-back');
             $('.contact__form').addClass('slide-out first');
             $('.contact__submit').addClass('bring');
           }, 1500)
           window.setTimeout(function() {
             $('.contact__submit').addClass('bring-up');
           }, 2000)
         }
      });

    });
})(jQuery);

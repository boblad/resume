;(function ($){
    $(function() {

      $(window).scroll(function() {
         var skillsT = $('.skills__section').offset().top;
         var skillsH = $('.skills__section').outerHeight();

         var wH = $(window).height();
         var wS = $(this).scrollTop();

         var profileT = $('.profile').offset().top;
         var profileH = $('.profile').outerHeight();

         var experienceT1 = $('#experience-1').offset().top;
         var experienceH1 = $('#experience-1').outerHeight();

         var experienceT2 = $('#experience-2').offset().top;
         var experienceH2 = $('#experience-2').outerHeight();

         var contactT = $('.contact').offset().top;
         var contactH = $('.contact').outerHeight();

         if (wS > (profileT+profileH-wH - 300)) {
            $('.profile__paragraph-wrap').removeClass('closed');
         }



         if (wS > (skillsT+skillsH-wH)) {
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
             $('#django').addClass('level-7');
             $('#php').addClass('level-5');
             $('#rails').addClass('level-5');
             $('#java').addClass('level-6');
             $('#native-android').addClass('level-5');
           }, 400)
         }

         if (wS > (experienceT1+experienceH1-wH - 300)) {
           $('#experience-1').removeClass('flipped');
         }

         if (wS > (experienceT2+experienceH2-wH - 300)) {
           $('#experience-2').removeClass('flipped');
         }

         if (wS > (contactT+contactH-wH - 300)) {
           $('.contact__arrow-down').addClass('open');
           window.setTimeout(function() {
             $('.mailbox').removeClass('hide');
           }, 1000)
           window.setTimeout(function() {
             $('.contact__form').addClass('slide-out first');
           }, 1500)
         }
      });

    });
})(jQuery);

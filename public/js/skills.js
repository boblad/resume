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

         if (wS > (profileT+profileH-wH - 300)) {
            $('.profile__absolute').removeClass('sit-left');
            $('.profile__absolute').removeClass('sit-right');
         }


         if (wS > (skillsT+skillsH-wH)) {
           window.setTimeout(function() {
             $('#react').addClass('level-10');
             $('#react-native').addClass('level-10');
             $('#javascript').addClass('level-10');
             $('#html-skill').addClass('level-10');
             $('#css-scss').addClass('level-10');
             $('#python').addClass('level-8');
             $('#wordpress').addClass('level-8');
             $('#django').addClass('level-7');
             $('#php').addClass('level-4');
             $('#rails').addClass('level-3');
           }, 400)
         }

         if (wS > (experienceT1+experienceH1-wH - 300)) {
           $('#experience-1').removeClass('flipped');
         }

         if (wS > (experienceT2+experienceH2-wH - 300)) {
           $('#experience-2').removeClass('flipped');
         }
      });

    });
})(jQuery);

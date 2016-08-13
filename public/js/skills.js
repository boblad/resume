;(function ($){
    $(function() {

      $(window).scroll(function() {
         var skillsT = $('.skills__section').offset().top;
         var skillsH = $('.skills__section').outerHeight();

         var wH = $(window).height();
         var wS = $(this).scrollTop();

         var profileT = $('.profile').offset().top;
         var profileH = $('.profile').outerHeight();

         var experienceT = $('.experience__content').offset().top;
         var experienceH = $('.experience__content').outerHeight();

         if (wS > (profileT+profileH-wH - 300)) {
            $('.profile').removeClass('flipped');
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

         if (wS > (experienceT+experienceH-wH)) {
           $('.experience__content').addClass('experience__show');
         }
      });

    });
})(jQuery);

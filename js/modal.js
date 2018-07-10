(function(global) {

  var close_btn = $('.close-btn');

  var type_btn = $('.type-btn'),
      step_btn = $('.step-btn');

  var type_modal = $('.program-type-modal'),
      step_modal = $('.program-step-modal');

  var maskHeight = $(document).height(),
      maskWidth = $(document).width(),
      mask = $('program');

  //     console.log(maskHeight);
  //     console.log(maskWidth);

  type_btn.click('click', function(e){
    type_modal.removeClass('none');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(0.5)');
    $('html, body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    type_modal.css('z-index', '900');
  });
  step_btn.click('click', function(e){
    step_modal.removeClass('none');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(0.5)');
   $(type_modal).css('background-color', 'red');
    $('html, body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    type_modal.css('z-index', '900');
  });

  close_btn.click('click', function(e) {
    type_modal.addClass('none');
    step_modal.addClass('none');
    $('html, body').off('scroll touchmove mousewheel');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(1)');

  })
}(window));
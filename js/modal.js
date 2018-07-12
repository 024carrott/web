(function(global) {

  var program = $('.program'),
      close_btn = $('.close-btn');

  var type_btn = $('.type-btn'),
      step_btn = $('.step-btn');

  var type_modal = $('.program-type-modal'),
      step_modal = $('.program-step-modal');

  var contact_btn = $('.modal-contact-btn');

  // open

  type_btn.click('click', function(e){
    if(type_modal.hasClass('none') === true) {
      type_modal.removeClass('none');
      $('.program, .fix-navigation, .case').css('filter', 'brightness(0.4)');    
      $('.program, .fix-navigation, .case').css('-webkit-filter', 'brightness(0.4)');    
      $('html, body').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
      });
    }
    
  });

  step_btn.click('click', function(e){
    step_modal.removeClass('none');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(0.4)');
    $('.program, .fix-navigation, .case').css('-webkit-filter', 'brightness(0.4)');
    $('.program, .fix-navigation, .case').css('-ms-filter', 'brightness(0.4)');
    $('html, body').on('scroll touchmove mousewheel', function(event) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });

  // close

  close_btn.click('click', function(e) {
    type_modal.addClass('none');
    step_modal.addClass('none');
    $('html, body').off('scroll touchmove mousewheel');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(1)');
    $('.program, .fix-navigation, .case').css('-webkit-filter', 'brightness(1)');
    $('.program, .fix-navigation, .case').css('-ms-filter', 'brightness(1)');
  });

  $('.case').click('click', function(e) {
    type_modal.addClass('none');
    step_modal.addClass('none');
    $('html, body').off('scroll touchmove mousewheel');
    $('.program, .fix-navigation, .case').css('filter', 'brightness(1)');
    $('.program, .fix-navigation, .case').css('-webkit-filter', 'brightness(1)');
    $('.program, .fix-navigation, .case').css('-webkit-ms', 'brightness(1)');
  });


  // contact


  
}(window));
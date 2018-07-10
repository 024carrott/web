(function(global) {

  var close_btn = $('.close-btn');

  var type_btn = $('.type-btn'),
      step_btn = $('.step-btn');

  var type_modal = $('.program-type-modal'),
      step_modal = $('.program-step-modal');

  // var modal_container = $('program-type-modal');

  // // create Elements

  // var bar = document.createElement('img'),
  //     span = document.createElement('span'),
  //     close_btn = document.createElement('img'),
  //     modal_title = document.createElement('h5'),
  //     modal_sub_title = document.createElement('p'),
  //     modal_img = document.createElement('img'),
  //     contact_btn = document.createElement('button');

  // modal_container.appendChild('bar');
  // modal_container.appendChild('span');
  // modal_container.appendChild('close_btn');
  // modal_container.appendChild('modal_title');
  // modal_container.appendChild('modal_sub_title');
  // modal_container.appendChild('modal_img');
  // modal_container.appendChild('contact_btn');

  // bar.setAttribute('class' , 'bar');
  // close_btn.setAttribute('class', 'close-btn');
  // close_btn.setAttribute('src', 'assets/bar-icon.png');
  // modal_title.setAttribute('class', 'modal-title');
  // modal_sub_title.setAttribute('class', 'modal-sub-title');
  // modal_img.setAttribute('class', 'modal-img modal-step-img');
  // modal_img.setAttribtue('src', 'assets/modal-step.png');
  

  // span.innerText('맞춤형');









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
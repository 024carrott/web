(function(global) {
  var html = $('html');

  var nav = $('.navigation'),
      nav_logo = $('.nav-logo'),
      nav_summary = $('.nav-summary')
      nav_program = $('.nav-program'),
      nav_case = $('.nav-case'),
      nav_price = $('.nav-price'),
      nav_status = $('.nav-status'),
      nav_contact = $('.nav-contact');

  var fix_nav = $('.fix-navigation'),
      fix_logo = $('.fix-nav-logo'),
      fix_summary = $('.fix-nav-summary')
      fix_program = $('.fix-nav-program'),
      fix_case = $('.fix-nav-case'),
      fix_price = $('.fix-nav-price'),
      fix_status = $('.fix-nav-status'),
      fix_contact = $('.fix-nav-contact');

  var main_start = $('.main'),
      summary_start = $('.summary'),
      program_start = $('.program'),
      case_start = $('.case'),
      price_start = $('.price'),
      status_start = $('.status'),
      contact_start = $('.contact');


  var main_btn = $('.main-btn');

  function scrollEvent() {
    $(window).scroll('scroll', function(e) {
      
      var nav_scrollY = window.scrollY || window.pageYOffset;
      
      if(nav_scrollY >= 100) {
        $(fix_nav).fadeIn(800).attr('class', 'navigation fix-navigation');
      } else {
        $(fix_nav).fadeOut(300).attr('class', 'navigation fix-navigation none');
      } 

      clickNav(nav_scrollY);
      ani(nav_scrollY);
    })
    
  };
      
  function clickNav(Y) {
    var scrollPosition_main = $(html).offset().top;
        scrollPosition_summary = $(summary_start).offset().top - 80;
        scrollPosition_program = $(program_start).offset().top - 80,
        scrollPosition_case = $(case_start).offset().top - 80,
        scrollPosition_price = $(price_start).offset().top - 80,
        scrollPosition_status = $(status_start).offset().top - 80,
        scrollPosition_contact = $(contact_start).offset().top - 80;


    $(main_btn).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_summary
      }, 1000)
    });
    $(nav_summary).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_summary
      }, 1000)
    });
    $(nav_program).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_program
      }, 1200)
    });
    $(nav_case).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_case
      }, 1300)
    });
    $(nav_price).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_price
      }, 1400)
    });
    $(nav_status).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_status
      }, 1500)
    });
    $(nav_contact).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_contact
      }, 1600)
    });

    // fix-navigation-event

    $(fix_logo).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_main
      }, 1000)
    })
    $(fix_summary).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_summary
      }, 1000)
    });
    $(fix_program).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_program
      }, 1200)
    });
    $(fix_case).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_case
      }, 1300)
    });
    $(fix_price).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_price
      }, 1400)
    });
    $(fix_status).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_status
      }, 1500)
    });
    $(fix_contact).click(function() {
      $(html).stop().animate({
        scrollTop: scrollPosition_contact
      }, 1600)
    });

    if(scrollPosition_summary <= Y && Y < scrollPosition_program - 30){
      $(fix_summary).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_summary).css('color', '#141414');
    }
    if(scrollPosition_program - 30 <= Y && Y < scrollPosition_case - 30){
      $(fix_program).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_program).css('color', '#141414');
    }
    if(scrollPosition_case - 30 <= Y && Y < scrollPosition_price - 30){
      $(fix_case).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_case).css('color', '#141414');
    }
    if(scrollPosition_price - 30 <= Y && Y < scrollPosition_status - 30){
      $(fix_price).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_price).css('color', '#141414');
    }
    if(scrollPosition_status - 30 <= Y && Y < scrollPosition_contact - 30){
      $(fix_status).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_status).css('color', '#141414');
    }
    if(scrollPosition_contact - 30 <= Y){
      $(fix_contact).css('color', 'rgb(249, 175, 72)');
    }else {
      $(fix_contact).css('color', '#141414');
    }
    
};

function ani(Y) {
  var position_summary = $(summary_start).offset().top - 300;

  var diversity = $('.diversity'),
      solving = $('.solving'),
      empathy = $('.empathy');

  var map = $('.map'),
      map_text = $('.map-text');

  if( Y > position_summary) {
    $(diversity).animate({
      opacity: 1,
    }, 1000);
    $(solving).animate({
      opacity: 1,
    }, 1500);
    $(empathy).animate({
      opacity: 1,
    }, 2000);
  }

  if( Y > scrollPosition_status){
    $(map).animate({
      opacity: 1,
      // top: '10px'
    }, 1200);
    $(map_text).animate({
      opacity: 1,
      top: 0
    }, 1500);
  }

}


  scrollEvent();
  clickNav();
}(window));
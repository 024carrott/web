(function(global) {

  var active_box = $('.pic-active');
  
  var talk = $('.pic-talk'),
      speaker = $('.pic-speaker'),
      artist = $('.pic-artist'),
      mc = $('.pic-mc'),
      damq = $('.pic-damq');
  
  var img = $('.pic-img');

  function click() {
    
    talk.click('click', function() {
      $(active_box).animate({
        left: 0
      }, 500);
      setTimeout(function() {
        img.attr('src', 'assets/picture-talk.png');
      }, 300);
    });
    speaker.click('click', function() {
      $(active_box).animate({
        left: 140
      }, 500);
      setTimeout(function() {
        img.attr('src', 'assets/picture-speaker.png');
      }, 300);
    });
    artist.click('click', function() {
      $(active_box).animate({
        left: 280
      }, 500);
      setTimeout(function() {
        $(img).attr('src', 'assets/picture-artist.png');      
      }, 300);
    });
    mc.click('click', function() {
      $(active_box).animate({
        left: 420
      }, 500);
      setTimeout(function() {
        $(img).attr('src', 'assets/picture-mc.png');      
      }, 530);
    });
    damq.click('click', function() {
      $(active_box).animate({
        left: 558
      }, 500);
      setTimeout(function() {
        $(img).attr('src', 'assets/picture-damq.png');      
      }, 300);
    });

  }

  click();
}(window));
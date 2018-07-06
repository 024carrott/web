(function(global) {

  var char_img = $('.char-img');

  var container = $('.char-img-container');
      damq = $('.damq')
      speaker = $('.speaker'),
      stage = $('.stage'),
      mc = $('.mc'),
      artist = $('.artist');
      
  
  container.mouseover(function() {
    char_img.attr('src', 'assets/char-main.png')
  })
  damq.mouseover(function() {
    char_img.attr('src', 'assets/char-damq.png')
  })
  speaker.mouseover(function() {
    char_img.attr('src', 'assets/char-speaker.png')
  })
  stage.mouseover(function() {
    char_img.attr('src', 'assets/char-stage.png')
  })
  mc.mouseover(function() {
    char_img.attr('src', 'assets/char-mc.png')
  })
  artist.mouseover(function() {
    char_img.attr('src', 'assets/char-artist.png')
  })

}(window));
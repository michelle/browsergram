$(function() {
  console.log('wtf');
  
  var vigleft = $('<div></div>').addClass('vigleft').css({'-webkit-filter': 'blur(3px)'});
  var vigright = $('<div></div>').addClass('vigright').css({'-webkit-filter': 'blur(3px)'});
  var vigtop = $('<div></div>').addClass('vigtop').css({'-webkit-filter': 'blur(3px)'});
  var vigbottom = $('<div></div>').addClass('vigbottom').css({'-webkit-filter': 'blur(3px)'});
  $('body').append([vigleft, vigtop, vigbottom, vigright]);

  var filters = ['blur(6px)',
                 'blur(5px) contrast(10) grayscale(0.6) sepia(0.6)',
                 'sepia(0.8)',
                 'sepia(0.8) saturate(8)',
                 'contrast(10) grayscale(0.6) hue-rotate(330deg) saturate(8.8) sepia(0.5)',
                 'contrast(10) sepia(0.6)',
                 'blur(2px) contrast(10) grayscale(0.6) hue-rotate(180deg) saturate(8.8) sepia(0.5)',
                 'hue-rotate(90deg)',
                 'grayscale(1)',
                 'blur(2px) contrast(10) grayscale(0.9) sepia(0.5)',
                 'invert(1)'];

  var rand = Math.floor(Math.random() * filters.length);
  $('body').css({'-webkit-filter': filters[rand]});



});

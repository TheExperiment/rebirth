var _winW = window.innerWidth; // width of the window
var _winH = window.innerHeight;

var scrollTop = 0; // keeps track of scroll position
var isTouchDevice;

$(function() {
  var WIN = $(window);
  var DOC = $(document);
  var BODY = $("body");
  var logoCount = $('.jsLogo').length;
  var z = 1;

  resizeHandler(); // Calculate sizes right away

// EVENTS
/////////

  // UTIL EVENTS
  WIN.on('resize',resizeHandler);

  WIN.on('touchstart',function(){
    isTouchDevice = true;
  })
  WIN.on('wheel',scrollHandler);
  WIN.on('scroll',scrollHandler);
  WIN.on('touchmove',scrollHandler);

  WIN.on('mousemove',mousemoveHandler);

  setInterval(function(){
    $('.grit').css({
      'background-position-y': Math.floor(Math.random()*100),
      'background-position-x': Math.floor(Math.random()*100)
    })
  },10)

  setInterval(function(){
    var logo = $('.jsLogo').eq(Math.floor(Math.random()*logoCount));
    var blur = Math.floor(Math.random() * 10);
    logo.css({
      'filter': 'blur('+blur+'px)',
      transition: Math.ceil(Math.random() * 2000) + 1000 + 'ms',
      backgroundColor: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')'
    })
    $('.jsLine').css({
      color: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
    })
    $('path', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.5s'
    })})
    $('circle', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.8s'
    })})
    $('rect', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.4s'
    })})
    $('polygon', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '1s'
    })})

  },500);

  setInterval(function(){
    var logo = $('.jsLogo');
    logo.css({
      'filter': 'blur(0)',
      transition: '2s',
      backgroundColor: '#222',
    })
    $('path', logo).css({
      fill: 'inherit',
      transition: '.5s'
    })
    $('circle', logo).css({
      fill: 'inherit',
      transition: '.5s'
    })
    $('rect', logo).css({
      fill: 'inherit',
      transition: '.5s'
    })
    $('polygon', logo).css({
      fill: 'inherit',
      transition: '.5s'
    })
  },2000);

// FUNCTIONS
////////////


  function scrollHandler(e) {
    var oldScrollTop = scrollTop;
    scrollTop = WIN.scrollTop();
    var moved = scrollTop - oldScrollTop;
    if (scrollTop > _winH/4 && !BODY.hasClass('is-scrolled')) {
      BODY.addClass('is-scrolled')
    } else if (scrollTop < _winH/4 && BODY.hasClass('is-scrolled')) {
      BODY.removeClass('is-scrolled')
    }
    if ((moved < 0 && !BODY.hasClass('is-scrolling-up')) || scrollTop >= $('footer').offset().top + $('footer').height() - _winH) {
      BODY.addClass('is-scrolling-up')
    } else if (moved > 0 && BODY.hasClass('is-scrolling-up') &&  scrollTop < $('footer').offset().top + $('footer').height() - _winH) {
      BODY.removeClass('is-scrolling-up')
    }
  }

  function mousemoveHandler(e) {
    // if (BODY.hasClass('is-images')) {
    //   $('.imageNav').each(function () {
    //    this.style.setProperty( 'top', e.pageY - scrollTop, 'important' );
    //   })
    // }
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.innerWidth;
    _winH = window.innerHeight;
  }
})

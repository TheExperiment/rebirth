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
  },70)

  setInterval(function(){
    var logo = $('.jsLogo').eq(Math.floor(Math.random()*logoCount));
    blip(logo)

  },500);
  $('.jsLogo').on('mouseenter',function(){
    blip($(this))
  })
  function blip(logo) {
    var blur = Math.floor(Math.random() * 10);
    var color = Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)
    logo.css({
      filter: 'blur('+blur+'px)',
      transition: Math.ceil(Math.random() * 2000) + 1000 + 'ms',
      backgroundColor: 'rgb('+color+')',
      color: 'rgba('+color+',.5)',
    })
    $('.jsExpLogo').css({
      filter: 'blur('+blur/3+'px)',
      transition: '.5s',
      fill: 'rgb('+color+')'
    })

    $('.jsLine').css({
      color: 'rgb('+color+')',
      transition: '.5s',
    })
    $('.jsCaret').css({
      fill: 'rgb('+color+')',
      transition: '.5s',
    })
    $('path', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.5s',
      transition: '.8s'
    })})
    $('circle', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.8s',
      transition: '.8s'
    })})
    $('rect', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '.4s',
      transition: '.8s'
    })})
    $('polygon', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transition: '1s',
      transition: '.8s'
    })})
    setTimeout(function(){
      $('.jsExpLogo').css({
        filter: 'blur(0)',
        fill: '#352F2F',
      })
      logo.css({
        'filter': 'blur(0)',
        transition: '2s',
        backgroundColor: '#352F2F',
      })
      $('path', logo).css({
        fill: 'inherit',
        transition: '1s'
      })
      $('circle', logo).css({
        fill: 'inherit',
        transition: '1.2s'
      })
      $('rect', logo).css({
        fill: 'inherit',
        transition: '1.4s'
      })
      $('polygon', logo).css({
        fill: 'inherit',
        transition: '.6s'
      })
    },2000);
  }

// FUNCTIONS
////////////


  function scrollHandler(e) {
    if (_winW > 800) {
      e.preventDefault()
    }
    var oldScrollTop = scrollTop;
    scrollTop = WIN.scrollTop();
    var moved = scrollTop - oldScrollTop;
    var color = 'rgb('+Number(Math.floor(Math.random()*155)+100)+','+Number(Math.floor(Math.random()*155)+100)+','+Number(Math.floor(Math.random()*155)+100)+')'
    BODY.css({
      background: color,
      transition: '.6s'
    })
    $('.jsContact').css({
      background: color,
      transition: '.6s'
    })
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

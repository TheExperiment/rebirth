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

  $('.jsContact').on('mouseleave', function() {
    $('.jsLogo').css({
      transform: 'translate3d(0,0,0)'
    })
  })
  $('.jsContact').on('mouseenter', function(){
    blip($('.jsLogo'));
    $('.jsLogo').eq(0).css({
      transform: 'translateY('+ 4.1666+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(1).css({
      transform: 'translateY('+8.333+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(2).css({
      transform: 'translateY('+-8.333+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(3).css({
      transform: 'translateY('+-16.666+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(4).css({
      transform: 'translateX('+ 4.1666+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(5).css({
      transform: 'translateY('+ -4.1666+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(6).css({
      transform: 'translateY('+ 4.1666+'vw)',
      transition: '.4s'
    })
    $('.jsLogo').eq(7).css({
      transform: 'translateX('+ 8.333+'vw)',
      transition: '.4s'
    })
  })

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
      // filter: 'blur('+blur+'px)',
      transitionDuration: Math.ceil(Math.random() * 2000) + 1000 + 'ms',
      backgroundColor: 'rgb('+color+')',
      color: 'rgba('+color+',.5)',
    })
    $('.jsExpLogo').css({
      // filter: 'blur('+blur/3+'px)',
      transitionDuration: '.5s',
      fill: 'rgb('+color+')'
    })

    $('.jsLine').css({
      color: 'rgb('+color+')',
      transitionDuration: '.5s',
    })
    $('.jsCaret').css({
      fill: 'rgb('+color+')',
      transitionDuration: '.5s',
    })
    $('path', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transitionDuration: '.5s',
      transitionDuration: '.8s'
    })})
    $('circle', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transitionDuration: '.8s',
      transitionDuration: '.8s'
    })})
    $('rect', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transitionDuration: '.4s',
      transitionDuration: '.8s'
    })})
    $('polygon', logo).each(function(){
      $(this).css({
      fill: 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
      transitionDuration: '1s',
      transitionDuration: '.8s'
    })})
    setTimeout(function(){
      $('.jsExpLogo').css({
        // filter: 'blur(0)',
        fill: '#352F2F',
      })
      logo.css({
        // 'filter': 'blur(0)',
        transitionDuration: '2s',
        backgroundColor: '#352F2F',
      })
      $('path', logo).css({
        fill: 'inherit',
        transitionDuration: '1s'
      })
      $('circle', logo).css({
        fill: 'inherit',
        transitionDuration: '1.2s'
      })
      $('rect', logo).css({
        fill: 'inherit',
        transitionDuration: '1.4s'
      })
      $('polygon', logo).css({
        fill: 'inherit',
        transitionDuration: '.6s'
      })
    },2000);
  }

// FUNCTIONS
////////////


  function scrollHandler(e) {
    if (_winW > 960) {
      e.preventDefault()
    }
    var oldScrollTop = scrollTop;
    scrollTop = WIN.scrollTop();
    var moved = scrollTop - oldScrollTop;
    var color = 'rgb('+Number(Math.floor(Math.random()*155)+100)+','+Number(Math.floor(Math.random()*155)+100)+','+Number(Math.floor(Math.random()*155)+100)+')'
    BODY.css({
      background: color,
      transitionDuration: '.6s'
    })
    $('.jsContact').css({
      background: color,
      transitionDuration: '.6s'
    })
  }

  function mousemoveHandler(e) {
    // if (e.pageY < _winH/2) {
    //   $('.jsLogo').eq(1).css({
    //     transform: 'translateY('+8.333+'vw)'
    //   })
    //   $('.jsLogo').eq(2).css({
    //     transform: 'translateY('+-8.333+'vw)'
    //   })
    //   $('.jsLogo').eq(3).css({
    //     transform: 'translateY('+-16.666+'vw)'
    //   })
    //   $('.jsLogo').eq(5).css({
    //     transform: 'translateY('+8.333+'vw)'
    //   })
    //   $('.jsLogo').eq(7).css({
    //     transform: 'translateX('+8.333+'vw)'
    //   })
    // } else {
    //   $('.jsLogo').eq(1).css({
    //     transform: 'translateY(0)'
    //   })
    //   $('.jsLogo').eq(2).css({
    //     transform: 'translateY(0)'
    //   })
    //   $('.jsLogo').eq(3).css({
    //     transform: 'translateY(0)'
    //   })
    //   $('.jsLogo').eq(5).css({
    //     transform: 'translateY(0)'
    //   })
    //   $('.jsLogo').eq(7).css({
    //     transform: 'translateX(0)'
    //   })
    // }
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.innerWidth;
    _winH = window.innerHeight;
  }
})

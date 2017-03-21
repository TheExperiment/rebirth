var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    autoplay: true,
    modestbranding: true,
    autohide: true,
    showinfo: false,
    videoId: vidID,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

var video = document.querySelector('.js-video');
var iframe = document.querySelector('.js-video iframe');

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.


// 4. The API will call this function when the video player is ready.
var videoReady = false;
function onPlayerReady(event) {
  videoReady = true;
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {

  }
}

$(function() {
  var WIN = $(window);
  var DOC = $(document);
  var BODY = $("body");
  $('.js-button--play').on('click', playVideo);
  $('.js-video__close').on('click',stopVideo)
  $('.timestamp').on('click',function(){
    var text = $(this).text();
    var colIndex = text.indexOf(':');
    var secs = (text.substr(0,colIndex) * 60) + Number(text.substr(colIndex+1),-1);
    player.seekTo(secs)
  })
  function stopVideo() {
    player.pauseVideo();
    BODY.removeClass('is-video-playing');
    document.querySelector('.js-video__loop').play();
  }

  function playVideo() {
    document.querySelector('.js-video__loop').pause();
    if (YT.PlayerState.CUED) {
      player.playVideo();
    }
    document.body.classList.add('is-video-playing')
    // iframe.seekTo(3);
  }
})


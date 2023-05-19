let player;
const playerContainer = $(".player");
//описание обработчиков
let eventsInit = () => {
    $(".player__start").click((e) => {
        e.preventDefault();
  
        if (playerContainer.hasClass("paused")) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    });
    $(".player__playback").click((e) => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
 
        const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec =
            (player.getDuration() / 100) * newButtonPositionPercent;
 
        $(".player__playback-button").css({left: `${newButtonPositionPercent}%`});
 
        player.seekTo(newPlaybackPositionSec);
    });
    $(".player__splash").click((e) => {
        player.playVideo();
    });
    $(".player__volume-control").click((e) =>{
        const volumeBar = $(e.currentTarget);
        const clickPosition = e.originalEvent.layerX;

        const newVolumeButtonPositionPercent = (clickPosition / volumeBar.width()) * 100;
        $(".player__volume-button").css({left: `${newVolumeButtonPositionPercent}%`});
        player.setVolume(newVolumeButtonPositionPercent);
        console.log(clickPosition);
        console.log(newVolumeButtonPositionPercent);
    })
}
const onPlayerReady = () => {
    let interval;
    const volumeValue = player.getVolume();
    $(".player__volume-button").css({left: `${volumeValue}%`});
    const durationSec = player.getDuration();
    
    if (typeof interval !== "undefined") {
      clearInterval(interval);
    }
    
    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $(".player__playback-button").css({left: `${completedPercent}%`});
    }, 1000);
};
const onPlayerStateChange = (event) => {
    /*
      -1 (воспроизведение видео не начато)
      0 (воспроизведение видео завершено)
      1 (воспроизведение)
      2 (пауза)
      3 (буферизация)
      5 (видео подают реплики).
    */
    switch (event.data) {
      case 1:
        playerContainer.addClass("active");
        playerContainer.addClass("paused");
        break;
    
      case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
    }
   };
function onYouTubeIframeAPIReady() {
    const isTablets = window.matchMedia("(max-width: 768px)").matches;
    const isMobile = window.matchMedia("(max-width: 620px)").matches;
    if(isMobile){
        player = new YT.Player('yt-player', {
            height: '233',
            width: '392',
            videoId: 'rYYuDt8Z2cY',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0
            }
        });
    }else if(isTablets){
        player = new YT.Player('yt-player', {
            height: '352',
            width: '594',
            videoId: 'rYYuDt8Z2cY',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0
            }
        });
    }else{
        player = new YT.Player('yt-player', {
            height: '392',
            width: '662',
            videoId: 'rYYuDt8Z2cY',
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
            playerVars: {
                controls: 0,
                disablekb: 0,
                showinfo: 0,
                rel: 0,
                autoplay: 0,
                modestbranding: 0
            }
        });
    }
}
eventsInit();
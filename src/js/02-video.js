import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const timeKey ='videoplayer-current-time'     
const playTime = localStorage.getItem(timeKey) ? localStorage.getItem(timeKey):0;

function getCurrentTime(event) {
    localStorage.setItem(timeKey, event.seconds);
 }

player.on('timeupdate', throttle(getCurrentTime, 1000));
    
player.setCurrentTime(playTime)

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });



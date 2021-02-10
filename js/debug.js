var video = document.getElementById("video");
var videoJS = videojs(video);

videoJS.ready(function() {
    var videoCurrentTime = video.currentTime;
    console.log(videoCurrentTime);
});

video.onseeking = function() {
    console.log(video.currentTime);
 }
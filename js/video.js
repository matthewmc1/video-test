var video = document.getElementById("video");
var videoJS = videojs(video);

videoJS.ready(function () {
    var videoCurrentTime = video.currentTime;
    var targetTime = 5;

    if (videoCurrentTime < video.buffered.end(0) && targetTime < video.seekable.end(0) && targetTime > video.seekable.start(0)) {
        video.currentTime = targetTime;
    } else {
        video.currentTime = video.duration;
    }

    console.log("seekable start time: ".concat(video.seekable.start(0)));
    console.log("seekable end time: ".concat(video.seekable.end(0)));

});
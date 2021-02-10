## Video Playback Testing

Video streaming test using wavesurfer.js to display the wave seeking element.

[video.js]() \
[wavesurfer.js](https://wavesurfer-js.org/example/video-element/index.html)

## Console Logs

```
video.onseeking = function() {
    console.log(video.currentTime);
 }
```

Logs to the console everytime user selects a point on the wavesurfer element, so we can detect what value is set by Chrome
for the seek_target under chrome://media-internals.


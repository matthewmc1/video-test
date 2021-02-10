var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#waveform'),
    waveColor: '#A8DBA8',
    progressColor: '#3B8686',
    backend: 'MediaElement'
  });
  
  // Load audio from existing media element
  var mediaElt = document.querySelector('video');
  
  wavesurfer.load(mediaElt, [0.0218, 0.0183, 0.0165, 0.0198, 0.2137]);

  wavesurfer.on('ready', function () {
    wavesurfer.play();
});
const audioPlayer = document.querySelector('#audio-player');
const trackList = document.querySelectorAll('#track-list ol li a');

function playTrack(trackIndex) {
  audioPlayer.src = `track${trackIndex + 1}.mp3`;
  audioPlayer.play();
}

trackList.forEach((track, index) => {
  track.addEventListener('click', (event) => {
    event.preventDefault();
    playTrack(index);
  });
});


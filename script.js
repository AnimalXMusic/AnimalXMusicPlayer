const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = "▶️";
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = "⏸️";
    }
    isPlaying = !isPlaying;
});

audioPlayer.addEventListener("timeupdate", () => {
    seekBar.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
});

seekBar.addEventListener("input", () => {
    audioPlayer.currentTime = (seekBar.value / 100) * audioPlayer.duration;
});

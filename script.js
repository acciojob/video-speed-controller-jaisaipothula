const video = document.getElementById('video');
const playerButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const skipButton = document.getElementById('skip');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

playerButton.addEventListener('click', togglePlayPause);
video.addEventListener('timeupdate', updateProgress);
rewindButton.addEventListener('click', () => rewind(10));
skipButton.addEventListener('click', () => skip(25));
volumeControl.addEventListener('input', updateVolume);
playbackSpeedControl.addEventListener('input', updatePlaybackSpeed);

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
}

function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.width = `${percent}%`;
}

function rewind(seconds) {
    video.currentTime = Math.max(0, video.currentTime - seconds);
}

function skip(seconds) {
    video.currentTime = Math.min(video.duration, video.currentTime + seconds);
}

function updateVolume() {
    video.volume = volumeControl.value;
}

function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeedControl.value;
}

const video = document.querySelector('.player__video');
const playButton = document.getElementById('player__button');
const rewindButton = document.getElementById('rewind');
const forwardButton = document.getElementById('forward');
const volumeControl = document.getElementById('volume');
const playbackSpeedControl = document.getElementById('playbackSpeed');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

// Play/Pause functionality
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
});

// Rewind functionality
rewindButton.addEventListener('click', () => {
    video.currentTime -= 10;
});

// Forward functionality
forwardButton.addEventListener('click', () => {
    video.currentTime += 25;
});

// Volume control
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value / 100; // Convert percentage to a value between 0 and 1
});

// Playback speed control
playbackSpeedControl.addEventListener('input', () => {
    video.playbackRate = playbackSpeedControl.value; // Set playback speed
});

// Progress bar update
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progress.value = percentage;
    progressFilled.style.width = `${percentage}%`;
});

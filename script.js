const video = document.getElementById('background-video');
const soundToggle = document.getElementById('sound-toggle');

// Default state: muted
video.muted = true;

soundToggle.addEventListener('click', () => {
    video.muted = !video.muted;
    soundToggle.textContent = video.muted ? '🔇 Mute' : '🔊 Sound';
});
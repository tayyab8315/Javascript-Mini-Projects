let song = document.querySelector('#song');
let progres = document.querySelector('#progres');
let play = document.querySelector('#play');
let playbtn = document.querySelector('#playbtn');
let duration = document.querySelector('#duration');

// Function to format time in minutes:seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Set progress bar max value and update initial duration display
song.onloadedmetadata = () => {
    progres.max = song.duration;
    progres.value = song.currentTime;
    duration.innerHTML = formatTime(song.currentTime) + " / " + formatTime(song.duration);
};

// Update the progress bar and duration display as the song plays
song.ontimeupdate = () => {
    progres.value = song.currentTime;
    duration.innerHTML = formatTime(song.currentTime) + " / " + formatTime(song.duration);
};

// Play/Pause functionality
play.addEventListener('click', () => {
    if (playbtn.classList.contains('fa-pause')) {
        song.pause();
        playbtn.classList.remove('fa-pause');
        playbtn.classList.add('fa-play');
    } else {
        song.play();
        progres.max = song.duration;
        playbtn.classList.remove('fa-play');
        playbtn.classList.add('fa-pause');
    }
});

// Allow seeking through the song using the progress bar
progres.addEventListener('input', () => {
    song.currentTime = progres.value;
});

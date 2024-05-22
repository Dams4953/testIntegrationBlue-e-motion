export function functionCliquableVideo(videoId) {

    let video = document.getElementById(videoId);

    // Si la vidéo est en pause, la lire, si elle est en cours de lecture, la mettre en pause
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

export function functionCliquableVideo(videoId) {
    let video = document.getElementById(videoId);

    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
}

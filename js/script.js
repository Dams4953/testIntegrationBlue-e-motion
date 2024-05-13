// vidéo cliquable
var video = document.getElementById('videoIntroduction');

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});


// afficher read more
document.getElementById('open-id-readMorre').addEventListener('click', function(event) {
    event.preventDefault(); 
    var hiddenText = document.querySelector('.hidden-text');
    var fullText = document.querySelector('.full-text');
    var isFullTextVisible = fullText.style.display === 'block';

    if (isFullTextVisible) {
        hiddenText.style.display = 'block';
        fullText.style.display = 'none';
    } else {
        hiddenText.style.display = 'none';
        fullText.style.display = 'block';
    }
});

// masquer read more
document.getElementById('close-id-readMorre').addEventListener('click', function(event) {
    event.preventDefault(); 
    var hiddenText = document.querySelector('.hidden-text');
    var fullText = document.querySelector('.full-text');
    
    hiddenText.style.display = 'block';
    fullText.style.display = 'none';
});

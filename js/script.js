// vidéo cliquable
let video = document.getElementById('videoIntroduction');

video.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

document.getElementById('idReadMore').addEventListener('click', function (event) {
    event.preventDefault();
    let textContainer = document.getElementById('textAboutUs');
    let readMoreContainer = document.getElementById('readMoreContainer');
    let readLessContainer = document.getElementById('readLessContainer');

    textContainer.style.webkitLineClamp = 'none'; 
    textContainer.innerHTML = textContainer.innerHTML.replace(/\.\.\./g, ''); 
    readMoreContainer.style.display = 'none'; 
    readLessContainer.style.display = 'block'; 
});

document.getElementById('idReadLess').addEventListener('click', function (event) {
    event.preventDefault();
    let textContainer = document.getElementById('textAboutUs');
    let readMoreContainer = document.getElementById('readMoreContainer');
    let readLessContainer = document.getElementById('readLessContainer');

    textContainer.style.webkitLineClamp = '10'; 
    readMoreContainer.style.display = 'block'; 
    readLessContainer.style.display = 'none';
});



// transition images auto
let imageData = [
    {
        src: "/assets/pictures/auto1.png",
        title: "SINGLE CAB",
        paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
    },
    {
        src: "assets/pictures/auto2.png",
        title: "SPACE CAB",
        paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
    },
    {
        src: "/assets/pictures/auto3.png",
        title: "DOUBLE CAB",
        paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
    }
];

function displayImage(imageNum) {
    let imgData = imageData[imageNum - 1];
    let displayedImage = document.getElementById('displayed-image');
    let title = document.getElementById('title');
    let paragraph = document.getElementById('paragraph');

    displayedImage.classList.remove('active');

    setTimeout(function () {
        displayedImage.src = imgData.src;
        displayedImage.classList.add('active');
        title.textContent = imgData.title;
        paragraph.textContent = imgData.paragraph;
    }, 100);
}

function init() {
    displayImage(2)

}

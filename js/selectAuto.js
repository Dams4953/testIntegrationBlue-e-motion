export function functionSelectAuto() {
    // Données à afficher
    let imageData = [
        {
            src: "/assets/pictures/singleCab.png",
            title: "SINGLE CAB",
            paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
        },
        {
            src: "/assets/pictures/spaceCab.png",
            title: "SPACE CAB",
            paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
        },
        {
            src: "/assets/pictures/doubleCab.png",
            title: "DOUBLE CAB",
            paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis."
        }
    ];

    let desktopSize = 1024;

    // FONCTION pour afficher l'image sélectionnée
    function displayImage(imageNum, direction) {
        let imgData = imageData[imageNum - 1];
        let displayedImage = document.getElementById('displayed-image');
        let title = document.getElementById('title');
        let paragraph = document.getElementById('paragraph');
        let displayImageContainer = document.querySelector('.d-max__selected-content');

        if (direction === 'left') {
            displayImageContainer.classList.add('exiting-left');
        } else if (direction === 'right') {
            displayImageContainer.classList.add('exiting-right');
        }

        // Pour animation
        setTimeout(function () {
            displayedImage.src = imgData.src;
            title.textContent = imgData.title;
            paragraph.textContent = imgData.paragraph;

            let enteringClass = (direction === 'left') ? 'entering-from-left' : 'entering-from-right';

            displayImageContainer.classList.add(enteringClass);
            displayImageContainer.classList.remove('exiting-left', 'exiting-right');

            setTimeout(function () {
                displayImageContainer.classList.remove(enteringClass);
            }, 500);
        }, 500);
    }


    // FONCTION pour mettre à jour le contenu au clic
    function updateContent() {
        if (window.innerWidth <= desktopSize) {
            let buttons = document.querySelectorAll(".d-max__pictures-container__select-picture");

            buttons.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    let imageNum = parseInt(this.getAttribute("data-image"));
                    let currentIndex = document.querySelector('.d-max__pictures-container__select-picture.selected').getAttribute("data-image");
                    let direction = (currentIndex < imageNum) ? 'left' : 'right';
                    displayImage(imageNum, direction);

                    buttons.forEach(function (btn) {
                        btn.classList.remove('selected');
                    });

                    this.classList.add('selected');
                });

                if (index === 1) {
                    button.classList.add('selected');
                }
            });

            displayImage(1);

            // Pour mobile
            let paragraphElement = document.getElementById('paragraph');
            paragraphElement.textContent = imageData[0].paragraph;

            let displayedImage = document.getElementById('displayed-image');
            displayedImage.classList.add('hidden');
        } else {
   
            // Pour desktop
            let paragraphElement = document.getElementById('paragraph');
            paragraphElement.textContent = '';

            let displayedImage = document.getElementById('displayed-image');
            displayedImage.classList.remove('hidden');
        }
    }


    window.addEventListener('load', updateContent);
}

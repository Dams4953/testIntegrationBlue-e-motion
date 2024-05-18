export function functionSelectAuto() {
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

    function displayImage(imageNum) {
        let imgData = imageData[imageNum - 1];
        let displayedImage = document.getElementById('displayed-image');
        let title = document.getElementById('title');
        let paragraph = document.getElementById('paragraph');
        let displayImageContainer = document.querySelector('.d-max__selected-content');

        displayImageContainer.classList.add('exiting');

        setTimeout(function () {
            displayedImage.src = imgData.src;
            title.textContent = imgData.title;
            paragraph.textContent = imgData.paragraph;

            displayImageContainer.classList.add('entering-from-left');

            displayImageContainer.classList.remove('exiting');

            setTimeout(function () {
                displayImageContainer.classList.remove('entering-from-left');
            }, 500);
        }, 500);
    }

    function updateContent() {
        if (window.innerWidth <= desktopSize) {
            let buttons = document.querySelectorAll(".d-max__pictures-container__select-picture");
    
            buttons.forEach(function (button, index) {
                button.addEventListener("click", function () {
                    let imageNum = parseInt(this.getAttribute("data-image"));
                    displayImage(imageNum);
    
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

            let paragraphElement = document.getElementById('paragraph');
            paragraphElement.textContent = imageData[0].paragraph;
    
            let displayedImage = document.getElementById('displayed-image');
            displayedImage.classList.add('hidden');
        } else {
            let paragraphElement = document.getElementById('paragraph');
            paragraphElement.textContent = ''; 
    
            let displayedImage = document.getElementById('displayed-image');
            displayedImage.classList.remove('hidden'); 
        }
    }
  
    window.addEventListener('load', updateContent);
    window.addEventListener('resize', updateContent);
}

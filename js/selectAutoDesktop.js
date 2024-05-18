export function functionSelectAutoDesktop() {
    let imageData = [
        {
            src: "/assets/pictures/singleCab.png",
            title: "SINGLE CAB"
        },
        {
            src: "/assets/pictures/doubleCab2x.png",
            title: "DOUBLE CAB",
            paragraph: "Dolutatueros lobor zzriusto non. Doloreetuer quamcommy minit, dolorer wiscin dolorem ullaorperit. Erciduisit ispum odigniamet lam eummolestin faciduisim do tin uismodolor, an feuisis enim. Sustionsenim velis em minisl it facipit lortin. Conulputat mod etum si. Tin, atuerat, wisl min quis dolenismodit nisci adionsequat wissis. Adionsequat ut consequi dolortie nummodolor lenim lortin nonsequi. Erci quis non. Aliquipsusci erciduisit feummod non. It feu facinim dion ptatueros dion, dolortie tis dolortio rit eugiamet. Iriustrud lorer tumsandionse magna."
        },
        {
            src: "/assets/pictures/spaceCab.png",
            title: "EXTENDED CAB"
        }
    ];

    let desktopSize = 1024;
    let container = document.querySelector('.d-max__selected-content');

    let existingContainers = container.querySelectorAll('.d-max__selected-content__container');
    let addedElements = existingContainers.length;

    if (window.innerWidth > desktopSize && addedElements < 3) {
        imageData.forEach(function(data, index) {
            if (!container.querySelector(`[alt="${data.title}"]`)) {
                addElementToContainer(data, index === 1);
            }
        });
    }

    function addElementToContainer(data, isSecondElement) {
        let containerElement = document.createElement('div');
        containerElement.className = 'd-max__selected-content__desktop-container';
        
        if (isSecondElement) {
            containerElement.className += '__default-container';
        }

        let titleElement = document.createElement('h3');
        titleElement.className = 'd-max__selected-content__desktop-container__title';
        titleElement.textContent = data.title;

        if (isSecondElement) {
            titleElement.className += '-default';
        }
     
        let imageElement = document.createElement('img');
        imageElement.className = 'd-max__selected-content__desktop-container__picture';
        imageElement.src = data.src;
        imageElement.alt = data.title;

        if (isSecondElement) {
            imageElement.className += '-default';
        }


        containerElement.appendChild(titleElement);
        containerElement.appendChild(imageElement);

        if (data.paragraph) {
            let paragraphElement = document.createElement('p');
            paragraphElement.className = 'd-max__selected-content__desktop-container__text';
            paragraphElement.textContent = data.paragraph;
            containerElement.appendChild(paragraphElement);

            if (isSecondElement) {
                paragraphElement.className += '-default';
            }
        }

        container.appendChild(containerElement);
    }
}

functionSelectAutoDesktop();

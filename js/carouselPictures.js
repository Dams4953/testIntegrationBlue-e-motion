import { images } from './images.js'

export function functionCarouselPictures() {

    let carouselContainer = document.querySelector(".photo-galery__carousel-container__carousel-inner");
    let prevBtn = document.getElementById("prevButton");
    let nextBtn = document.getElementById("nextButton");
    let indicators = document.querySelectorAll(".indicator");

    // Index actuel et nombre d'éléments par page
    let currentIndex = 0;
    let itemsPerPage = 4;

    // FONCTION pour mettre à jour les flèches en fonction de sur quel indicateur on se trouve
    function updateArrows() {
        let activeIndicatorIndex = 0;
        indicators.forEach((indicator, index) => {
            if (indicator.classList.contains("active")) {
                activeIndicatorIndex = index;
            }
        });

        if (activeIndicatorIndex === 0) {
            prevBtn.style.filter = "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)";
            prevBtn.style.opacity = "0.5";
            nextBtn.style.filter = "brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(6519%) hue-rotate(351deg) brightness(84%) contrast(115%)";
            nextBtn.style.opacity = "1";
        } else if (activeIndicatorIndex === indicators.length - 1) {
            prevBtn.style.filter = "brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(6519%) hue-rotate(351deg) brightness(84%) contrast(115%)";
            prevBtn.style.opacity = "1";
            nextBtn.style.filter = "brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)";
            nextBtn.style.opacity = "0.5";
        } else {
            prevBtn.style.filter = "brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(6519%) hue-rotate(351deg) brightness(84%) contrast(115%)";
            prevBtn.style.opacity = "1";
            nextBtn.style.filter = "brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(6519%) hue-rotate(351deg) brightness(84%) contrast(115%)";
            nextBtn.style.opacity = "1";
        }

    }

    // FONCTION pour mettre à jour les indicateurs
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === Math.floor(currentIndex / itemsPerPage)) {
                indicator.classList.add("active");
                indicator.style.opacity = "1";
            } else {
                indicator.classList.remove("active");
                indicator.style.opacity = "0.3";
            }
        });
        updateArrows();
    }

    // FONCTION pour afficher une diapositive
    let isAnimating = false;

    function showSlide(startIndex) {

        if (isAnimating) {
            return;
        }

        isAnimating = true;


        carouselContainer.classList.add('slide-transition');
        carouselContainer.innerHTML = '';
        for (let i = 0; i < itemsPerPage; i++) {
            let newIndex = (startIndex + i) % images.length;
            let carouselItem = document.createElement("div");
            carouselItem.classList.add("photo-galery__carousel-container__carousel-inner__carousel-item");
            carouselItem.innerHTML = `<img src="${images[newIndex].src}" alt="${images[newIndex].alt}">`;
            carouselContainer.appendChild(carouselItem);
        }

        setTimeout(() => {
            carouselContainer.classList.remove('slide-transition');
            isAnimating = false;
        }, 500);

        updateIndicators();
    }

    // FONCTION pour afficher la diapositive suivante
    function showNextSlide() {
        if (currentIndex === images.length - itemsPerPage) {
            return;
        }
        currentIndex = (currentIndex + itemsPerPage) % images.length;
        showSlide(currentIndex);
    }

    // FONCTION pour afficher la diapositive précédente
    function showPrevSlide() {
        if (currentIndex === 0) {
            return;
        }
        currentIndex = (currentIndex - itemsPerPage + images.length) % images.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
}

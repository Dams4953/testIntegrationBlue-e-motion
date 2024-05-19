const images = [
    { 
        src: "assets/pictures/ISUZU-D-MAX-Geschaeftskunden-Flottenkunden.webp", 
        alt: "ISUZU-D-MAX-Geschaeftskunden-Flottenkunden" 
    },
    { 
        src: "assets/pictures/ISUZU-D-MAX-Individualisierung-Umbauten.webp", 
        alt: "ISUZU-D-MAX-Individualisierung-Umbauten" 
    },
    { 
        src: "assets/pictures/ISUZU-D-MAX-blau-im-wald-nachhaltige-effizienz.webp", 
        alt: "ISUZU-D-MAX-blau-im-wald-nachhaltige-effizienz" 
    },
    { 
        src: "assets/pictures/04-home-bild_text-N-Serie 3,5t Koffer City Image.webp", 
        alt: "04-home-bild_text-N-Serie 3,5t Koffer City Image" 
    },
    { 
        src: "assets/pictures/isuzu-d-max-Ladefläche-Handwerker-Kipper.webp", 
        alt: "isuzu-d-max-Ladefläche-Handwerker-Kipper" 
    },
    { 
        src: "assets/pictures/isuzu-d-max-zubehoer.webp", 
        alt: "isuzu-d-max-zubehoer" 
    }
];

export function functionCarouselPictures() {
    const carouselContainer = document.querySelector(".photo-galery__carousel-container__carousel-inner");
    const prevBtn = document.getElementById("prevButton");
    const nextBtn = document.getElementById("nextButton");

    let currentIndex = 0;
    const itemsPerPage = 4;

    function showSlide(startIndex) {
        carouselContainer.innerHTML = '';
        for (let i = 0; i < itemsPerPage; i++) {
            const newIndex = (startIndex + i) % images.length;
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("photo-galery__carousel-container__carousel-inner__carousel-item");
            carouselItem.innerHTML = `<img src="${images[newIndex].src}" alt="${images[newIndex].alt}">`;
            carouselContainer.appendChild(carouselItem);
        }
    }

    function showNextSlide() {
        currentIndex = (currentIndex + itemsPerPage) % images.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - itemsPerPage + images.length) % images.length;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    nextBtn.addEventListener("click", showNextSlide);
    prevBtn.addEventListener("click", showPrevSlide);
}



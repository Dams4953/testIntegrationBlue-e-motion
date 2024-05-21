const images = [
    { 
        src: "./assets/pictures/ISUZU-D-MAX-Geschaeftskunden-Flottenkunden.webp", 
        alt: "ISUZU-D-MAX-Geschaeftskunden-Flottenkunden" 
    },
    { 
        src: "./assets/pictures/ISUZU-D-MAX-Individualisierung-Umbauten.webp", 
        alt: "ISUZU-D-MAX-Individualisierung-Umbauten" 
    },
    { 
        src: "./assets/pictures/ISUZU-D-MAX-blau-im-wald-nachhaltige-effizienz.webp", 
        alt: "ISUZU-D-MAX-blau-im-wald-nachhaltige-effizienz" 
    },
    { 
        src: "./assets/pictures/04-home-bild_text-N-Serie 3,5t Koffer City Image.webp", 
        alt: "04-home-bild_text-N-Serie 3,5t Koffer City Image" 
    },
    { 
        src: "./assets/pictures/isuzu-d-max-Ladefläche-Handwerker-Kipper.webp", 
        alt: "isuzu-d-max-Ladefläche-Handwerker-Kipper" 
    },
    { 
        src: "./assets/pictures/isuzu-d-max-zubehoer.webp", 
        alt: "isuzu-d-max-zubehoer" 
    },
    { 
        src: "./assets/pictures/02-D_MAX-image_text_outbreak-20MY ISUZU D-MAX_5_EU_LHD_Crew RBD(Chassis Overlay) wihout Trailer&Talents.webp", 
        alt: "isuzi-d-max-image_text_outbreak-20MY ISUZU D-MAX_5_EU_LHD_Crew RBD(Chassis Overlay) wihout Trailer&Talents" 
    },
    { 
        src: "./assets/pictures/ISUZU-D-MAX-blue-driving-in-water.webp", 
        alt: "isuzi-d-max-blue-driving-in-water" 
    },
    { 
        src: "./assets/pictures/02-isuzu-NSerie-carousel-BIG-N-Serie Kofferaufbau 1~-~media--d98c6261--query.webp", 
        alt: "izusu-NSerie-carousel-BIG-N-Serie Kofferaufbau 1" 
    },
    { 
        src: "./assets/pictures/isuzu-d-max-ueber-uns.webp", 
        alt: "isuzu-d-max-ueber-uns" 
    },
    { 
        src: "./assets/pictures/isuzu-d-max-zubehoer.webp", 
        alt: "isuzu-d-max-zubehoer" 
    },
    { 
        src: "./assets/pictures/isuzu-N-Serie-carousel-BIG-N-Serie Absetzkipper~-~media--d98c6261--query.webp", 
        alt: "isuzi-N-Serie-carousel-BIG-N-Serie Absetzkipper" 
    },
    { 
        src: "./assets/pictures/ISUZU-D-MAX-blue-driving-in-water.webp", 
        alt: "isuzi-d-max-blue-driving-in-water" 
    },
    { 
        src: "./assets/pictures/isuzu-N-Serie-carousel-BIG-N-Serie-3,5t Pritsche~-~media--d98c6261--query.webp", 
        alt: "isuzu-N-Serie-carousel-BIG-N-Serie-3,5t Pritsche" 
    },
    { 
        src: "./assets/pictures/ISUZU-D-MAX-blau-im-wald-nachhaltige-effizienz.webp", 
        alt: "isizu-d-max-blau-im-wald-nachhaltige-effizienz" 
    },
    { 
        src: "./assets/pictures/isuzu-d-max-ueber-uns.webp", 
        alt: "isuzu-d-max-ueber-uns" 
    }
];

export function functionCarouselPictures() {
    const carouselContainer = document.querySelector(".photo-galery__carousel-container__carousel-inner");
    const prevBtn = document.getElementById("prevButton");
    const nextBtn = document.getElementById("nextButton");
    const indicators = document.querySelectorAll(".indicator");

    let currentIndex = 0;
    const itemsPerPage = 4;

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
    }

    function showSlide(startIndex) {
        carouselContainer.innerHTML = '';
        for (let i = 0; i < itemsPerPage; i++) {
            const newIndex = (startIndex + i) % images.length;
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("photo-galery__carousel-container__carousel-inner__carousel-item");
            carouselItem.innerHTML = `<img src="${images[newIndex].src}" alt="${images[newIndex].alt}">`;
            carouselContainer.appendChild(carouselItem);
        }
        updateIndicators();
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

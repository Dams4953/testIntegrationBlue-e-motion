export function functionHeaderModal() {

    let hamburger = document.querySelector(".navbar__right-side__hamburger");
    let modal = document.getElementById("modalHeader");

    // Au clic sur le hamburger, afficher le modal
    hamburger.addEventListener("click", function () {
        modal.classList.toggle("showModal");
    });

    // Si on clique sur le modal, le fermer
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("showModal");
        }
    });
}

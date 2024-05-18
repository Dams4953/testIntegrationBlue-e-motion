export function functionHeaderModal() {
    let hamburger = document.querySelector(".navbar__right-side__hamburger");
    let modal = document.getElementById("modalHeader");

    hamburger.addEventListener("click", function () {
        modal.classList.toggle("showModal");
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("showModal");
        }
    });
}

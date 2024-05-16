export function functionHeaderModal() {
    let hamburger = document.querySelector(".hamburger");
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

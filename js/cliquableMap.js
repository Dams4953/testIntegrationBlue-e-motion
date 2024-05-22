export function functionCliquableMap() {

    let infoContainer = document.getElementById('idMapLocalisationContact');
    let originalContent = infoContainer.innerHTML;
    let button = document.querySelector('.contact__container__button-map');

    // Si aucune image n'est affichée, on affiche la map
    infoContainer.addEventListener('click', function () {
        if (infoContainer.innerHTML.includes('<img')) {
            infoContainer.innerHTML = originalContent;
            button.innerText = 'Google Maps immer anzeigen';
        } else {
            infoContainer.innerHTML = '<img src="./assets/pictures/map_isuzu.png" alt="map isuzu">';
            button.innerText = 'Route berechnen';
        }
    });
}

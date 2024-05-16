export function functionCliquableMap() {
    let infoContainer = document.getElementById('idMapLocalisationContact');
    let originalContent = infoContainer.innerHTML; 

    infoContainer.addEventListener('click', function() {
        if (infoContainer.innerHTML.includes('<img')) {
            infoContainer.innerHTML = originalContent;
        } else {
            infoContainer.innerHTML = '<img src="./assets/pictures/map_isuzu.png" alt="map isuzu">';
        }
    });
}

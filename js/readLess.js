export function functionReadLess() {
    document.getElementById('idReadLess').addEventListener('click', function (event) {
        event.preventDefault();
        let textContainer = document.getElementById('textAboutUs');
        let readMoreContainer = document.getElementById('readMoreContainer');
        let readLessContainer = document.getElementById('readLessContainer');

        textContainer.style.webkitLineClamp = '10'; 
        readMoreContainer.style.display = 'block'; 
        readLessContainer.style.display = 'none';
    });
}

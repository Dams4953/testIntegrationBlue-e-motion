export function functionReadMore() {

    if (window.innerWidth >= 1024) {
        return;
    }
    document.getElementById('idReadMore').addEventListener('click', function (event) {
        event.preventDefault();
        let textContainer = document.getElementById('textAboutUs');
        let readMoreContainer = document.getElementById('readMoreContainer');
        let readLessContainer = document.getElementById('readLessContainer');

        textContainer.style.webkitLineClamp = 'none';
        textContainer.innerHTML = textContainer.innerHTML.replace(/\.\.\./g, '');
        readMoreContainer.style.display = 'none';
        readLessContainer.style.display = 'block';
    });
}

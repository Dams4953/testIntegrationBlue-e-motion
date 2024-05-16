export function functionReadMore() {
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

const PROMPT = document.querySelector('#hrefToChange');


PROMPT.addEventListener('click', function (event) {
    this.textContent = prompt('Enter URL you want to process', 'www.ya.ru');
    event.preventDefault();
})
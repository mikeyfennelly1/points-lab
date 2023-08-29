const CARDS = document.querySelectorAll('.card');
const BUTTONS = document.querySelectorAll('.button');
const LEFT_BUTTON = document.getElementById('left')
const RIGHT_BUTTON = document.getElementById('right')

LEFT_BUTTON.addEventListener('click', (e) => {
    leftWise();
});
RIGHT_BUTTON.addEventListener('click', (e) => {
    rightWise();
});


leftWise = () => {
    const LIST = document.querySelector(".cardsContainer");
    const LAST_ELEMENT = LIST.lastElementChild;
    const CLONE = LAST_ELEMENT.cloneNode(true);
    LIST.prepend(CLONE);
    LIST.removeChild(LAST_ELEMENT);
}

rightWise = () => {
    const LIST = document.querySelector(".cardsContainer");
    const FIRST_ELEMENT = LIST.firstElementChild;
    const CLONE = FIRST_ELEMENT.cloneNode(true);
    LIST.appendChild(CLONE);
    LIST.removeChild(FIRST_ELEMENT);
}
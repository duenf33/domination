// 1
const strikeThroughFirstLi = () => {
    const firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';
}
// 2
strikeThroughFirstLi();
// ************************************************

// 3
const stringRepId = (id, url) => {
    const imgId = document.querySelector(id)
    imgId.src = url;
}
// 4
stringRepId('#image-1', 'https://media.giphy.com/media/dE5VNLfHyf79K/giphy.gif')
stringRepId('#image-2', 'https://media.giphy.com/media/sTbavrq6EA3GE/giphy.gif')
stringRepId('#image-3', 'https://media.giphy.com/media/R2XQJMdRutBZe/giphy.gif')
// ************************************************

// 5
const lastLiRemoved = () => {
    const lastChild = document.querySelector('#arguments');
    lastChild.removeChild(lastChild.lastElementChild);
}
// 6
lastLiRemoved();
lastLiRemoved();

// ************************************************
// ************************************************

// 1
const newElem = () => {
    const newLi = document.createElement('li');
    newLi.id = 'li-img';
    const ulElem = document.querySelector('#arguments');
    ulElem.appendChild(newLi);
// 2
    const newImg = document.createElement('img');
    newImg.id = 'image-4'
    const liElem = document.querySelector('#li-img');
    liElem.appendChild(newImg)
    newImg.src = 'https://media.giphy.com/media/zgItGbJ0vNO0g/giphy.gif'
}
newElem();

// 3
const img30 = (id) => {
    const imgId = document.querySelector(id);
    imgId.style.height = '30px'
}
// 4
img30('#image-1')
// **********************************************

// 5
const invisible = (elem) => {
    const invisibleElem = document.querySelector(elem);
    invisibleElem.className = 'invisible';
}
// 6
invisible('#heading');
// **********************************************

const reSize = (fontSize, text) => {
    const resizeText = document.querySelector(text);
    resizeText.style.fontSize = fontSize;
}
reSize('5px', 'p');
// **********************************************

// 1
const createNew = (newText) => {
    const paraLi = document.createElement('li');
    paraLi.id = 'paraLi';
    const ulElem = document.querySelector('#arguments');
    ulElem.appendChild(paraLi);
    paraLi.innerText = newText
}
// 2
createNew('lorem ipsum works great!!!!');
// **********************************************

// 3 
const newHeading = (headerSize, someText) => {
    const newHead = document.createElement()
}
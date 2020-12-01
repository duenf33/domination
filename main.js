// 1
const strikeThroughFirstLi = () => {
    const firstLi = document.querySelector('li');
    firstLi.style.textDecoration = 'line-through';
}
// 2
strikeThroughFirstLi();
// ****************************************************

// 3
const stringRepId = (id, url) => {
    const imgId = document.querySelector(id)
    imgId.src = url;
}
// 4
stringRepId('#image-1', 'https://media.giphy.com/media/dE5VNLfHyf79K/giphy.gif')
stringRepId('#image-2', 'https://media.giphy.com/media/sTbavrq6EA3GE/giphy.gif')
stringRepId('#image-3', 'https://media.giphy.com/media/R2XQJMdRutBZe/giphy.gif')
// *****************************************************

// 5
const lastLiRemoved = () => {
    const lastChild = document.querySelector('#arguments');
    lastChild.removeChild(lastChild.lastElementChild);
}
// 6
lastLiRemoved();
lastLiRemoved();

// ******************************************************
// ******************************************************

const newElem = () => {
    const newImg = document.createElement('img')
}
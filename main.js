const bodyEl = document.querySelector('body')
const clickMe = document.querySelector('button')

clickMe.addEventListener(
    'click',
    (e) => {
        const randHex = '#' + Math.floor(Math.random()*16777215).toString(16)
        bodyEl.style.background = randHex
    }
)
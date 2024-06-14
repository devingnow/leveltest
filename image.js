const modal1 = document.querySelector('.modal1')
const img1 = document.querySelector('#img1')
const modal2 = document.querySelector('.modal2')
const img2 = document.querySelector('#img2')
const modal3 = document.querySelector('.modal3')
const img3 = document.querySelector('#img3')
const modal4 = document.querySelector('.modal4')
const img4 = document.querySelector('#img4')

img1.addEventListener('click', () => {
    modal1.style.display = 'block';
})
modal1.addEventListener('click', () => {
    modal1.style.display = 'none';
})


img2.addEventListener('click', () => {
    modal2.style.display = 'block';
})
modal2.addEventListener('click', () => {
    modal2.style.display = 'none';
})


img3.addEventListener('click', () => {
    modal3.style.display = 'block';
})
modal3.addEventListener('click', () => {
    modal3.style.display = 'none';
})


img4.addEventListener('click', () => {
    modal4.style.display = 'block';
})
modal4.addEventListener('click', () => {
    modal4.style.display = 'none';
})

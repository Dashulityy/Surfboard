const left = document.getElementById("arrow__left");
const right = document.getElementById("arrow__right");
const slider = document.querySelector(".slider__items");
const items = document.querySelectorAll(".slider__item");


function sliderTransform(direction){

    const width = document.querySelector('.slider__item').offsetWidth
    const currentPosition = +slider.style.left.replace('-', '').replace('px', '')

    let i = 0;

    if (direction == 'right') {
        if (currentPosition == 0 ) {
            i = 1
        } else if (currentPosition > 0 && currentPosition < width * (items.length - 1)) {
            i = currentPosition / width + 1
        }
    } else {
        if (currentPosition == 0 ) {
            i = (items.length - 1)
        } else if (currentPosition > 0) {
            i = currentPosition / width - 1
        }
    }
    slider.style.left = `-${width * i}px`
}

left.addEventListener('click', (e) => {
    e.preventDefault()
    sliderTransform('left')      
})
right.addEventListener('click', (e) => {
    e.preventDefault()
    sliderTransform('right')      
})
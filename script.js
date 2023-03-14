let offset = 0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-v').addEventListener('click', function(){
    offset = offset + 320;
    if(offset > 1280)
    {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; 
})

document.querySelector('.slider-n').addEventListener('click', function(){
    offset = offset - 320;
    if(offset < 0)
    {
        offset = 1280;
    }
    sliderLine.style.left = -offset + 'px'; 
})


window.addEventListener('scroll', function(){
    let scroll = this.document.querySelector('.up-arrow')
    scroll.classList.toggle("active", this.window.scrollY > 500)
})


function scrollTop_(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
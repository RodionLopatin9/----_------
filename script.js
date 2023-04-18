let offset = 0;
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-v').addEventListener('click', function(){
    offset = offset + 800;
    if(offset > 1600)
    {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'; 
})

document.querySelector('.slider-n').addEventListener('click', function(){
    offset = offset - 800;
    if(offset < 0)
    {
        offset = 1600;
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




var modal = document.getElementById("my_modal");
var btn = document.getElementById("btn_modal_window");
var span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

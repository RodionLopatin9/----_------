document.querySelector('#field').addEventListener('click', function(event) {

    // координаты поля относительно окна браузера
    let fieldCoords = this.getBoundingClientRect();
    
    // мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative)
    // таким образом, координаты мяча рассчитываются относительно внутреннего, верхнего левого угла поля
    let ballCoords = {
    top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
    left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };
    
    // запрещаем пересекать верхнюю границу поля
    if (ballCoords.top < 0) ballCoords.top = 0;
    
    // запрещаем пересекать левую границу поля
    if (ballCoords.left < 0) ballCoords.left = 0;
    
    
    // // запрещаем пересекать правую границу поля
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
    ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    
    // запрещаем пересекать нижнюю границу поля
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
    ballCoords.top = field.clientHeight - ball.clientHeight;
    }
    
    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
    }
    )


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
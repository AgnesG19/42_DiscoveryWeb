/* Genera los colores de manera random */
function random_color() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    var i = 0;

    while (i < 6) {
        color += letters[Math.floor(Math.random() * 16)];
        i++;
    }
    return color;
}

/* Cambia el color del fondo y ajusta el tamaño */
function changeColor() {
    var balloon = document.getElementById('balloon');
    document.body.style.backgroundColor = random_color();

    var balloonSize = parseInt(balloon.style.width) || 200;
    balloonSize += 10;

    if (balloonSize > 420) {
        balloonSize = 200;
        balloon.style.backgroundColor = random_color();
    }

    balloon.style.width = balloonSize + 'px';
    balloon.style.height = balloonSize + 'px';
} 


/* NUNCA FUNCIONO, REVISAR */
/* Reduce el tamaño al salir del globo 
function shrink() {
    var balloon = document.getElementById('balloon');
    var balloonSize = parseInt(balloon.style.width) || 200;
    balloonSize -= 5;

    if (balloonSize < 200) {
        balloonSize = 200;
    }

    balloon.style.width = balloonSize + 'px';
    balloon.style.height = balloonSize + 'px';
}

var balloon = document.getElementById('balloon');
balloon.addEventListener('click', changeColor);
balloon.addEventListener('mouseleave', shrink);
*/
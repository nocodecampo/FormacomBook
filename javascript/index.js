/*
var corazon1 = document.getElementById("foto1")
var corazon2 = document.getElementById("foto2")

corazon1.onclick = function () {
    var contador1 = document.getElementById("span1")
    contador1.innerHTML = parseInt(contador1.innerHTML) + 1;
}

corazon2.onclick = function () {
    var contador2 = document.getElementById("span2")
    contador2.innerText = parseInt(contador2.innerText) + 1;
}
*/



/*
// Seleccionamos todos los iconos con la clase fa-heart
const hearts = document.querySelectorAll('.fa-heart');

// Añadimos un evento de click a cada icono
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        // Obtenemos el id del icono
        const id = heart.id;

        // Localizamos el span relacionado usando el mismo id, pero con 'span' en su prefijo
        const span = document.getElementById(`span${id.replace('foto', '')}`);

        // Incrementamos el contenido del span en 1
        if (span) {
            span.textContent = parseInt(span.textContent) + 1;
        }
    });
});
*/

var corazones = document.getElementsByClassName("fa-heart")

for (let index = 0; index < corazones.length; index++) {
    const element = corazones[index];
    element.onclick = function (c) {
        var cont = c.target.nextElementSibling;
        cont.innerHTML++;
    }

}

// Obteniendo elemento por ID y cambiandolo usando innerHTML
const title = document.getElementById('title');
title.textContent = 'Cambiando título desde JS';
title.innerHTML = '<strong>' + title.textContent + '</strong>';
console.log(title.textContent);

const description = document.getElementById('text-description');
description.innerHTML = 'Listado de cursos';


// Obteniendo un HTML Collection
const items = document.getElementsByClassName('list-group-item');

// Lo convertimos en Array, para usar el método forEach
Array.from(items).forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(e.target.textContent);
    })
});


// Obteniendo un NodeList
const elements = document.querySelectorAll('.list-group-item:nth-child(odd)'); // Trabajando con elementos css, los que son pares

// Recibe un elemento y una posición del mismo
elements.forEach((item, index) => {
    // console.log(item.textContent + ', position: ' + index);
    // item.style.backgroundColor = 'lightblue';
});

const list = document.querySelector('li'); // Elemnto padre
// console.log("El papá es: " + list.localName + ", y tiene " + list.childElementCount + " hijos");
// console.log("Los hijos son: ");
// console.log("Primer hijo: " + list.firstElementChild.textContent);
// console.log("Último hijo: " + list.lastElementChild.textContent);

// Obteniendo un elemento padre
// console.log(list.parentElement);

// // Obteniendo un elemento abuelo
// console.log(list.parentElement.parentElement);

// // Obteniendo un elemento nieto
// console.log(list.firstElementChild.firstElementChild)

// Obteniendo un elemento hermano (Comenzando después del primer hijo)
// console.log(list.nextElementSibling.textContent);

// Retrocediendo un elemento desde el último hijo
const lastElement = document.querySelector('#last-course')
// console.log(lastElement.previousElementSibling.textContent);

Array.from(list.children).forEach((item) => {
   // console.log(item);
});


// NODOS

const element = document.querySelector('#first-course');
// console.log(element.childNodes);






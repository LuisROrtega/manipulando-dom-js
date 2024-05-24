const button = document.querySelector('.btn.btn-primary');
const title = document.querySelector('.display-2');
const description = document.querySelector('.description-container');

// // Usando las constantes para ocultar el texto
// button.addEventListener('click', (e) => {
//     if (title.style.display != 'none') {
//         title.style.display = 'none';
//         description.style.display = 'none';
//         button.textContent = "Mostrar";
//     } else {
//         title.style.display = 'block';
//         description.style.display = 'block';
//         button.textContent = "Ocultar";
//     }
// });

// Usando el evento (e.target), a dónde apunta
const list = document.querySelectorAll('.list-group-item');

list.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (item.style.display !== 'none') {
            e.target.style.display = 'none';
        }
    });

    setInterval(() => {
        list.forEach((item) => {
          if (item.style.display === 'none') {
            item.style.display = 'block';
          }
        });
      }, 1000);
});

// Usando el contexto .this
const footer = document.querySelector('.text-footer');

footer.addEventListener('click', function (e) { // this solo trabaja con funciones tradicionales
    if (footer.style.display != 'none') {
        this.style.display = 'none';
    }

    setTimeout(() => {
        if (this.style.display = 'none') {
            this.style.display = 'block';
        }
    }, 2000);
});

button.addEventListener('mouseenter', function (e) {
    this.className = 'btn btn-success';
});

button.addEventListener('mouseleave', function (e) {
    this.className = 'btn btn-primary';
});

// Usando TimeOut()
setTimeout((p1, p2, p3) => {
    // console.log('Hello World! - 2 seconds timeout');
    // console.log(p1 + p2);
    // console.log(p2 + p3);
    // console.log(p3 + p1);
}, 2000, 2, 4, 6);

// const input = document.getElementById('input');

// input.addEventListener('keydown', function (e) {
//     console.log("Tecla presionada: " + e.key);
// });

// input.addEventListener('keyup', function (e) {
//     console.log("Tecla soltada");
// });

// Trabajando sobre formulario
const form = document.getElementById('create-course');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    console.log(title + "\n" + description);
});
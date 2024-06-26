document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn.btn-primary");
  const title = document.querySelector(".display-2");
  const description = document.querySelector(".description-container");

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
  const list = document.querySelectorAll(".list-group-item");

  list.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (item.style.display !== "none") {
        e.target.style.display = "none";
      }
    });

    setInterval(() => {
      list.forEach((item) => {
        if (item.style.display === "none") {
          item.style.display = "block";
        }
      });
    }, 1000);
  });

  // Usando el contexto .this
  const footer = document.querySelector("footer > .container");

  footer.addEventListener("click", function (e) {
    // this solo trabaja con funciones tradicionales
    if (footer.style.display != "none") {
      this.style.display = "none";
    }

    setTimeout(() => {
      if ((this.style.display = "none")) {
        this.style.display = "block";
      }
    }, 2000);
  });

  button.addEventListener("mouseenter", function (e) {
    this.className = "btn btn-success";
  });

  button.addEventListener("mouseleave", function (e) {
    this.className = "btn btn-primary";
  });

  // Usando TimeOut()
  setTimeout(
    (p1, p2, p3) => {
      // console.log('Hello World! - 2 seconds timeout');
      // console.log(p1 + p2);
      // console.log(p2 + p3);
      // console.log(p3 + p1);
    },
    2000,
    2,
    4,
    6
  );

  // const input = document.getElementById('input');

  // input.addEventListener('keydown', function (e) {
  //     console.log("Tecla presionada: " + e.key);
  // });

  // input.addEventListener('keyup', function (e) {
  //     console.log("Tecla soltada");
  // });

  // Trabajando sobre formulario
  // const form = document.getElementById("create-course");

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   let title = document.getElementById("title-form").value;
  //   let description = document.getElementById("description-form").value;

  //   console.log(title + "\n" + description);
  // });

  // const checkbox = document.getElementById("checkbox");

  // checkbox.addEventListener("change", (e) => {
  //   console.log(e.target.checked);
  // });

  // const titleForm = document.getElementById("title-form");

  // titleForm.addEventListener("change", (e) => {
  //   console.dir(e.target.checked);
  // });

  // Propagación de eventos - Event bubbling
  // const li = document.querySelector(".list-group-item");
  // const ul = document.querySelector(".list-group");
  // const divList = document.querySelector('.list');
  // const content = document.querySelector('.content');
  // const body = document.querySelector('body');

  // li.addEventListener("click", showMessage);
  // ul.addEventListener("click", showMessage);
  // divList.addEventListener("click", showMessage);
  // content.addEventListener("click", showMessage);
  // body.addEventListener("click", showMessage);

  // Optimizando código
  // for (let element of document.querySelectorAll('*')) {
  //   element.addEventListener("click", showMessage);
  // }

  // function showMessage(e) {
  //   console.dir("Elemento actual: " + this.tagName);
  //   console.log("Elemento seleccionado: "+ e.target.tagName);
  //   console.log("\n");

  //   setInterval(() => {
  //     if ('click') {
  //       console.clear();
  //     } else {
  //       false;
  //     }
  //   }, 5000);

  //   e.stopPropagation();
  // }

  // Cards Manipulation
  const row = document.querySelector(".row");
  const form = document.getElementById("course-form");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalContainer = document.getElementById("modal-overlay");
  const divEditForm = document.getElementById("edit-form-container");
  const closeForm = document.getElementById("cancel-edit");
  const editForm = document.getElementById("edit-form");
  // const modalOverlay = document.getElementById("modal-overlay");
  // const closeModalBtn = document.getElementById("close-modal");

  let currentCard = null;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let titleForm = document.getElementById("title-form").value.trim();
    let descriptionForm = document
      .getElementById("description-form")
      .value.trim();

    if (!titleForm || !descriptionForm) {
      alert("Los campos deben de contar con información válida");
    } else {
      if (row.childElementCount >= 6) {
        alert("No se pueden agregar más de 6 cursos");
      } else {
        designCard(titleForm, descriptionForm);
        form.reset();
      }
    }
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("edit-title").value;
    let description = document.getElementById("edit-description").value;

    if (title.length > 0 && description.length > 0) {
      currentCard.querySelector("#title-card").textContent = title;
      currentCard.querySelector("#description-card").textContent = description;

      console.log(
        "El título es: " + title + "\n" + "Descripción: " + description
      );

      modalOverlay.style.display = "none";
      divEditForm.style.display = "none";
      editForm.reset();
    } else {
      alert("Los campos deben de contar con información válida");
    }
  });

  closeForm.addEventListener("click", (e) => {
    e.preventDefault();
    modalOverlay.style.display = "none";
    divEditForm.style.display = "none";
  });

  function designCard(titleForm, descriptionForm) {
    let div = document.createElement("div");
    div.className = "col-sm-6 col-md-4";

    let thumbnail = document.createElement("div");
    thumbnail.className = "thumbnail";

    let caption = document.createElement("div");
    caption.className = "caption";

    let h3 = document.createElement("h3");
    h3.id = "title-card";
    h3.textContent = titleForm;

    let p = document.createElement("p");
    p.id = "description-card";
    p.textContent = descriptionForm;

    let btn = document.createElement("a");
    btn.className = "btn btn-danger";
    btn.textContent = "Eliminar";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      deleteCard(div);
    });

    let editBtn = document.createElement("a");
    editBtn.className = "btn btn-primary";
    editBtn.textContent = "Editar";

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      currentCard = div;
      document.getElementById("edit-title").value = h3.textContent;
      document.getElementById("edit-description").value = p.textContent;
      console.dir(row);
      // desginEditCard();  
      // modalOverlay.style.display = "flex";
      modalOverlay.style.display = "flex";
      divEditForm.style.display = "flex";
    });

    caption.appendChild(h3);
    caption.appendChild(p);
    caption.appendChild(btn);
    caption.appendChild(editBtn);
    thumbnail.appendChild(caption);
    div.appendChild(thumbnail);

    row.appendChild(div);
  }

  function deleteCard(card) {
    console.log("Carta a eliminar");
    row.removeChild(card);
  }

  function desginEditCard() {
  // Eliminar el último hijo si existe
  if (modalContainer.lastElementChild) {
    modalContainer.removeChild(modalContainer.lastElementChild);
  }

    let div = document.createElement("div");
    div.className = "modal-content";

    let p = document.createElement("p");
    p.textContent = "Tarjeta creada desde JS";

    let closeBtn = document.createElement("button");
    closeBtn.className = "btn btn-danger";
    closeBtn.id = "close-modal";
    closeBtn.textContent = "Cerrar";

    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.style.display = "none";
    });

    div.appendChild(p);
    div.appendChild(closeBtn);

    modalContainer.appendChild(div);
  }

  // function showCard() {
  //   modalOverlay.style.display = 'flex';
  // }

  // closeModalBtn.addEventListener('click', () => {
  //   modalOverlay.style.display = 'none';
  // });

  // function createCard(titleForm, descriptionForm) {
  //   let card = document.createElement('div');
  //   card.className = 'col-sm-6 col-md-4';
  //   card.innerHTML = `
  //     <div class="thumbnail">
  //       <div class="caption">
  //         <h3 id="title-card">${titleForm}</h3>
  //         <p id="description-card">${descriptionForm}</p>
  //         <a href="#" class="btn btn-danger">Acción</a>
  //       </div>
  //     </div>
  //   `;
  //   row.appendChild(card);
  // }
});

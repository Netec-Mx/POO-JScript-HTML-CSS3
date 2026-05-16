// =====================================
// getElementById + innerHTML
// =====================================

document
  .getElementById("btnCambiar")
  .addEventListener("click", function () {

    let mensaje =
      document.getElementById("mensaje");

    mensaje.innerHTML =
      `<b>Texto cambiado con innerHTML ${Math.random()} </b>`;
  });


// =====================================
// getElementsByName
// =====================================

document
  .getElementById("btnName")
  .addEventListener("click", function () {

    let radios =
      document.getElementsByName("lenguaje");

    alert("Cantidad: " + radios.length);
  });


// =====================================
// getElementsByClassName
// =====================================

document
  .getElementById("btnClase")
  .addEventListener("click", function () {

    let elementos =
      document.getElementsByClassName("saludo");

    alert("Elementos: " + elementos.length);
  });


// =====================================
// createElement + appendChild
// =====================================

document
  .getElementById("btnAgregar")
  .addEventListener("click", function () {

    let nuevo =
      document.createElement("li");

    nuevo.innerHTML =
      "Nuevo elemento";

    document
      .getElementById("lista")
      .appendChild(nuevo);
  });


// =====================================
// insertBefore
// =====================================

document
  .getElementById("btnInsertar")
  .addEventListener("click", function () {

    let nuevo =
      document.createElement("li");

    nuevo.innerHTML =
      "Elemento insertado primero";

    let lista =
      document.getElementById("lista");

    lista.insertBefore(
      nuevo,
      lista.children[0]
    );
  });


// =====================================
// replaceChild
// =====================================

document
  .getElementById("btnReemplazar")
  .addEventListener("click", function () {

    let nuevo =
      document.createElement("p");

    nuevo.innerHTML =
      "Párrafo reemplazado";

    let viejo =
      document.getElementById("parrafoViejo");

    document.body.replaceChild(
      nuevo,
      viejo
    );
  });


// =====================================
// setAttribute
// =====================================

document
  .getElementById("btnAtributo")
  .addEventListener("click", function () {

    let imagen =
      document.getElementById("imagen");

    imagen.setAttribute(
      "width",
      "300"
    );
  });


// =====================================
// removeAttribute
// =====================================

document
  .getElementById("btnRemoveAttr")
  .addEventListener("click", function () {

    let imagen =
      document.getElementById("imagen");

    imagen.removeAttribute("alt");

    alert("Atributo alt eliminado");
  });


// =====================================
// removeChild
// =====================================

document
  .getElementById("btnEliminar")
  .addEventListener("click", function () {

    let lista =
      document.getElementById("lista");

    if (lista.children.length > 0) {

      lista.removeChild(
        lista.lastElementChild
      );
    }
  });


// =====================================
// createTextNode
// =====================================

document
  .getElementById("btnTexto")
  .addEventListener("click", function () {

    let texto =
      document.createTextNode(
        "Texto creado con createTextNode"
      );

    let p =
      document.createElement("p");

    p.appendChild(texto);

    document
      .getElementById("contenedorTexto")
      .appendChild(p);
  });


// =====================================
// cloneNode
// =====================================

document
  .getElementById("btnClonar")
  .addEventListener("click", function () {

    let original =
      document.getElementById("original");

    let copia =
      original.cloneNode(true);

    document.body.appendChild(copia);
  });
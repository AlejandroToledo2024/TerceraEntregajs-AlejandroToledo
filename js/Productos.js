let carrito = [];
const cardData = [
  {
    id: 1,
    Nombre: "Juego de Comedor",
    descripcion: "disponible en varios colores y medidas a eleccion",
    imageUrl: "..//assets/Jgo comedor-Photoroom.jpg",
    precio: 7000,
  },
  {
    id: 2,
    Nombre: "Sommier 1 Plaza",
    descripcion: "base firme de madera y colchon muy comodo",
    imageUrl: "../assets/sommier 1 plaza.jpg",
    precio: 4500,
  },
  {
    id: 3,
    Nombre: "Sommier 2 plazas",
    descripcion: "Base reforfazda colchin soporta peso hasta 200kg ",
    imageUrl: "../assets/sommier 2 plazas.png",
    precio: 9000,
  },
  {
    id: 4,
    Nombre: "Escritorio PC",
    descripcion: "Escritorio PC comodo y confortable para el trabajo diario",
    imageUrl: "../assets/escritorio-Photoroom.jpg",
    precio: 7500,
  },
  {
    id: 5,
    Nombre: "Mueble Cocina",
    descripcion:
      "Mueble para cocina muy espacioso y con gran lugar de almacenamiento , siponible en varios colores",
    imageUrl: "../assets/Mueble Cocina-Photoroom.jpg",
    precio: 12000,
  },
  {
    id: 6,
    Nombre: "Bar esquinero",
    descripcion: "Bar compacto ideal para espacio reducido , en varios colores",
    imageUrl: "../assets/Bar Mueble-Photoroom.jpg",
    precio: 7500,
  },
  {
    id: 7,
    Nombre: "Placard de Dormitorio 6 puertas",
    descripcion:
      "placard de Dormitorio con divisiones comodas para toda la familia. disponible en varios colores",
    imageUrl: "../assets/placard 6 puertas-Photoroom.jpg",
    precio: 10000,
  },
  {
    id: 8,
    Nombre: "Bibliotecas",
    descripcion:
      "Bibliotecas para almacenamiento personal y gran elegancia disponible en varios colores",
    imageUrl: "../assets/d5c19eed1c67ba36308ece909f8f06e3-Photoroom.jpg",
    precio: 5000,
  },
  {
    id: 9,
    Nombre: "Mesa Ratona",
    descripcion: "Mesa ratona moderna con diseño elegante, ideal para salas de estar, disponible en varios colores",
    imageUrl: "../assets/0ebb3b93-622e-4bd2-9099-01b0a395fd22-Photoroom.jpg",
    precio: 3000
  },
  {
    id: 10,
    Nombre: "Silla de Oficina",
    descripcion: "Silla ergonómica de oficina con respaldo ajustable y ruedas, disponible en varios colores",
    imageUrl: "../assets/Greta-Tapizado-Negro-scaled.webp",
    precio: 6500
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const contenedorDeCartas = document.getElementById("contenedorDeCartas");

  function createCatalogo(nombre, descripcion, imageUrl, precio) {
    const card = document.createElement("div");
    card.className = "card";

    const cardImage = document.createElement("img");
    cardImage.src = imageUrl;
    cardImage.alt = "Imagen del producto";

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = nombre;

    const cardDescription = document.createElement("p");
    cardDescription.textContent = descripcion;

    const cardPrice = document.createElement("p");
    cardPrice.textContent = `Precio: ${precio}`;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardPrice);

    return card;
  }

  // Crear y mostrar las tarjetas de productos
  cardData.forEach((data) => {
    const card = createCatalogo(
      data.Nombre,
      data.descripcion,
      data.imageUrl,
      data.precio
    );
    const botonAdd = document.createElement("button");
    botonAdd.textContent = "Agregar al carrito";
    botonAdd.classList = "nuevoBtn";
    botonAdd.id = data.id;

    card.appendChild(botonAdd);
    contenedorDeCartas.appendChild(card);

    // Agregar producto al carrito y guardarlo en localStorage
    botonAdd.addEventListener("click", () => {
      carrito.push({
        nombre: data.Nombre,
        descripcion: data.descripcion,
        imageUrl: data.imageUrl,
        precio: data.precio,
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Toastify({

        text:`${data.Nombre} fue agregado al carrito`,
        
        duration: 3000
        
        }).showToast();
    });
  });

  // Mostrar el carrito al hacer clic en el botón
  document.getElementById("mostarCarro").addEventListener("click", () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const carritoContainer = document.getElementById("carritoContainer");

    carrito.forEach((data, index) => {
      const card = createCatalogo(
        data.nombre,
        data.descripcion,
        data.imageUrl,
        data.precio
      );
      const botonRem = document.createElement("button");
      botonRem.textContent = "Borrar del carrito";
      botonRem.classList = "nuevoBtn";
      botonRem.id = index;

      card.appendChild(botonRem);
      carritoContainer.appendChild(card);

      // Eliminar el producto del carrito
      botonRem.addEventListener("click", () => {
        carrito.splice(index);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        carritoContainer.removeChild(card);
        Toastify({

          text:"Se ha eliminado Correctamente",
          
          duration: 3000
          
          }).showToast();
      });
    });
  });
});

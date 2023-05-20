
import { Products } from "./dataBase.js";

const containerProduct = document.getElementById("sctn-view");

function pintarproducto(chosenProduct) {
  const product = Products.find((product) => product.id === chosenProduct);

  if (!product) {
    console.log("Product not found");
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="row-mine">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${product.image}" class="d-block" alt="..." />
          </div>
        </div>
      </div>
      <div class="price-cont">
        <h1 class="title">${product.title}</h1>
        <h2>${product.price}</h2>
        <p>
          <span class="red-bold">
            <i class="bi bi-credit-card-2-front"></i> 6 Cuotas sin interés
          </span>
          de ${product.payment}
        </p>
        <p>
          <span class="red-bold"><i class="bi bi-cash-coin"></i> 10% de Descuento</span>
          pagando con Efectivo o Depósito/Transferencia Bancaria <br />
          20% de recargo en 12 cuotas (Solicitar link de pago por Whatsapp)
        </p>
        <a href=""><span class="red-bold">Ver más detalles</span></a>
        <button type="button" class="butt">Agregar al Carrito</button>
        <ul class="caracter">
          <li>${product.description.value1}</li>
          <li>${product.description.value2}</li>
          <li>${product.description.value3}</li>
        </ul>
      </div>
    </div>`;

  containerProduct.appendChild(div);
}

const chosenProduct = localStorage.getItem('productSelected');
pintarproducto(chosenProduct)
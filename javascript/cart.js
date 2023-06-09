import { Products } from "./dataBase.js";

const cartLocalStorage = JSON.parse(localStorage.getItem('products'));

const containerCart = document.querySelector("#container-cart");
const infoCart = document.querySelector("#info-cart");
const totalInforCart = document.querySelector("#total-info-cart");
const removeProduct = document.querySelectorAll(".delete-product")
let addButtons = document.querySelectorAll(".delete-product")

/**************MUESTRA EL LISTADO DE PRODUCTOS******************* */
function showProductCart(cartMemory) {
	containerCart.innerHTML = "";
  
	const productGroups = new Map();
  
	cartMemory.forEach((product) => {
	  if (productGroups.has(product.id)) {
		productGroups.get(product.id).quantity++;
	  } else {
		productGroups.set(product.id, {
		  product,
		  quantity: 1,
		});
	  }
	});
	productGroups.forEach((group) => {
		const div = document.createElement("div");
		div.innerHTML = `
		  <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
			<div class="d-flex flex-row">
			  <img class="rounded" src="${group.product.image}" width="40">
			  <div class="ml-2">
				<span class="font-weight-bold d-block">${group.product.title}</span>
				<span class="font-weight-bold d-block">Cantidad: ${group.quantity}</span>
			  </div>
			</div>
			<div class="d-flex flex-row align-items-center">
			  <span class="d-block"></span>
			  <span class="d-block mx-5 font-weight-bold">${group.product.price}</span>
			  <span>
				<button data-productid="${group.product.id}" class="delete-product" id="${group.product.id}">
				  <i class="deleteproduct bi bi-trash"></i>
				</button>
			  </span>
			  <i class="fa fa-trash-o ml-3 text-black-50"></i>
			</div>
		  </div>
		`;
	
		containerCart.append(div);
	  });
	
}

/**************MUESTRA LA INFO DEL CARRO******************* */
function showInfoCart(cart) {
	const infoCart = document.querySelector("#info-cart");
	const div = document.createElement("div");
	div.innerHTML= `
	<div 
	class="d-flex justify-content-between"><span>Tu tienes ${cart.length} items en el carro</span>
	</div>
	`;
	infoCart.append(div)
}

function calcularTotalCart (cart) {
	let total = 0

	cart.forEach( product => {
		total += product.price
	})

	return total
}


/**************MUESTRA EL TOTAL Y LOS IMPUESTOS******************* */
function showInfortotalCart (total) {
	const div = document.createElement("div");
	div.innerHTML= `
	<div>
		<div class="d-flex justify-content-between information"><span>Total</span><span>$${total}</span></div><button id="payButton" class="btn btn-dark text-danger  btn-block d-flex justify-content-between mt-3" type="button"><span>$${total}</span><span class="mx-3">Pagar<i class="fa fa-long-arrow-right mx-3"></i></span></button></div>
	</div>
	`
	totalInforCart.append(div)
}

showProductCart(cartLocalStorage)
showInfoCart(cartLocalStorage)
const total = calcularTotalCart(cartLocalStorage)
showInfortotalCart(calcularTotalCart(cartLocalStorage))


/**************BORRAR PRODUCTOS DEL CARRO******************* */

function deleteProductCart(e) {
	const idProduct = e.currentTarget.dataset.productid || e.currentTarget.parentElement.id;
	const index = cartLocalStorage.findIndex(product => product	.id === idProduct);
	cartLocalStorage.splice(index, 1);
	localStorage.setItem('products', JSON.stringify(cartLocalStorage))
	const productToDelete = document.getElementById(idProduct);
	if (productToDelete) {
	  productToDelete.remove();
	  
	}
	location.reload()
}
  
  const deleteButtons = document.getElementsByClassName("deleteproduct");
  for (let i = 0; i < deleteButtons.length; i++) {
	deleteButtons[i].addEventListener("click", deleteProductCart);
 }
 
 const buttonpay = document.getElementById("payButton")
 buttonpay.addEventListener("click", bugCart)
 
 
 function bugCart() {
 
 let resultado = window.alert("Oops! Ocurrió un error Prueba más Tarde");

 
 }





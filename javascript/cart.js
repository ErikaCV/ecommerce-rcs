const cartLocalStorage = JSON.parse(localStorage.getItem('products'));

const containerCart = document.querySelector("#container-cart");
const infoCart = document.querySelector("#info-cart");
const totalInforCart = document.querySelector("#total-info-cart");
const removeProduct = document.querySelectorAll(".delete-product")
let addButtons = document.querySelectorAll(".delete-product")

/**************MUESTRA EL LISTADO DE PRODUCTOS******************* */
function showProductCart (cartMemory) {
	containerCart.innerHTML = "";

	cartMemory.forEach( product => {
		const div = document.createElement("div");
		div.innerHTML= `
				<div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
					<div class="d-flex flex-row"><img class="rounded" src="${product.image}" width="40">
						<div class="ml-2"><span class="font-weight-bold d-block">${product.title}</div>
					</div>
						<div class="d-flex flex-row align-items-center">
							<span class="d-block"></span>
							<span class="d-block mx-5 font-weight-bold">${product.price}</span>
							<span><button class="delete-product" id="${product.id}"><i class="bi bi-trash3"></i></button></span>
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
	<div class="d-flex justify-content-between"><span>Tu tienes ${cart.length} items en el carro</span>
		<div class="d-flex flex-row align-items-center"><span class="text-black-50 mx-2">Sort by: </span>
			<div class="price ml-2"><span class="mx-1">price</span><i class="fa fa-angle-down"></i></div>
		</div>
	</div>`;
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
		<div class="d-flex justify-content-between information"><span>Subtotal</span><span>${total}</span></div>
		<div class="d-flex justify-content-between information"><span>Impuestos</span><span>$20.00</span></div>
		<div class="d-flex justify-content-between information"><span>Total (Incl. Impuestos)</span><span>${total}</span></div><button class="btn btn-primary btn-block d-flex justify-content-between mt-3" type="button"><span>${total}</span><span class="mx-3">Pagar<i class="fa fa-long-arrow-right mx-3"></i></span></button></div>
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
	console.log(e)
	const idProduct = e.currentTarget.id;

	//Retorna la posicion del producto buscado
	const index = cartLocalStorage.findIndex(product => product.id === idProduct);

	//Borrar el producto del carro en la posicion del producto encontrada arriba
	cartLocalStorage.splice(index, 1);

	//Reescribir el local storage
	localStorage.setItem('products', JSON.stringify(cartLocalStorage))
}
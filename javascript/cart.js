import { Cart } from "./database.js";

const containerCart = document.querySelector("#container-cart");
const infoCart = document.querySelector("#info-cart");

function showProductCart (cart) {
	containerCart.innerHTML = "";

	cart.forEach( product => {
		const div = document.createElement("div");
		div.innerHTML= `
				<div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
					<div class="d-flex flex-row"><img class="rounded" src="${product.image}" width="40">
						<div class="ml-2"><span class="font-weight-bold d-block">${product.title}</span><span class="spec">256, Navy Blue</span></div>
					</div>
						<div class="d-flex flex-row align-items-center"><span class="d-block">2</span><span class="d-block mx-5 font-weight-bold">${product.price}</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
					</div>
				<p>${product.title}</p>
        `;
		
			containerCart.append(div); 
	});
}

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

showProductCart(Cart)
showInfoCart(Cart)
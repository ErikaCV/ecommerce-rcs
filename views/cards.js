import { listPorducts, searchProduct } from '../javascript/product.js';
import { Cart } from '../javascript/database.js';

const containerProducts = document.querySelector("#productsContainer");
const categoriesButtons = document.querySelectorAll(".categ-butt");
let addButtons = document.querySelectorAll(".add-cart")


function loadproducts(chosenProducts) {  
    containerProducts.innerHTML = "";

    chosenProducts.forEach(product =>{

        const div = document.createElement("div"); 
        div.classList.add("card");
        div.innerHTML= `
					<img src="${product.image}"class="card-img-top" alt="${product.title}">
					<div class="card-body text-center">
					<h3 class="card-title">${product.title}</h3>
					<p class="card-text"><span class="red-bold">PRECIO</span><br>$${product.price}</p>
					<a href="#" id="${product.id}" class="btn add-cart">Agregar al Carrito</a>
					</div>
        `;

        containerProducts.append(div); 
    });
    
    refreshaddbutton()
}
    
loadproducts(listPorducts());

categoriesButtons.forEach(button => {
	button.addEventListener("click",(e) => {
			
		categoriesButtons.forEach(button => button.classList.remove("active"));

		e.currentTarget.classList.add("active");


		if(e.currentTarget.id != "allof") {
		const productsButton = Products.filter(product => product.category.id === e.currentTarget.id);
		loadproducts(productsButton);
		} else {
				loadproducts(Products)
		}
	})
});


function refreshaddbutton() {
  addButtons = document.querySelectorAll(".add-cart");
  addButtons.forEach(boton => {
      boton.addEventListener("click", addToCart);
  });
}

function addToCart(e) {
	const idProduct = e.currentTarget.id;
	const productAdded = addProductCart(idProduct)

	console.log(productAdded)
}

function addProductCart(id) {
	const productAdded = searchProduct(id);

 	Cart.push(productAdded);

	localStorage.setItem("products", JSON.stringify(Cart));

 return Cart
}
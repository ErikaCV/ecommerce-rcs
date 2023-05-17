import { listPorducts, searchProduct } from '../javascript/product.js';
import { Products } from './dataBase.js';
import { filterProducts } from './filter.js';


const miArrayDeObjetos = JSON.parse(localStorage.getItem('miArray'));

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
					</div>
					<div class="card-body d-flex filternone">
					    <a href="#" id="${product.id}" class="btn add-cart filternone"><i class="bi bi-cart-plus-fill"></i></a>
					    <a href="#" data-productid="${product.id}" class="btn btn-danger p-1 m-1 filternone product">Ir al Producto</a>
					</div>
					
        `;


								
			
        containerProducts.append(div); 
    });
    
    refreshaddbutton()
}
    
loadproducts(Products)
filterProducts()

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

			
	location.reload()
}


function addProductCart(id) {
	const productAdded = searchProduct(id);
	
	

	//VERIFICAR SI EXISTE
	if (!localStorage.getItem('products')) {
		localStorage.setItem('products', JSON.stringify([]));
	}

	//Buscamos el carro de local storage y convertimos a JSON
 	const cartLocalStorage = JSON.parse(localStorage.getItem('products'));

	//Pusheamos el array del cart de LOCALSTORAGE
	cartLocalStorage.push(productAdded);

	localStorage.setItem("products", JSON.stringify(cartLocalStorage));
	
 return cartLocalStorage

}

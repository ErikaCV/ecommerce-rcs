import { searchProduct } from "./product.js";

const botonView = document.getElementById("addCartProduct")
botonView.addEventListener("click", addToCartView)

function addToCartView(e) {
	const idProduct =  e.target.dataset.productid;
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

list.addEventListener("click", (e) => {
  const dataSetInfo = e.target.dataset.productid;

	localStorage.setItem('productSelected', dataSetInfo);
});

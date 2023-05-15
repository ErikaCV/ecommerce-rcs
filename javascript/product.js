import { Products } from "./dataBase.js";

const listPorducts = () => {
	return Products
}

const searchProduct = (idProduct) => {
	const product = Products.find(product => product.id === idProduct)

	if (!product) {
		return console.log('Product not Found');
	}

	return product
};

function callToProduct(Products) {
	addButtons = document.querySelectorAll("#product-card");
	addButtons.forEach(boton => {
		boton.addEventListener("click", searchtarget);
	});

}

function searchtarget(e) {
	const idProduct = e.currentTarget.id;
	const productFound = Products.find(product => product.id === idProduct);

	return productFound
}

export { searchProduct, listPorducts }


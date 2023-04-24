import { Products } from "./dataBase.js";

const listPorducts = () => {
	return Products
}

const searchProduct = (idProduct) => {
		const product = Products.find(product => product.id === idProduct)
	
		if (!product) {
			return console.log('Product not Founed');
		}
	
		return product
};

export { searchProduct, listPorducts }
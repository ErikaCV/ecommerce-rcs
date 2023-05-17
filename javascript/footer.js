import { Users } from "./dataBase.js";

const containerFooter = document.getElementById ("container-footer")

function loadusers() {  
    containerFooter.innerHTML = "";

    Users.forEach( user =>{

        const div = document.createElement("div"); 
        div.classList.add("cont-items");
        div.innerHTML= `
        <div>
            <p>${user.name}</p>
            <a href="#">
                <a href="${user.gitHub}"><i class="bi bi-github icono-github"></i></a>
            </a>
            <a href="#">
                <a href="${user.linkedin}"><i class="bi bi-linkedin icono-linkedin"></i></a>
            </a>
        </div>		
        `;

        containerFooter.append(div); 
    });

    
    
}

loadusers()
        

function showInfoCountCart() { 
    const cartLocalStorage = JSON.parse(localStorage.getItem('products'));

	let infoCart = document.getElementById("cart-count");

	const span = document.createElement("span");
	span.innerHTML= `
	<span class="count-number">${cartLocalStorage.length}</span>
	`;
	infoCart.appendChild(span)
}

showInfoCountCart()



























/***Busqueda ****

let boton = document.getElementById("searchButton");

boton.addEventListener("click", () => {

  let input = document.getElementById("searchInput");
  let valor = input.value;

  alert("El valor del campo es:"+ valor);
  
});


document.getElementById('search-form').addEventListener("submit", function(e) {
    e.preventDefault();

    let input = document.getElementById("searchInput");
    let valor = input.value;

    window.location('http://127.0.0.1:5500/views/products.html')

    alert("El valor del campo es:"+ valor);

    console.log('Estamos buscando un perrito malvado.')
})*/

/***********************BARRA DE BUSQUEDA*******************************/
// document.getElementById('searchButton').addEventListener('click', search);

// function search() {
//   const searchTerm = document.getElementById("inputSearch").value.toLowerCase();
//   const searchResults = Products.filter(product => 
//     product.name.toLowerCase().includes(searchTerm) || 
//     product.category.toLowerCase().includes(searchTerm)
//   );

//   displayResults(searchResults);
// }

// function displayResults(results) {
//   const searchResultsElement = document.getElementById('searchResults');
//   searchResultsElement.innerHTML = '';

//   if (results.length === 0) {
//     searchResultsElement.innerText = 'No se encontraron resultados.';
//   } else {
//     results.forEach(product => {
//       const productElement = document.createElement('div');
//       productElement.classList.add("card");
//       productElement.innerHTML = `
//         <img src="${product.image}" class="card-img-top" alt="${product.title}">
//         <div class="card-body text-center">
//           <h3 class="card-title">${product.title}</h3>
//           <p class="card-text"><span class="red-bold">PRECIO</span><br>$${product.price}</p>
//           <a href="#" id="${product.id}" class="btn add-cart">Agregar al Carrito</a>
//         </div>
//       `;
//       searchResultsElement.appendChild(productElement);
//     });
//   }
// }
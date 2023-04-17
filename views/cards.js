const productsArray = [
    {
        id: "product01",
        title: "Pechera Radikal Racing",
        image: "../assets/img/cards/pechera1.webp",
        stock: 1, 
        category: {
            id: "accesories",
            name: "Accesorios"
        },
        price: 26690
    },
    {
        id: "product02",
        title: "Frenos Shimano  Gama Media",
        image: "../assets/img/cards/frenos.webp",
        stock: 0,
        category: {
            id: "accesories",
            name: "Accesorios"  
        },
        price: 90000
    },
    {
        id: "product03",
        title: "Cubierta de Ruta Maxxis",
        image: "../assets/img/cards/cubierta.webp",
        stock: 1,
        category: {
            id: "accesories" ,
            name: "Accesorios"
        },
        price: 25600
    },
    {
        id: "product04",
        title: "Ciclo Compu IGPS Sports" ,
        image: "../assets/img/cards/ciclocompu.webp",
        stock: 1,
        category: {
            id: "accesories",
            name: "Accesorios"
        },
        price: 64500
    },
    {
        id: "product05",
        title: "Sensor de Velocidad IGPS",
        image: "../assets/img/cards/sensor velocidad.webp", 
        stock: 1,
        category: {
            id: "accesories",
            name: "Accesorios"
        },
        price: 13200
    },
    {
        id: "product06",
        title: "Guantes Troy Lee - Turquesa",
        image: "../assets/img/cards/guantes1.webp",
        stock: 1,
        category: {
            id:"dress",
            name: "Indumentaria"
        },
            price: 14900
    },
    {
        id: "product07",
        title: "Calza Aero 03 Negra",
        image: "../assets/img/cards/calza.webp",
        stock: 1,
        category: {
            id: "dress",
            name: "Indumentaria"
        },
        price: 19900
    },
    {
        id: "product08",
        title: "Blue Jersey Zeroox",
        image: "../assets/img/cards/jersey blue front.webp",
        stock: 1,
        category: {
            id: "dress",
            name: "Indumentaria"
        },
        price: 13800
    },
    {
        id: "product09",
        title: "Jersey Dama Designs Lilium",
        image: "../assets/img/cards/jerseydama.webp",
        stock: 0,
        category: {
            id: "dress" ,
            name: "Indumentaria"
        },
        price: 24500
    },
    {
        id: "product10",
        title: "Rompevientos Magenta - Negro",
        image: "../assets/img/cards/rompeviento.webp",
        stock: 1,
        category: {
            id: "dress" ,
            name: "Indumentaria"
        },
        price: 20000
    },
    {
        id: "product11",
        title:"Zenith Urban - Amarillo",
        image: "../assets/img/cards/urbanazenith ffw amarillo.webp",
        stock: 0,
        category: {
            id: "bikes",
            name: "Bicicletas"
        },
        price: 159200
    },
    {
        id: "product12",
        title: "Zenith Andes - Negro",
        image: "../assets/img/cards/zenith.webp",
        stock: 1,
        category: {
            id: "bikes",
            name: "Bicicletas"
        },
        price: 184900
    },
    {
        id: "product13",
        title: "Camicleta Niño Rembrandt - Lima",
        image: "../assets/img/cards/rembrandt jumper.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 33500
    },
    {
        id: "product14",
        title: "Zenith Riva Elite - Naranja",
        image: "../assets/img/cards/zenith riva.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price:  339000
    },
    {
        id: "product15",
        title: "Zenith Calea - Gris",
        image: "../assets/img/cards/Bicicleta Mtb Zenith.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 411900
    },
    {
        id: "product16",
        title: "Zenith Atacama - Negro",
        image: "../assets/img/cards/zenith atacama.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 160000
    },
    {
        id: "product17",
        title: "Zenith Woman Cima - Gris",
        image: "../assets/img/cards/woman cima.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 180000
    },
    {
        id: "product18",
        title: "Zenith Calea Elite - Roja",
        image: "../assets/img/cards/zenith roja.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 505000
    },
    {
        id: "product19",
        title: "Zenith Cima c/Suspensión",
        image: "../assets/img/cards/zenith con supension.webp",
        stock: 0,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 154900
    },
    {
        id: "product20",
        title: "Zenith Andes Elite - Celeste",
        image: "../assets/img/cards/zenith andes elite.webp",
        stock: 1,
        category: {
            id: "bikes" ,
            name: "bicicletas"
        },
        price: 230000
    }

];

//DOM 



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
    
loadproducts(productsArray);

categoriesButtons.forEach(button => {
    button.addEventListener("click",(e) => {
        
        categoriesButtons.forEach(button => button.classList.remove("active"));

        e.currentTarget.classList.add("active");


        if(e.currentTarget.id != "allof") {
        const productsButton = productsArray.filter(product => product.category.id === e.currentTarget.id);
        loadproducts(productsButton);
        } else {
            loadproducts(productsArray)
        }

 
        


    })



});


function refreshaddbutton() {
    addButtons = document.querySelectorAll(".add-cart");
    addButtons.forEach(boton => {
        boton.addEventListener("click", addToCart);
    });
}
const productsInCart = [];

function addToCart(e) {
   const idboton = e.currentTarget.id;
   const  productAdded = productsArray.find(product => product.id === idboton);
   if(productsInCart.some(producto =>producto.id === idboton)){
    const index = productsInCart.findIndex(producto => producto.id === idboton)
    productsInCart[index].cantidad++

   }else{
      productAdded.cantidad = 1
      productsInCart.push(productAdded);

   }
console.log(productsInCart)

   
   
   
   
    

}


    

    
 
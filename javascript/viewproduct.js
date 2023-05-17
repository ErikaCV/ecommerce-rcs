function loadproducts(chosenProducts) {  
    containerProducts.innerHTML = "";

    chosenProducts.forEach(product =>{

        const main = document.createElement("main"); 
        main.classList.add("sectn");
        main.innerHTML= `
        <div class="row-mine">
        <div id="carouselExample" class="carousel slide">
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img
               src="../assets/img/cards/jersey blue front.webp"
               class="d-block"
               alt="..."
             />
           </div>
        
          </div>
        </div>
        <div class="price-cont">
         <h1 class="title">Jersey Ziroox Vietnam Essence - azul</h1>
         <h2>$15.000</h2>
         <p>
           <span class="red-bold">
             <i class="bi bi-credit-card-2-front"></i> 6 Cuotas sin
             interés</span>
           de $2300
         </p>
         <p>
           <span class="red-bold"><i class="bi bi-cash-coin"></i> 10% de Descuento</span>
           pagando con Efectivo o Depósito/Transferencia Bancaria <br />
           20% de recargo en 12 cuotas (Solicitar link de pago por Whatsapp)
         </p>
         <a href=""><span class="red-bold">Ver más detalles</span></a>
        
        <button type="button" class="butt">Agregar al Carrito</button>
        <ul class="caracter">
          <li>Cremallera YKK ® AUTOMATIC LOCK</li>
          <li>Mangas sin costura con antideslizante</li>
          <li>Molderia Slim Fit</li>
        
        </ul>
        </div>
        </div> 
					
        `;


								
			
        containerProducts.append(div); 
    });
}





































//  <div class="row-mine">
// <div id="carouselExample" class="carousel slide">
//  <div class="carousel-inner">
//    <div class="carousel-item active">
//      <img
//        src="../assets/img/cards/jersey blue front.webp"
//        class="d-block"
//        alt="..."
//      />
//    </div>

//   </div>
// </div>
// <div class="price-cont">
//  <h1 class="title">Jersey Ziroox Vietnam Essence - azul</h1>
//  <h2>$15.000</h2>
//  <p>
//    <span class="red-bold">
//      <i class="bi bi-credit-card-2-front"></i> 6 Cuotas sin
//      interés</span>
//    de $2300
//  </p>
//  <p>
//    <span class="red-bold"><i class="bi bi-cash-coin"></i> 10% de Descuento</span>
//    pagando con Efectivo o Depósito/Transferencia Bancaria <br />
//    20% de recargo en 12 cuotas (Solicitar link de pago por Whatsapp)
//  </p>
//  <a href=""><span class="red-bold">Ver más detalles</span></a>

// <button type="button" class="butt">Agregar al Carrito</button>
// <ul class="caracter">
//   <li>Cremallera YKK ® AUTOMATIC LOCK</li>
//   <li>Mangas sin costura con antideslizante</li>
//   <li>Molderia Slim Fit</li>

// </ul>
// </div>
// </div> 
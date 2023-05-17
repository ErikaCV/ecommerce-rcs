const Products = [
	{
			id: "product01",
			title: "Pechera Radikal Racing",
			image: "../assets/img/cards/pechera1.webp",
			stock: 1, 
			category: {
					id: "accesories",
					name: "Accesorios"
			},
			price: 26690,
			payment: 4.449,
			description:{
				value1: "Ajuste Velcro Trasero" ,
				value2: "Tecnología PEAD alta densidad",
				value3: "Broches laterales ajustables",
			},
	},
	{
			id: "product02",
			title: "Frenos Shimano  Gama Media",
			image: "../assets/img/cards/frenos.webp",
			stock: 1,
			category: {
					id: "accesories",
					name: "Accesorios"  
			},
			price: 90000,
			payment: 15000, 
			description:{
				value1:"Frenado intuitivo y potente",
				value2:"Aplicación de Frenos más rápída con recorrido libre más corto",
				value3:"Cockpit optimizado y regulable por el ciclista",

			},
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
			price: 25600,
			payment: 4277 , 
			description:{
				value1:"Tecnología MaxxShield, hace la cubierta mucho más resistente a los pichanzos",
				value2:"Presión máxima: 120psi",
				value3:"Aro de Kevlar",

			},
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
			price: 64500,
			payment: 10750 , 
			description:{
				value1:"Retroiluminación automática",
				value2:"Capacidad de memoria: 16M 200h",
				value3:"Inalámbrico: BLE5.0/ANT+",


			},
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
			price: 13200,
			payment: 2200  , 
			description:{
				value1:"Duración de batería 300 horas",
				value2:"Peso: 7,8g",
				value3:"Dispositivo compatible con : Ciclocomputador GPS: BLE/ANT+",

			},
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
					price: 14900,
					payment: 2484 , 
			description:{
				value1:"45% cuero sintético, 38% poliéster, 9% poliamida, 5% PVC, 3% elastano",
				value2:"Palma de cuero sintético perforado",
				value3:"Serigrafia de silicona en dedos de frenado, apto también para táctil del celular",

			},
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
			price: 19900,
			payment: 3316, 
			description:{
				value1:"Elástico siliconado en extremo de las piernas",
				value2:" Bandas reflectivas en elastico siliconado (especial para aquellos momentos donde tenemos menor visibilidad y necesitamos ser vistos)",
				value3:" Tela de badana que minimiza riesgo de irritación.",

			},
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
			price: 13800,
			payment: 2300 , 
			description:{
				value1:"Jersey de bicicleta de montaña con ajuste relajado, informal en la naturaleza, técnico por diseño",
				value2:"Bolsillo compacto con cremallera en el lado izquierdo, con logotipo TLD reflectante.",
				value3:"Limpieza óptica dentro",

			},
	},
	{
			id: "product09",
			title: "Jersey Dama Designs Lilium",
			image: "../assets/img/cards/jerseydama.webp",
			stock: 1,
			category: {
					id: "dress",
					name: "Indumentaria"
			},
			price: 24500,
			payment: 4085 , 
			description:{
				value1:" Cierre invisible YKK ® AUTOMATICK LOCK..",
				value2:" Elástico antideslizante en toda la cintura.",
				value3:" Tejidos con factor UV 20.",

			},
	},
	{
			id: "product10",
			title: "Rompeneqvientos Magenta - Negro",
			image: "../assets/img/cards/rompeviento.webp",
			stock: 1,
			category: {
					id: "dress",
					name: "Indumentaria"
			},
			price: 20000,
			payment:3333 , 
			description:{
				value1:" Cintura elástica tejida y siliconada para mejor confort y agarre.",
				value2:" Bandas reflectivas en bolsillo trasero (especial para aquellos momentos donde tenemos menor visibilidad y necesitamos ser vistos)",
				value3:" Orificio para mp3 en bolsillo trasero nos permite esconder el cable dentro del jersey evitando que se enganche con algún objeto.",

			},
	},
	{
			id: "product11",
			title:"Zenith Urban - Amarillo",
			image: "../assets/img/cards/urbanazenith ffw amarillo.webp",
			stock: 1,
			category: {
					id: "bikes",
					name: "Bicicletas"
			},
			price: 159200,
			payment: 26533, 
			description:{
				value1:"Cuadro FFW acero Hi-Ten. Rodado 700C.",
				value2:"Horquilla rigida.",
				value3:"Single speed con piñon libre y fijo.",

			},
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
			price: 184900,
			payment: 30816 , 
			description:{
				value1:"CUADRO: Zenith Andes de aluminio 6061, rodado 29, frente integrado, montaje para portapaquetes, montaje para freno a disco, punta cambiable.",
				value2:"CADENA: Shimano HG40",
				value3:"SHIFTERS: Shimano Altus M315>",

			},
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
			price: 33500,
			payment: 5591 , 
			description:{
				value1:"La mejor manera para que los niños aprendan a andar en bicicleta!",
				value2:"Cuentan con certificado de seguridad del INTI.",
				value3:"Altura regulable de asiento: 35/43 cm al suelo.",

			},
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
			price:  339000,
			payment: 56500 , 
			description:{
				value1:" Cuadro RIVA aluminio 6061. Rodado 29.",
				value2:" Horquilla de suspensión Suntour XCT30 HLO (con bloqueo). 100 mm.",
				value3:" Ruedas con aros Cross DW23D y mazas Shimano.",

			},
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
			price: 411900,
			payment: 68500, 
			description:{
				value1:"Frenos a disco hidraulico Shimano MT410.",
				value2:"Ruedas con aros Cross DW23D y mazas Shimano.",
				value3:"ASIENTO: WTB Rocket 142 Sport",

			},
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
			price: 160000,
			payment: 26666 , 
			description:{
				value1:"Bicicleta pensada para niños de 9 a 11 años",
				value2:"Cuadro aluminio 6061",
				value3:"Cambio Shimano 8 velocidades",

			},
	},
	{
			id: "product17",
			title: "Zenith Woman Cima - Gris",
			image: "../assets/img/cards/woman cima.webp",
			stock: 1,
			category: {
					id: "bikes",
					name: "bicicletas"
			},
			price: 180000,
			payment: 30000 , 
			description:{
				value1:"Modelo: Cima Woman 2021 Suspensión",
				value2:"Tipo: Urbana",
				value3:"Cuadro: Aluminio 6061",

			},
	},
	{
			id: "product18",
			title: "Zenith Calea Elite - Roja",
			image: "../assets/img/cards/zenith roja.webp",
			stock: 1,
			category: {
					id: "bikes",
					name: "bicicletas"
			},
			price: 505000,
			payment:84166, 
			description:{
				value1:"Modelo: Cima Woman 2021 Suspensión",
				value2:"Rodado: 28″ (700)",
				value3:"Pata de Cambios: Shimano Altus 8v",

			},
	},
	{
			id: "product19",
			title: "Zenith Cima c/Suspensión",
			image: "../assets/img/cards/zenith con supension.webp",
			stock: 1,
			category: {
					id: "bikes" ,
					name: "bicicletas"
			},
			price: 154900,
			payment: 25817, 
			description:{
				value1:"Discos Rotores: Shimano Center Lock",
				value2:"Descarrilador: Shimano Tourney 2v",
				value3:"Pata de Cambios: Shimano Altus 8v",

			},
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
			price: 230000,
			payment: 38333 , 
			description:{
				value1:"Mazas: Shimano con Cierre Rápido",
				value2:"Stem: Zenith Aluminio",
				value3:"Pedales: Zenith de plataforma",

			},
	}

];

const Category = [{

	name: "bikes",
	staus: 1
	},{
		name: "bikes",
		staus: 0
	}];

const Cart = []

const Users = [
	{   
		id: 1,
		name: "Erika Cruz Vallejo",
		linkedin: "www.google.com",
		gitHub: "www.google.com",
	},
	{   
		id: 2,
		name: "Samir Mahmud",
		linkedin: "www.google.com",
		gitHub: "www.google.com",
	},
	{   
		id: 3,
		name: "José Terol",
		linkedin: "www.google.com",
		gitHub: "www.google.com",
	}
]

export { Products, Category, Cart, Users}

localStorage.setItem('miArray', JSON.stringify(Products));


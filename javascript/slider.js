
const rootSlider = document.getElementById("root-slider");

// const images = ["./assets/img/carousel-1/carousel-1.jpg", "./assets/img/carousel-1/carousel-2.jpg", "./assets/img/carousel-1/carousel-3.jpg"];

const renderImages = (image) => {
    rootSlider.innerHTML = `
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
                <img src="${image.image1}" class="d-block w-100" alt="${image.alt1}">
            </div>
            <div class="carousel-item" data-bs-interval="5000">
                <img src="${image.image2}" class="d-block w-100" alt="${image.alt2}">
            </div>
            <div class="carousel-item">
                <img src="${image.image3}" class="d-block w-100" alt="${image.alt3}">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
    `;
}
const image = {
    image1: './assets/img/carousel-1/carousel-1-c.jpg',
    alt1: 'Imagen 1',
    image2: './assets/img/carousel-1/carousel-2.jpg',
    alt2: 'Imagen 2',
    image3: './assets/img/carousel-1/carousel-3.jpg',
    alt3: 'Imagen 3'
  };
  
  renderImages(image);
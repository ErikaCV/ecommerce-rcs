const searchInput = document.getElementById('inputSearchFull');
searchInput.addEventListener('input', filterProducts);

export function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.card');

  products.forEach(product => {
    const title = product.querySelector('.card-title').innerText.toLowerCase();
    

    if (title.includes(searchTerm)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none'; 
    }
  });
}

function getProducts() {
    fetch("https://pointof-sale2.herokuapp.com/view_products/")
    .then(response => response.json())
    .then(data => {
     console.log(data.products)
        let products_list = [];
        let products = data.products;
        let products_container = document.querySelector(".products-container");

        // saving products
        localStorage.setItem("products", JSON.stringify(products_list));

        //  clear
        products_container.innerHTML = " ";

        // looping 
        products.forEach(product => {
            products_container.innerHTML += renderProducts(product);
        });
    });
}

function renderProducts(product) {
    console.log(product);
    return `
    <h1>${product.name}</h1>
    <h1>${product.price}</h1>
    <h1>${product.description}</h1>
    <h1>${product.category}</h1>
    <h1>${product.image}</h1>
    <button onclick="deleteProduct(${product.id})">delete</button>
    <button onclick="updateProduct(${product.id})">update</button>
    `
}

getProducts()

function deleteProduct(id) {
    fetch(`https://pointof-sale2.herokuapp.com/delete_product/${id}/`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderProducts();
    })

}
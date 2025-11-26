fetch("products.json") // 1. Fetch the file 
.then(response => response.json()) // 2. Convert response to JSON
.then(data => { // 3. Use JSON data 

     const grid = document.getElementById("product-grid"); 

    data.products.forEach(products => {
    
        const card = `
            <div class="product-card">
                <img src= "${products.image}" alt="${products.title}">
                <h3>${products.title}</h3>
                <p>${products.description}</p>
                <span>${products.price}</span>
                <div class="card-actions">
                <button class="reserve-btn">Reserve Vehicle</button>
                <button class="test-drive-btn">Test Drive</button>
            </div>
            </div> `;
        grid.innerHTML += card; //append card on the grid

    })
})
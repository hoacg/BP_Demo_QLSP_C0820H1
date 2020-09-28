let productList = [];

function addProduct( productName ) {
    productList.push(productName);
}

function editProduct( productName, position) {
    if (position >= 0 && position < productList.length) {
        productList[position] = productName;
    }
}

function deleteProduct( position ) {
    if (position >= 0 && position < productList.length) {
        productList.splice(position, 1);
    }
}


//------ Xử lý sự kiện //

function resetTable() {
    document.getElementById("productTable").innerHTML = "";
}

function displayAlProduct() {
    let tableContent = `
    <tr>
        <td>Product</td>
        <td></td>
        <td>2 products</td>
    </tr>
    `;

    for (let i = 0; i < productList.length; i++) {
        tableContent += `
            <tr>
                <td>` + productList[i] + `</td>
                <td><button>Edit</button></td>
                <td><button onclick="handleDeleteButton(` + i + `)">Delete</button></td>
            </tr>`;
    }

    document.getElementById("productTable").innerHTML = tableContent;
}

function handleAddButton() {
    let productName = document.getElementById("productName").value;
    addProduct(productName);
    displayAlProduct();
}

function handleDeleteButton(position) {
    deleteProduct(position);
    displayAlProduct();
}

displayAlProduct();

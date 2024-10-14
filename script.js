const productTypeSelectElement = document.getElementById('type-select');
const productNameElement = document.getElementById('product-name');
const productCountElement = document.getElementById('product-count');
const addProductButton = document.querySelector(".add-product");
const clearProductListButton = document.querySelector(".clear-list");
const clearProductFieldButton = document.querySelector(".clear-field");
const productList = document.querySelector(".products-list");

const productListArray = [];

addProductButton.addEventListener("click", addProduct);
clearProductListButton.addEventListener("click", clearProductList);
clearProductFieldButton.addEventListener("click", clearProductField);

function addProduct() {
    const productType = productTypeSelectElement.value;
    const productName = productNameElement.value;
    const productCount = productCountElement.value;

    if (productType === "" || productName.trim() === "" || productCount === "") {
        alert("Заполните все поля!");
        return;
    }
    if (productCount <= 0) {
        alert("Количество должно быть больше 0!");
        return;
    }

    const product = {
        type: productType,
        name: productName,
        count: productCount,
    };

    productListArray.push(product);
    clearProductListArray();
}

function clearProductListArray() {
    productList.innerHTML = '';
    productListArray.forEach((prod, index) => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `Тип продукта: <b>${prod.type}</b>, Название: <b>${prod.name}</b>, Количество: <b>${prod.count}</b>   `;
        
        const trashButton = document.createElement('button');
        const trashIcon = document.createElement('img');
        trashIcon.src = './trashIcon.png';
        trashIcon.alt = 'Удалить';
        trashIcon.style.width = '20px';    
        trashButton.appendChild(trashIcon);

        trashButton.onclick = function() {
            productListArray.splice(index, 1);
            clearProductListArray();
        };

        productItem.appendChild(trashButton);
        productList.appendChild(productItem);
    });
}

function clearProductList() {
    productListArray.length = 0;
    productList.innerHTML = '';
}

function clearProductField() {    
    productTypeSelectElement.value = '';
    productNameElement.value = '';
    productCountElement.value = '';
}

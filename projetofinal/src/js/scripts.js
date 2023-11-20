/* Estilo para login */
/* ...... */
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


/* Estilo para produtos */
/* ..... */

const products = [
    // Seus dados de produtos aqui
];

// Função para preencher a lista de produtos
function fillProductList() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    products.forEach((product, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = product.name;
        listItem.addEventListener("click", () => showProductDetails(index));
        productList.appendChild(listItem);
    });
}

// Função para mostrar detalhes do produto em um modal
function showProductDetails(index) {
    const modal = document.getElementById("productDetails");
    const product = products[index];
    
    document.getElementById("productImage").src = product.image;
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productValue").textContent = `Valor: R$ ${product.value.toFixed(2)}`;
    document.getElementById("editButton").onclick = () => editProduct(index);
    
    modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("productDetails");
    modal.style.display = "none";
}

// Função para buscar produtos
function searchProducts() {
    const searchInput = document.getElementById("searchInput");
    const term = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(term));
    fillProductList(filteredProducts);
}

// Função para editar um produto
function editProduct(index) {
    // Implemente a lógica de edição aqui
}

fillProductList();

/* Implementação mesas */
/* ... */




const tables = [];

// Criar 20 mesas
for (let i = 1; i <= 20; i++) {
    tables.push({ name: `Mesa #${i}`, seats: i % 2 === 0 ? 6 : 4, status: "livre", client: "" });
}

function fillTablesList() {
    const tablesDiv = document.querySelector(".tables");
    tablesDiv.innerHTML = "";

    tables.forEach((table, index) => {
        const tableItem = document.createElement("div");
        tableItem.classList.add("table-item");
        tableItem.innerHTML = `
            <h3>${table.name}</h3>
            <p>Status: ${table.status}</p>
            <p>Lugares: ${table.seats}</p>
            <button onclick="showTableDetails(${index})">Detalhes</button>
        `;

        tablesDiv.appendChild(tableItem);
    });
}

function showTableDetails(index) {
    const modal = document.getElementById("tableDetails");
    const table = tables[index];
    
    document.getElementById("tableName").textContent = table.name;
    document.getElementById("tableStatus").textContent = `Status: ${table.status}`;
    document.getElementById("tableSeats").textContent = `Lugares: ${table.seats}`;
    document.getElementById("clientName").textContent = `Cliente: ${table.client}`;
    
    if (table.status === "livre") {
        document.getElementById("assignClientButton").style.display = "block";
        document.getElementById("addOrderButton").style.display = "block";
        document.getElementById("removeOrderButton").style.display = "none";
    } else {
        document.getElementById("assignClientButton").style.display = "none";
        document.getElementById("addOrderButton").style.display = "none";
        document.getElementById("removeOrderButton").style.display = "block";
    }
    
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("tableDetails");
    modal.style.display = "none";
}

function assignClient() {
    // Implemente a lógica para associar um cliente à mesa
}

function addOrder() {
    // Implemente a lógica para lançar um pedido na mesa
}

function removeOrder() {
    // Implemente a lógica para retirar um pedido da mesa
}

fillTablesList();

function showProductOptions(menuItem) {
    const dialog = document.createElement("div");
    dialog.className = "product-options-dialog";
    dialog.innerHTML = `
        <h3>Opções do Produto</h3>
        <button onclick="editProduct()">Editar</button>
        <button onclick="deleteProduct()">Excluir</button>
        <button onclick="closeDialog(this)">Fechar</button>
    `;
    menuItem.appendChild(dialog);
}

function editProduct() {
    // Lógica para editar o produto aqui
    alert("Editar produto");
}

function deleteProduct() {
    // Lógica para excluir o produto aqui
    alert("Excluir produto");
}

function closeDialog(dialog) {
    dialog.remove();
}



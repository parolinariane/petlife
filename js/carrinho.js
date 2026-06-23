// ========================================
// ELEMENTOS DA PÁGINA
// ========================================

const lista =
document.getElementById("lista-carrinho");

const total =
document.getElementById("total");

const carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];


// ========================================
// RENDERIZAÇÃO DO CARRINHO
// ========================================

if(carrinho.length === 0) {

    lista.innerHTML = `
        <div class="carrinho-vazio">
            <h3>🐾 Seu carrinho está vazio</h3>
            <p>Adicione alguns produtos da loja.</p>
        </div>
    `;

}

let soma = 0;

carrinho.forEach((produto, index) => {

    const item =
    document.createElement("div");

    item.classList.add("item-carrinho");

    item.innerHTML = `
        <div class="item-info">
            <p>${produto.nome}</p>
            <span>
                R$ ${produto.preco.toFixed(2)}
            </span>
        </div>

        <button class="btn-remover" data-index="${index}">
            🗑️ Remover
        </button>
    `;

    lista.appendChild(item);

    soma += produto.preco;

});

total.textContent =
`Total: R$ ${soma.toFixed(2)}`;



// ========================================
// REMOÇÃO DE PRODUTOS
// ========================================

document.addEventListener("click", (event) => {

    const botao =
    event.target.closest(".btn-remover");

    if(!botao) return;

    const index =
    Number(botao.dataset.index);

    carrinho.splice(index, 1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    location.reload();

});



// ========================================
// MODAL DE PAGAMENTO
// ========================================

const modal =
document.getElementById("modalPagamento");

const btnFinalizar =
document.getElementById("finalizarCompra");

const fecharModal =
document.getElementById("fecharModal");

btnFinalizar.addEventListener("click", () => {

    if(carrinho.length === 0) {

        alert("Seu carrinho está vazio!");

        return;
    }

    modal.style.display = "flex";

});

fecharModal.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target === modal) {

        modal.style.display = "none";

    }

});


// ========================================
// FINALIZAÇÃO DA COMPRA
// ========================================

const formPagamento =
document.getElementById("formPagamento");

formPagamento.addEventListener("submit", (event) => {

    event.preventDefault();

    modal.style.display = "none";

    document.getElementById(
        "modalSucesso"
    ).style.display = "flex";

});

document
.getElementById("fecharSucesso")
.addEventListener("click", () => {

    localStorage.removeItem("carrinho");

    window.location.href =
        "loja.html";

});



// ========================================
// CAMPOS DO FORMULÁRIO
// ========================================

const nomeInput =
document.getElementById("nome");

const cartaoInput =
document.getElementById("cartao");

const validadeInput =
document.getElementById("validade");

const cvvInput =
document.getElementById("cvv");

const cpfInput =
document.getElementById("cpf");



// ========================================
// MÁSCARA DO CARTÃO
// ========================================

cartaoInput.addEventListener("input", () => {

    let valor = cartaoInput.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.substring(0, 16);

    valor = valor.replace(
        /(\d{4})(?=\d)/g,
        "$1 "
    );

    cartaoInput.value = valor;

    document.getElementById(
        "previewNumero"
    ).textContent =
        valor || "•••• •••• •••• ••••";

});



// ========================================
// MÁSCARA DA VALIDADE
// ========================================

validadeInput.addEventListener("input", () => {

    let valor = validadeInput.value;

    valor = valor.replace(/\D/g, "");

    valor = valor.substring(0, 4);

    if(valor.length > 2) {

        valor =
            valor.substring(0, 2) +
            "/" +
            valor.substring(2);

    }

    validadeInput.value = valor;

    document.getElementById(
        "previewValidade"
    ).textContent =
        valor || "MM/AA";

});



// ========================================
// MÁSCARA DO CVV
// ========================================

cvvInput.addEventListener("input", () => {

    cvvInput.value =
        cvvInput.value
            .replace(/\D/g, "")
            .substring(0, 3);

});



// ========================================
// MÁSCARA DO CPF
// ========================================

cpfInput.addEventListener("input", () => {

    let valor =
        cpfInput.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    cpfInput.value = valor;

});



// ========================================
// PREVIEW DO CARTÃO
// ========================================

nomeInput.addEventListener("input", () => {

    document.getElementById(
        "previewNome"
    ).textContent =
        nomeInput.value ||
        "NOME COMPLETO";

});
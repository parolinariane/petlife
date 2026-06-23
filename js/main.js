function atualizarContadorCarrinho() {

    const contador =
    document.getElementById("contador-carrinho");

    if (!contador) return;

    const carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

    contador.textContent = carrinho.length;
}

atualizarContadorCarrinho();

function mostrarToast(mensagem) {

    const toast =
        document.getElementById("toast");

    toast.textContent = mensagem;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
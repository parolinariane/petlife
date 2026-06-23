const botoesComprar =
    document.querySelectorAll(".btn-comprar");

let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

botoesComprar.forEach(botao => {

    botao.addEventListener("click", () => {

        const produto = {

            nome: botao.dataset.nome,
            preco: Number(botao.dataset.preco)

        };

        carrinho.push(produto);

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        atualizarContadorCarrinho();

        mostrarToast("🛒 Produto adicionado ao carrinho!");

    });

});
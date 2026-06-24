/* =========================
   PEGAR FAVORITOS
   pega do localStorage
========================= */
function getFavoritos() {
    // pega o que está salvo no navegador
    const fav = JSON.parse(localStorage.getItem("favoritos")) || [];

    // remove valores vazios (null, undefined, "")
    return fav.filter(item => item);
}

/* =========================
   SALVAR FAVORITOS
========================= */
function salvarFavoritos(favoritos) {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

/* =========================
   ATUALIZAR BOTÕES
========================= */
function atualizarBotoes() {

    // pega lista de favoritos salva
    const favoritos = getFavoritos();

    // pega todos os cards da página
    document.querySelectorAll(".card").forEach(card => {

        // pega o id do card (data-id)
        const id = card.dataset.id;

        // pega o botão de favorito dentro do card
        const btn = card.querySelector(".fav-btn");

        // se não existir botão ou id, para aqui
        if (!btn || !id) return;

        // se o id estiver nos favoritos
        if (favoritos.includes(id)) {

            // deixa o botão marcado
            btn.classList.add("active");
            btn.innerText = "❤️ Favoritado";

        } else {

            // deixa o botão normal
            btn.classList.remove("active");
            btn.innerText = "♡ Favoritar";
        }
    });
}

/* =========================
   INICIAR SISTEMA DE FAVORITOS
   clique nos botões
========================= */
function initFavoritos() {

    // pega todos os botões de favorito
    document.querySelectorAll(".card .fav-btn").forEach(btn => {

        // quando clicar no botão
        btn.addEventListener("click", () => {

            // pega o card onde o botão está
            const card = btn.closest(".card");

            // se não achar o card, para
            if (!card) {
                console.log("Card não encontrado");
                return;
            }

            // pega o id do card
            const id = card.dataset.id;

            // mostra no console (debug)
            console.log("ID:", id);

            // se não tiver id, para
            if (!id) {
                console.log("data-id não encontrado");
                return;
            }

            // pega lista atual de favoritos
            let favoritos = getFavoritos();

            // se já estiver nos favoritos, remove
            if (favoritos.includes(id)) {
                favoritos = favoritos.filter(item => item !== id);

            } else {
                // se não estiver, adiciona
                favoritos.push(id);
            }

            // salva no navegador
            salvarFavoritos(favoritos);

            // atualiza botões na tela
            atualizarBotoes();

            // mostra no console
            console.log("Favoritos:", favoritos);
        });
    });

    // atualiza botões quando a página abre
    atualizarBotoes();
}

/* =========================
   QUANDO A PÁGINA CARREGAR
   inicia tudo automaticamente
========================= */
document.addEventListener("DOMContentLoaded", initFavoritos);
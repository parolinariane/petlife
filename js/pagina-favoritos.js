/* =========================
   LISTA DE ANIMAIS
   todos os pets do site
========================= */
const animais = {
    pipoca: {
        nome: "Pipoca",
        img: "../img/pets/pipoca.webp",
        desc: "1 ano - Macho"
    },

    simba: {
        nome: "Simba",
        img: "../img/pets/simba.webp",
        desc: "5 anos - Macho"
    },

    perola: {
        nome: "Perola",
        img: "../img/pets/perola.webp",
        desc: "Filhote - Fêmea"
    },

    capitao: {
        nome: "Capitão",
        img: "../img/pets/capitao.webp",
        desc: "5 anos - Macho"
    },

    harley: {
        nome: "Harley",
        img: "../img/pets/harley.webp",
        desc: "3 anos - Fêmea"
    },

    pandora: {
        nome: "Pandora",
        img: "../img/pets/pandora.webp",
        desc: "4 anos - Fêmea"
    },

    apollo: {
        nome: "Apóllo",
        img: "../img/pets/apollo.webp",
        desc: "2 anos - Macho"
    },

    chico: {
        nome: "Chico",
        img: "../img/pets/chico.webp",
        desc: "6 anos ou mais - Macho"
    },

    fiona: {
        nome: "Fiona",
        img: "../img/pets/fiona.webp",
        desc: "6 anos ou mais - Fêmea"
    },

    zuma: {
        nome: "Zuma",
        img: "../img/pets/zuma.webp",
        desc: "4 anos - Fêmea"
    },

    hunter: {
    nome: "Hunter",
    img: "../img/pets/hunter.webp",
    desc: "7 a 11 meses - Macho"
    },

    tchuca: {
        nome: "Tchuca",
        img: "../img/pets/tchuca.webp",
        desc: "2 anos - Fêmea"
    },

    pingo: {
        nome: "Pingo",
        img: "../img/pets/pingo.webp",
        desc: "7 a 11 meses - Macho"
    },

    revoada: {
        nome: "Revoada",
        img: "../img/pets/revoada.webp",
        desc: "2 anos - Macho"
    },

    theo: {
        nome: "Theo",
        img: "../img/pets/theo.webp",
        desc: "1 ano - Macho"
    },

    gracinha: {
        nome: "Gracinha",
        img: "../img/pets/gracinha.webp",
        desc: "4 anos - Fêmea"
    },

    maya: {
        nome: "Maya",
        img: "../img/pets/maya.webp",
        desc: "2 a 6 meses - Fêmea"
    },

    mel: {
        nome: "Mel",
        img: "../img/pets/mel.webp",
        desc: "2 anos - Fêmea"
    },

    isis: {
        nome: "Ísis",
        img: "../img/pets/isis.webp",
        desc: "2 a 6 meses - Fêmea"
    },

    brigite: {
        nome: "Brigite",
        img: "../img/pets/brigite.webp",
        desc: "2 anos - Fêmea"
    },

    astor: {
        nome: "Astor",
        img: "../img/pets/astor.webp",
        desc: "2 anos - Macho"
    },

    karamellow: {
        nome: "Karamellow",
        img: "../img/pets/karamellow.webp",
        desc: "2 anos - Macho"
    },

    bigodinho: {
        nome: "Bigodinho",
        img: "../img/pets/bigodinho.webp",
        desc: "2 anos - Macho"
    },

    floquinho: {
        nome: "Floquinho",
        img: "../img/pets/floquinho.webp",
        desc: "3 anos - Macho"
    },

    polly: {
        nome: "Polly",
        img: "../img/pets/polly.webp",
        desc: "2 anos - Fêmea"
    },

    theobaldo: {
        nome: "Theobaldo",
        img: "../img/pets/theobaldo.webp",
        desc: "2 a 6 meses - Macho"
    },

    mike: {
        nome: "Mike",
        img: "../img/pets/mike.webp",
        desc: "1 ano - Macho"
    },

    fofokinha: {
        nome: "Fofokinha",
        img: "../img/pets/fofokinha.webp",
        desc: "2 a 6 meses - Fêmea"
    },

    pinguinho: {
        nome: "Pinguinho",
        img: "../img/pets/pinguinho.webp",
        desc: "2 a 6 meses - Macho"
    },

    demetrio: {
        nome: "Demétrio",
        img: "../img/pets/demetrio.webp",
        desc: "2 a 6 meses - Macho"
    },

    teste: {}

};

/* =========================
   REMOVER FAVORITO
   Remove um pet da lista de favoritos
========================= */
function removerFavorito(id) {

    // pega favoritos salvos
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // remove o item clicado
    favoritos = favoritos.filter(item => item !== id);

    // salva de novo
    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    // recarrega a tela
    carregarFavoritos();
}

/* =========================
   CARREGAR FAVORITOS
   Mostra os pets favoritados na tela
========================= */
function carregarFavoritos() {

    // pega favoritos do navegador
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // onde os cards vão aparecer
    const container = document.getElementById("lista-favoritos");

    // limpa a tela
    container.innerHTML = "";

    // se não tiver favoritos
    if (favoritos.length === 0) {
        container.innerHTML = "<p style='text-align:center'>Nenhum favorito ainda 😢</p>";
        return;
    }

    // cria um card para cada favorito
    favoritos.forEach(id => {

        // pega o pet pelo id
        const pet = animais[id];

        // se não existir, ignora
        if (!pet) return;

        // adiciona o card na tela
        container.innerHTML += `
            <div class="card">

                <img src="${pet.img}" alt="${pet.nome}">

                <h1>${pet.nome}</h1>

                <p>${pet.desc}</p>

                <a href="info_pets.html?id=${id}" class="btn">
                    Ver mais
                </a>

                <button class="remover-fav" data-id="${id}">
                    ❌ Remover dos favoritos
                </button>

            </div>
        `;
    });

    /* =========================
       BOTÃO REMOVER
       clique em cada botão
    ========================= */
    document.querySelectorAll(".remover-fav").forEach(btn => {

        btn.addEventListener("click", () => {
            removerFavorito(btn.dataset.id);
        });
    });
}

/* =========================
   QUANDO A PÁGINA ABRE
========================= */
document.addEventListener("DOMContentLoaded", carregarFavoritos);
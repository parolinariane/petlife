/* =========================
   PEGAR ID DA URL
   ?id=simba
========================= */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

/* =========================
   PEGAR PET PELO ID
   (vem de um objeto chamado pets)
========================= */
const pet = pets[id];

/* =========================
   SE O PET EXISTIR
========================= */
if (pet) {

    /* -------- NOME -------- */
    document.getElementById("petNome").textContent = pet.nome;

    /* -------- SEXO -------- */
    document.getElementById("petSexo").innerHTML =
        `<strong>Sexo:</strong> ${pet.sexo}`;

    /* -------- IDADE -------- */
    document.getElementById("petIdade").innerHTML =
        `<strong>Idade:</strong> ${pet.idade}`;

    /* -------- DESCRIÇÃO -------- */
    document.getElementById("petDescricao").innerHTML =
        pet.descricao;

    /* =========================
       GALERIA DE IMAGENS
    ========================= */
    const galeria = document.getElementById("petImagens");

    // limpa imagens antigas
    galeria.innerHTML = "";

    // adiciona cada imagem do pet
    pet.imagens.forEach(img => {
        galeria.innerHTML += `<img src="${img}" alt="${pet.nome}">`;
    });

    /* =========================
       BOTÃO DE FAVORITOS
    ========================= */
    const btnFav = document.getElementById("fav-btn-info");

    // pega favoritos do navegador
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // define texto inicial do botão
    if (favoritos.includes(id)) {
        btnFav.textContent = "❤️ Favoritado";
    } else {
        btnFav.textContent = "♡ Favoritar";
    }

    /* =========================
       CLIQUE NO BOTÃO
    ========================= */
    btnFav.addEventListener("click", () => {

        // pega favoritos novamente
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        // se já estiver nos favoritos, remove
        if (favoritos.includes(id)) {

            favoritos = favoritos.filter(item => item !== id);

            btnFav.textContent = "♡ Favoritar";

        } else {

            // se não estiver, adiciona
            favoritos.push(id);

            btnFav.textContent = "❤️ Favoritado";
        }

        // salva no navegador
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    });

/* =========================
   SE NÃO ENCONTRAR O PET
========================= */
} else {

    document.querySelector(".pet-container").innerHTML = `
        <h1>Pet não encontrado</h1>
        <a href="adocao.html" class="btn-voltar">Voltar</a>
    `;
}
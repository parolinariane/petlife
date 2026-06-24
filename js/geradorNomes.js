// ====================
// ELEMENTOS DA PÁGINA
// ====================

const tipoPet =
document.getElementById("tipoPet");

const sexoPet =
document.getElementById("sexoPet");

const btnGerarNome =
document.getElementById("btnGerarNome");

const nomeGerado =
document.getElementById("nomeGerado");


// ====================
// LISTAS DE NOMES
// ====================

const cachorrosMacho = [
    "Thor",
    "Max",
    "Rex",
    "Bob",
    "Luke"
];

const cachorrosFemea = [
    "Luna",
    "Mel",
    "Nina",
    "Amora",
    "Bella"
];

const gatosMacho = [
    "Simba",
    "Tom",
    "Mingau",
    "Oliver",
    "Fred"
];

const gatosFemea = [
    "Mia",
    "Lili",
    "Lola",
    "Kiara",
    "Jade"
];

// ====================
// OBTÉM LISTA DE NOMES
// ====================

function obterListaNomes() {

    if (
        tipoPet.value === "cachorro" &&
        sexoPet.value === "macho"
    ) {
        return cachorrosMacho;
    }

    if (
        tipoPet.value === "cachorro" &&
        sexoPet.value === "femea"
    ) {
        return cachorrosFemea;
    }

    if (
        tipoPet.value === "gato" &&
        sexoPet.value === "macho"
    ) {
        return gatosMacho;
    }

    return gatosFemea;
}

// ====================
// SORTEIO ANIMADO
// ====================

function gerarNome() {

    const lista = obterListaNomes();

    nomeGerado.classList.add("animando");

    let contador = 0;

    const intervalo = setInterval(() => {

        const nomeAleatorio =
        lista[Math.floor(Math.random() * lista.length)];

        nomeGerado.textContent =
        nomeAleatorio;

        contador++;

        if (contador >= 15) {

            clearInterval(intervalo);

            const nomeFinal =
            lista[Math.floor(Math.random() * lista.length)];

            nomeGerado.textContent =
            `✨ ${nomeFinal} ✨`;

            nomeGerado.classList.remove("animando");
        }

    }, 80);
}

// ====================
// EVENTOS
// ====================

btnGerarNome.addEventListener(
    "click",
    gerarNome
);
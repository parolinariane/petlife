// Elementos da página
const tipoPet =
document.getElementById("tipoPet");

const sexoPet =
document.getElementById("sexoPet");

const btnGerarNome =
document.getElementById("btnGerarNome");

const nomeGerado =
document.getElementById("nomeGerado");

// Lista dos nomes
const cachorrosMacho = [
    "Thor",
    "Max",
    "Rex",
    "Bob",
    "Luke",
    "Simba",
    "Tom",
    "Mingau",
    "Oliver",
    "Fred"
];

const cachorrosFemea = [
    "Luna",
    "Mel",
    "Nina",
    "Amora",
    "Bella",
    "Mia",
    "Lili",
    "Lola",
    "Kiara",
    "Jade"
];

// Pega a lista de nomes
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
}

// Sorteio
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

// Evento ao clicar no botão
btnGerarNome.addEventListener(
    "click",
    gerarNome
);
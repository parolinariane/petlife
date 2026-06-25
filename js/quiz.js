// ================================================
//  quiz.js — Quiz de Cuidados com Pets | PetLife
// ================================================

// ── Banco de perguntas ───────────────────────────
const perguntas = [

    // ── BLOCO 1: CÃES ────────────────────────────
    {
        bloco: '🐶 Cães',
        texto: 'Com que frequência cães devem tomar banho?',
        opcoes: ['A cada 7 dias', 'A cada 15 dias', 'A cada 30 dias', 'Uma vez por mês'],
        correta: 1
    },
    {
        bloco: '🐶 Cães',
        texto: 'Quantas vezes por dia um cão adulto deve se alimentar?',
        opcoes: ['1 vez ao dia', '2 a 3 vezes ao dia', '4 a 5 vezes ao dia', 'Pode comer à vontade o tempo todo'],
        correta: 1
    },
    {
        bloco: '🐶 Cães',
        texto: 'Qual destes alimentos é PROIBIDO para cães?',
        opcoes: ['Cenoura', 'Arroz branco cozido', 'Chocolate', 'Frango cozido sem tempero'],
        correta: 2
    },
    {
        bloco: '🐶 Cães',
        texto: 'Com que frequência devemos aparar as unhas dos cães?',
        opcoes: ['A cada semana', 'A cada 15 dias', 'A cada 3 ou 4 semanas', 'A cada 2 meses'],
        correta: 2
    },
    {
        bloco: '🐶 Cães',
        texto: 'Qual é a recomendação mínima de passeios diários para cães?',
        opcoes: ['1 passeio por semana', '1 passeio de 5 minutos por dia', '2 passeios de 20 a 30 minutos por dia', '5 passeios curtos por dia'],
        correta: 2
    },

    // ── BLOCO 2: GATOS ───────────────────────────
    {
        bloco: '🐱 Gatos',
        texto: 'Com que frequência gatos precisam tomar banho?',
        opcoes: ['Toda semana', 'A cada 15 dias', 'Raramente — apenas quando necessário ou indicado pelo veterinário', 'Nunca precisam de banho'],
        correta: 2
    },
    {
        bloco: '🐱 Gatos',
        texto: 'Qual produto NÃO deve ser usado em gatos?',
        opcoes: ['Ração específica para gatos', 'Shampoo para gatos', 'Antipulgas de cão', 'Bebedouro com circulação de água'],
        correta: 2
    },
    {
        bloco: '🐱 Gatos',
        texto: 'Com que frequência a caixa de areia do gato deve ser limpa?',
        opcoes: ['A cada 3 dias', 'Uma vez por semana', 'Diariamente', 'Uma vez por mês'],
        correta: 2
    },
    {
        bloco: '🐱 Gatos',
        texto: 'O que é "enriquecimento ambiental" para gatos?',
        opcoes: [
            'Dar mais comida ao gato',
            'Oferecer arranhadores, altura e estímulos para o instinto natural',
            'Deixar o gato passear na rua livremente',
            'Colocar música ambiente no quarto do gato'
        ],
        correta: 1
    },
    {
        bloco: '🐱 Gatos',
        texto: 'Qual sinal pode indicar que um gato está doente?',
        opcoes: [
            'Dormir em lugares altos',
            'Se lamber com frequência',
            'Perda de apetite e isolamento persistentes',
            'Arranhar os móveis'
        ],
        correta: 2
    },

    // ── BLOCO 3: HIGIENE ─────────────────────────
    {
        bloco: '🛁 Higiene',
        texto: 'Com que frequência devemos escovar os dentes dos pets?',
        opcoes: ['Uma vez por mês', 'Somente no veterinário', '2 a 3 vezes por semana', 'Apenas quando houver mau hálito'],
        correta: 2
    },
    {
        bloco: '🛁 Higiene',
        texto: 'O que NÃO devemos usar para limpar as orelhas dos pets?',
        opcoes: ['Algodão', 'Solução auricular veterinária', 'Cotonete dentro do canal auditivo', 'Pano limpo e seco'],
        correta: 2
    },
    {
        bloco: '🛁 Higiene',
        texto: 'Que tipo de pasta de dente devemos usar nos pets?',
        opcoes: ['Pasta de dente humana comum', 'Pasta de dente com flúor', 'Pasta específica para animais', 'Qualquer pasta sem menta'],
        correta: 2
    },
    {
        bloco: '🛁 Higiene',
        texto: 'Pelos longos precisam ser escovados com qual frequência?',
        opcoes: ['Uma vez por mês', 'A cada 15 dias', 'Uma vez por semana', 'Diariamente'],
        correta: 3
    },
    {
        bloco: '🛁 Higiene',
        texto: 'O que pode acontecer se as unhas dos pets ficarem muito longas?',
        opcoes: [
            'Nada, é apenas uma questão estética',
            'Podem se encurvar e machucar a pata do animal',
            'O pet perde o equilíbrio ao andar',
            'As unhas caem sozinhas quando estão grandes demais'
        ],
        correta: 1
    },

    // ── BLOCO 4: VETERINÁRIO ─────────────────────
    {
        bloco: '🩺 Veterinário',
        texto: 'Com que frequência pets adultos devem fazer check-up veterinário?',
        opcoes: ['A cada 5 anos', 'A cada 2 anos', 'Ao menos 1 vez por ano', 'Apenas quando estiverem visivelmente doentes'],
        correta: 2
    },
    {
        bloco: '🩺 Veterinário',
        texto: 'Qual destes sinais é considerado uma EMERGÊNCIA veterinária?',
        opcoes: ['Perda de apetite por 1 dia', 'Coceira leve e esporádica', 'Convulsões ou perda de consciência', 'Sono excessivo no inverno'],
        correta: 2
    },
    {
        bloco: '🩺 Veterinário',
        texto: 'Com que frequência deve ser dado vermífugo aos pets?',
        opcoes: ['Uma vez por ano', 'A cada 3 ou 6 meses', 'Somente quando apresentar sintomas', 'A cada 2 anos'],
        correta: 1
    },
    {
        bloco: '🩺 Veterinário',
        texto: 'A partir de qual idade os pets devem fazer exames de sangue anualmente?',
        opcoes: ['A partir dos 2 anos', 'A partir dos 5 anos', 'A partir dos 7 anos', 'Somente quando doentes'],
        correta: 2
    },
    {
        bloco: '🩺 Veterinário',
        texto: 'Qual é um dos benefícios da castração para pets?',
        opcoes: [
            'Aumenta a agressividade do animal',
            'Reduz riscos de doenças e comportamentos de fuga',
            'Faz o pet engordar obrigatoriamente',
            'Não tem benefício comprovado'
        ],
        correta: 1
    }
];

// ── Mensagens por resultado ──────────────────────
function getMensagem(acertos) {
    if (acertos <= 5) return {
        emoji: '🐾',
        titulo: 'Iniciante',
        msg: 'Não se preocupe! Todo mundo começa do zero. Visite nossa página de Informações para aprender tudo sobre cuidados com pets e volte para tentar de novo!'
    };
    if (acertos <= 10) return {
        emoji: '📚',
        titulo: 'Aprendiz',
        msg: 'Você já sabe algumas coisas, mas ainda há muito para aprender! Dê uma olhada nos tópicos em que errou e consulte nossa página de Informações.'
    };
    if (acertos <= 15) return {
        emoji: '🌟',
        titulo: 'Cuidador',
        msg: 'Muito bem! Você tem um bom conhecimento sobre cuidados com pets. Com mais um pouco de estudo você chega à perfeição!'
    };
    if (acertos <= 18) return {
        emoji: '🏅',
        titulo: 'Expert em Pets',
        msg: 'Impressionante! Você conhece muito bem os cuidados com animais. Seus pets estão em ótimas mãos!'
    };
    return {
        emoji: '🏆',
        titulo: 'Mestre dos Pets!',
        msg: 'Perfeito! Você acertou tudo (ou quase tudo)! Você é um verdadeiro especialista em bem-estar animal. Parabéns!'
    };
}

// ── Estado do quiz ───────────────────────────────
let perguntaAtual = 0;
let respostas = new Array(perguntas.length).fill(null);

// ── Elementos do DOM ─────────────────────────────
const telaIntro     = document.getElementById('telaIntro');
const telaQuiz      = document.getElementById('telaQuiz');
const telaResultado = document.getElementById('telaResultado');

const labelBloco    = document.getElementById('labelBloco');
const labelNum      = document.getElementById('labelNum');
const barraFill     = document.getElementById('barraFill');
const textoPergunta = document.getElementById('textoPergunta');
const containerOpc  = document.getElementById('containerOpcoes');
const avisoResposta = document.getElementById('avisoResposta');

const btnAnterior  = document.getElementById('btnAnterior');
const btnProximo   = document.getElementById('btnProximo');
const btnFinalizar = document.getElementById('btnFinalizar');

// ── Funções do quiz ──────────────────────────────

// Mostra a pergunta atual na tela
function mostrarPergunta(indice) {
    const p = perguntas[indice];

    // Atualiza o bloco e número
    labelBloco.textContent = p.bloco;
    labelNum.textContent   = 'Pergunta ' + (indice + 1) + ' de ' + perguntas.length;

    // Atualiza a barra de progresso
    const percentual = ((indice + 1) / perguntas.length) * 100;
    barraFill.style.width = percentual + '%';

    // Atualiza o texto da pergunta
    textoPergunta.textContent = p.texto;

    // Cria os botões de opção
    containerOpc.innerHTML = '';
    p.opcoes.forEach(function (opcao, i) {
        const btn = document.createElement('button');
        btn.className = 'opcao-btn';
        btn.textContent = opcao;

        // Se já havia uma resposta selecionada, marca ela
        if (respostas[indice] === i) {
            btn.classList.add('selecionada');
        }

        btn.addEventListener('click', function () {
            // Remove seleção anterior
            document.querySelectorAll('.opcao-btn').forEach(function (b) {
                b.classList.remove('selecionada');
            });
            // Marca a opção clicada
            btn.classList.add('selecionada');
            // Salva a resposta
            respostas[indice] = i;
            // Esconde aviso se estava visível
            avisoResposta.classList.remove('visivel');
        });

        containerOpc.appendChild(btn);
    });

    // Controla visibilidade dos botões de navegação
    btnAnterior.style.visibility = indice === 0 ? 'hidden' : 'visible';

    const ehUltima = indice === perguntas.length - 1;
    btnProximo.style.display   = ehUltima ? 'none'  : 'inline-flex';
    btnFinalizar.style.display = ehUltima ? 'inline-flex' : 'none';

    // Esconde o aviso ao trocar de pergunta
    avisoResposta.classList.remove('visivel');
}

// Calcula e mostra o resultado final
function mostrarResultado() {
    // Conta os acertos e separa por bloco
    let acertosTotal = 0;
    const acertosPorBloco = { '🐶 Cães': 0, '🐱 Gatos': 0, '🛁 Higiene': 0, '🩺 Veterinário': 0 };

    perguntas.forEach(function (p, i) {
        if (respostas[i] === p.correta) {
            acertosTotal++;
            acertosPorBloco[p.bloco]++;
        }
    });

    // Pega a mensagem personalizada
    const resultado = getMensagem(acertosTotal);

    // Exibe na tela
    document.getElementById('resultadoEmoji').textContent  = resultado.emoji;
    document.getElementById('resultadoTitulo').textContent = resultado.titulo;
    document.getElementById('resultadoPontos').textContent = acertosTotal;
    document.getElementById('resultadoMsg').textContent    = resultado.msg;

    // Placar por bloco
    const containerBlocos = document.getElementById('resultadoBlocos');
    containerBlocos.innerHTML = '';
    Object.entries(acertosPorBloco).forEach(function (entrada) {
        const bloco  = entrada[0];
        const pontos = entrada[1];
        const div = document.createElement('div');
        div.className = 'resultado-bloco-item';
        div.innerHTML =
            '<span class="resultado-bloco-nome">' + bloco + '</span>' +
            '<span class="resultado-bloco-pts">' + pontos + '/5</span>' +
            '<div class="resultado-bloco-barra">' +
                '<div class="resultado-bloco-fill" style="width:' + (pontos / 5 * 100) + '%"></div>' +
            '</div>';
        containerBlocos.appendChild(div);
    });

    // Transição de telas
    telaQuiz.style.display      = 'none';
    telaResultado.style.display = 'block';
}

// Reinicia o quiz do zero
function reiniciarQuiz() {
    perguntaAtual = 0;
    respostas     = new Array(perguntas.length).fill(null);
    mostrarPergunta(0);
    telaResultado.style.display = 'none';
    telaQuiz.style.display      = 'block';
}

// ── Eventos ──────────────────────────────────────

// Botão Começar
document.getElementById('btnComecar').addEventListener('click', function () {
    telaIntro.style.display = 'none';
    telaQuiz.style.display  = 'block';
    mostrarPergunta(0);
});

// Botão Próxima
btnProximo.addEventListener('click', function () {
    if (respostas[perguntaAtual] === null) {
        avisoResposta.classList.add('visivel');
        return;
    }
    perguntaAtual++;
    mostrarPergunta(perguntaAtual);
});

// Botão Anterior
btnAnterior.addEventListener('click', function () {
    if (perguntaAtual > 0) {
        perguntaAtual--;
        mostrarPergunta(perguntaAtual);
    }
});

// Botão Ver Resultado
btnFinalizar.addEventListener('click', function () {
    if (respostas[perguntaAtual] === null) {
        avisoResposta.classList.add('visivel');
        return;
    }
    mostrarResultado();
});

// Botão Refazer
document.getElementById('btnRefazer').addEventListener('click', reiniciarQuiz);

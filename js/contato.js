// ================================================
//  contato.js — Formulário de Contato | PetLife
// ================================================

const form        = document.getElementById('contatoForm');
const formSucesso = document.getElementById('formSucesso');
const btnNovo     = document.getElementById('btnNovo');
const nomeEnviado = document.getElementById('nomeEnviado');

// ── Validação de um campo individual ────────────
function validarCampo(campo, erroId) {
    const erroEl = document.getElementById(erroId);
    let valido = false;

    if (campo.type === 'checkbox') {
        valido = campo.checked;
    } else if (campo.tagName === 'SELECT') {
        valido = campo.value !== '';
    } else if (campo.type === 'email') {
        valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());
    } else {
        valido = campo.value.trim() !== '';
    }

    if (valido) {
        campo.classList.remove('invalido');
        erroEl.classList.remove('visivel');
    } else {
        campo.classList.add('invalido');
        erroEl.classList.add('visivel');
    }

    return valido;
}

// ── Validação em tempo real (ao sair do campo) ──
document.getElementById('nome').addEventListener('blur', function () {
    validarCampo(this, 'err-nome');
});
document.getElementById('email').addEventListener('blur', function () {
    validarCampo(this, 'err-email');
});
document.getElementById('assunto').addEventListener('blur', function () {
    validarCampo(this, 'err-assunto');
});
document.getElementById('mensagem').addEventListener('blur', function () {
    validarCampo(this, 'err-mensagem');
});
document.getElementById('lgpd').addEventListener('change', function () {
    validarCampo(this, 'err-lgpd');
});

// ── Telefone: bloqueia letras e aplica máscara ──
const campoTel = document.getElementById('telefone');

campoTel.addEventListener('input', function () {
    // Remove tudo que não for número
    let valor = this.value.replace(/\D/g, '');

    // Aplica máscara: (00) 00000-0000
    if (valor.length > 11) valor = valor.slice(0, 11);

    if (valor.length <= 10) {
        // Fixo: (00) 0000-0000
        valor = valor
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        // Celular: (00) 00000-0000
        valor = valor
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2');
    }

    this.value = valor;

    // Se tiver conteúdo e estiver válido, remove o erro
    const digits = this.value.replace(/\D/g, '');
    if (digits.length === 0 || digits.length >= 10) {
        this.classList.remove('invalido');
        document.getElementById('err-telefone').classList.remove('visivel');
    }
});

campoTel.addEventListener('keydown', function (e) {
    // Permite: backspace, delete, tab, setas, ctrl+a, ctrl+c, ctrl+v
    const permitidos = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (permitidos.includes(e.key) || e.ctrlKey || e.metaKey) return;
    // Bloqueia qualquer tecla que não seja número
    if (!/^\d$/.test(e.key)) e.preventDefault();
});

campoTel.addEventListener('blur', function () {
    const digits = this.value.replace(/\D/g, '');
    // Só valida se o campo tiver algum conteúdo
    if (digits.length > 0 && digits.length < 10) {
        this.classList.add('invalido');
        document.getElementById('err-telefone').classList.add('visivel');
    } else {
        this.classList.remove('invalido');
        document.getElementById('err-telefone').classList.remove('visivel');
    }
});


['nome', 'email', 'mensagem'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
        if (this.value.trim() !== '') {
            this.classList.remove('invalido');
            document.getElementById('err-' + id).classList.remove('visivel');
        }
    });
});

// ── Envio do formulário ──────────────────────────
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Valida todos os campos obrigatórios
    const valido = [
        validarCampo(document.getElementById('nome'),     'err-nome'),
        validarCampo(document.getElementById('email'),    'err-email'),
        validarCampo(document.getElementById('assunto'),  'err-assunto'),
        validarCampo(document.getElementById('mensagem'), 'err-mensagem'),
        validarCampo(document.getElementById('lgpd'),     'err-lgpd'),
    ].every(Boolean);

    // Valida telefone separado (é opcional, mas se preenchido precisa ser válido)
    const tel = document.getElementById('telefone');
    const digits = tel.value.replace(/\D/g, '');
    let telValido = true;
    if (digits.length > 0 && digits.length < 10) {
        tel.classList.add('invalido');
        document.getElementById('err-telefone').classList.add('visivel');
        telValido = false;
    }

    if (!valido || !telValido) {
        // Rola até o primeiro campo com erro
        const primeiroErro = form.querySelector('.invalido');
        if (primeiroErro) {
            primeiroErro.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    // Pega o nome para personalizar a mensagem de sucesso
    const nome = document.getElementById('nome').value.trim().split(' ')[0];
    nomeEnviado.textContent = nome;

    // Animação: form sobe e some
    form.classList.add('saindo');

    // Após a animação do form, mostra o sucesso
    setTimeout(function () {
        form.style.display = 'none';
        form.classList.remove('saindo');
        formSucesso.classList.add('entrando');
        formSucesso.style.display = 'flex';

        // Remove a classe de animação após ela terminar
        setTimeout(function () {
            formSucesso.classList.remove('entrando');
        }, 500);

    }, 400);
});

// ── Resetar: volta para o formulário ────────────
btnNovo.addEventListener('click', function () {
    // Animação: sucesso some
    formSucesso.classList.add('saindo');

    setTimeout(function () {
        formSucesso.style.display = 'none';
        formSucesso.classList.remove('saindo');

        // Limpa o formulário
        form.reset();
        form.querySelectorAll('.invalido').forEach(function (el) {
            el.classList.remove('invalido');
        });
        form.querySelectorAll('.form-erro.visivel').forEach(function (el) {
            el.classList.remove('visivel');
        });

        // Mostra o formulário com animação de descida
        form.classList.add('entrando-baixo');
        form.style.display = 'flex';

        setTimeout(function () {
            form.classList.remove('entrando-baixo');
        }, 500);

    }, 350);
});

// ── Mapa de Feiras de Adoção ─────────────────────
const feiras = [
    {
        nome: 'Feira Amor em Patas',
        local: 'Shopping Hortolândia',
        endereco: 'R. José Camilo de Camargo, 5 - Remanso Campineiro',
        lat: -22.8636357,
        lng: -47.2134791
    },
    {
        nome: 'Adote um Amigo',
        local: 'Parque Socioambiental Irmã Dorothy',
        endereco: 'R. Manoel Antônio da Silva, 415 - Jd. São Benedito',
        lat: -22.8964397,
        lng: -47.1694568
    },
    {
        nome: 'Adote Petz',
        local: 'Petz Hortolândia',
        endereco: 'Av. Santana, 970 - Parque Ortolândia',
        lat: -22.8695451,
        lng: -47.2263751
    },
    {
        nome: 'Feira IFSP',
        local: 'IFSP Campus Hortolândia',
        endereco: 'Av. Thereza Ana Cecon Breda, 1896 - Vila São Pedro',
        lat: -22.8509368,
        lng: -47.2311636
    }
];

// Inicializa o mapa centralizado em Hortolândia
const mapa = L.map('mapa-feiras').setView([-22.872, -47.210], 13);

// Camada do OpenStreetMap (gratuita, sem API key)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

// Garante que o Leaflet recalcula o tamanho após o layout renderizar
setTimeout(function () { mapa.invalidateSize(); }, 100);

// Ícone personalizado
const iconePet = L.divIcon({
    className: '',
    html: '<div class="mapa-marker">🐾</div>',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36]
});

// Adiciona marcadores
feiras.forEach(function (feira) {
    L.marker([feira.lat, feira.lng], { icon: iconePet })
        .addTo(mapa)
        .bindPopup(
            '<div class="mapa-popup">' +
            '<strong>' + feira.nome + '</strong>' +
            '<span>' + feira.local + '</span>' +
            '<small>' + feira.endereco + '</small>' +
            '</div>'
        );
});

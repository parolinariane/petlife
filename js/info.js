
document.addEventListener('DOMContentLoaded', function () {
    const secoes = Array.from(document.querySelectorAll('.info-secao[id]'));
    const navLinks = Array.from(document.querySelectorAll('.info-nav__link'));
    let filtroAtual = 'todos';

    // Mapa de relevância para o filtro por pet usando a própria navegação interna.
    // Cão: mostra Cães + conteúdos gerais.
    // Gato: mostra Gatos + conteúdos gerais.
    const mapaPets = {
        caes: 'cao',
        gatos: 'gato',
        higiene: 'ambos',
        veterinario: 'ambos'
    };

    // Marca as seções com data-pet sem precisar alterar o HTML.
    secoes.forEach(function (secao) {
        secao.dataset.pet = mapaPets[secao.id] || 'ambos';
    });

    // ─────────────────────────────────────────────
    // Estilos das novas interações
    // ─────────────────────────────────────────────
    const estilo = document.createElement('style');
    estilo.textContent = `
        .info-nav__link {
            position: relative;
            transition: background .2s, color .2s, transform .18s, box-shadow .2s, border-color .2s;
        }

        .info-nav__link.ativo {
            background: #fff;
            color: #364C59;
            border-color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 18px rgba(0,0,0,.14);
        }

        .info-nav__link.filtro-ativo::after {
            content: 'filtrando';
            position: absolute;
            left: 50%;
            top: calc(100% + 6px);
            transform: translateX(-50%);
            background: #fff;
            color: #364C59;
            font-size: .62rem;
            font-weight: 700;
            letter-spacing: .04em;
            text-transform: uppercase;
            padding: 2px 7px;
            border-radius: 999px;
            box-shadow: 0 4px 10px rgba(0,0,0,.12);
            white-space: nowrap;
            pointer-events: none;
        }

        .animar-scroll {
            opacity: 0;
            transform: translateY(28px);
            transition: opacity .65s ease, transform .65s ease;
            will-change: opacity, transform;
        }

        .animar-scroll.visivel {
            opacity: 1;
            transform: translateY(0);
        }

        /* Mantém o movimento no hover depois do fade-in.
           Sem estas regras, o transform do fade-in sobrescreve o transform do hover. */
        .card.animar-scroll.visivel,
        .dica-destaque.animar-scroll.visivel,
        .higiene-item.animar-scroll.visivel,
        .vet-card.animar-scroll.visivel,
        .info-aviso.animar-scroll.visivel,
        .info-secao__header.animar-scroll.visivel {
            transition: opacity .65s ease, transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        .card.animar-scroll.visivel:hover,
        .dica-destaque.animar-scroll.visivel:hover,
        .higiene-item.animar-scroll.visivel:hover,
        .vet-card.animar-scroll.visivel:hover,
        .info-aviso.animar-scroll.visivel:hover,
        .info-secao__header.animar-scroll.visivel:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(54, 76, 89, .12);
        }

        .secao-oculta {
            display: none !important;
        }

        .info-divisor.divisor-oculto {
            display: none !important;
        }

        @media (max-width: 620px) {
            .info-nav__link.filtro-ativo::after {
                display: none;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .animar-scroll,
            .animar-scroll.visivel,
            .info-nav__link {
                transition: none;
                transform: none;
            }
        }
    `;
    document.head.appendChild(estilo);

    // ─────────────────────────────────────────────
    // 1. Animação ao rolar a página
    // ─────────────────────────────────────────────
    const elementosAnimados = Array.from(document.querySelectorAll(
        '.info-aviso, .info-secao, .info-secao__header, .card, .dica-destaque, .higiene-item, .vet-card, .info-divisor'
    ));

    elementosAnimados.forEach(function (el, index) {
        el.classList.add('animar-scroll');

        // Pequeno atraso em cards/listas para criar entrada em sequência.
        if (
            el.classList.contains('card') ||
            el.classList.contains('higiene-item') ||
            el.classList.contains('vet-card')
        ) {
            el.style.transitionDelay = ((index % 4) * 70) + 'ms';
        }
    });

    if ('IntersectionObserver' in window) {
        const observerAnimacao = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visivel');

                    // Remove o delay depois da entrada para o hover responder imediatamente.
                    setTimeout(function () {
                        entrada.target.style.transitionDelay = '';
                    }, 750);

                    observerAnimacao.unobserve(entrada.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -45px 0px'
        });

        elementosAnimados.forEach(function (el) {
            observerAnimacao.observe(el);
        });
    } else {
        elementosAnimados.forEach(function (el) {
            el.classList.add('visivel');
        });
    }

    // ─────────────────────────────────────────────
    // 2. Nav interna com destaque ativo
    // ─────────────────────────────────────────────
    function destacarLinkAtivo(id) {
        navLinks.forEach(function (link) {
            const linkId = link.getAttribute('href').replace('#', '');
            link.classList.toggle('ativo', linkId === id);
        });
    }

    function destacarFiltroAtivo() {
        navLinks.forEach(function (link) {
            const linkId = link.getAttribute('href').replace('#', '');
            const filtroDoLink = linkId === 'caes' ? 'cao' : linkId === 'gatos' ? 'gato' : 'todos';
            const deveDestacar = filtroAtual !== 'todos' && filtroDoLink === filtroAtual;
            link.classList.toggle('filtro-ativo', deveDestacar);
        });
    }

    function secoesVisiveis() {
        return secoes.filter(function (secao) {
            return !secao.classList.contains('secao-oculta');
        });
    }

    function atualizarNavManual() {
        const visiveis = secoesVisiveis();
        if (!visiveis.length) return;

        let secaoAtual = visiveis[0];
        const margemTopo = 160;

        visiveis.forEach(function (secao) {
            const topo = secao.getBoundingClientRect().top;
            if (topo <= margemTopo) {
                secaoAtual = secao;
            }
        });

        destacarLinkAtivo(secaoAtual.id);
    }

    if ('IntersectionObserver' in window) {
        const observerNav = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                if (
                    entrada.isIntersecting &&
                    !entrada.target.classList.contains('secao-oculta')
                ) {
                    destacarLinkAtivo(entrada.target.id);
                }
            });
        }, {
            threshold: 0.42,
            rootMargin: '-18% 0px -52% 0px'
        });

        secoes.forEach(function (secao) {
            observerNav.observe(secao);
        });
    }

    window.addEventListener('scroll', atualizarNavManual, { passive: true });

    // ─────────────────────────────────────────────
    // 3. Filtro por pet usando os links que já existem
    // ─────────────────────────────────────────────
    function atualizarDivisores() {
        const divisores = Array.from(document.querySelectorAll('.info-divisor'));

        divisores.forEach(function (divisor) {
            let anterior = divisor.previousElementSibling;
            let proximo = divisor.nextElementSibling;

            while (anterior && !anterior.classList.contains('info-secao')) {
                anterior = anterior.previousElementSibling;
            }

            while (proximo && !proximo.classList.contains('info-secao')) {
                proximo = proximo.nextElementSibling;
            }

            const esconder =
                !anterior ||
                !proximo ||
                anterior.classList.contains('secao-oculta') ||
                proximo.classList.contains('secao-oculta');

            divisor.classList.toggle('divisor-oculto', esconder);
        });
    }

    function aplicarFiltro(filtro) {
        filtroAtual = filtro;

        secoes.forEach(function (secao) {
            const petSecao = secao.dataset.pet;
            const mostrar = filtro === 'todos' || petSecao === filtro || petSecao === 'ambos';

            secao.classList.toggle('secao-oculta', !mostrar);

            // Se a seção voltar a aparecer, garante a animação visível.
            if (mostrar) {
                secao.classList.add('visivel');
                secao.querySelectorAll('.animar-scroll').forEach(function (el) {
                    el.classList.add('visivel');
                });
            }
        });

        atualizarDivisores();
        destacarFiltroAtivo();

        const primeiraSecao = secoesVisiveis()[0];
        if (primeiraSecao) {
            destacarLinkAtivo(primeiraSecao.id);
        }
    }

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');
            const alvo = document.querySelector(href);
            if (!alvo) return;

            e.preventDefault();

            const id = href.replace('#', '');
            let novoFiltro = filtroAtual;

            if (id === 'caes') {
                // Clicou uma vez: filtra por cão. Clicou de novo: limpa filtro.
                novoFiltro = filtroAtual === 'cao' ? 'todos' : 'cao';
            } else if (id === 'gatos') {
                // Clicou uma vez: filtra por gato. Clicou de novo: limpa filtro.
                novoFiltro = filtroAtual === 'gato' ? 'todos' : 'gato';
            } else {
                // Higiene e Veterinário são gerais, então também limpam o filtro.
                novoFiltro = 'todos';
            }

            aplicarFiltro(novoFiltro);

            alvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            destacarLinkAtivo(id);
        });
    });

    // Estado inicial
    destacarLinkAtivo('caes');
    atualizarDivisores();
    destacarFiltroAtivo();
});

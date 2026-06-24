const pets = {

    pipoca: {
        nome: "Pipoca",
        sexo: "Macho",
        idade: "1 ano",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/pipoca.webp",
            "../img/pets/pipoca2.webp",
            "../img/pets/pipoca3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Pipoca! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 1 aninho e sou um verdadeiro amorzinho 🥰 <hr>Tenho a pelagem branquinha e já sou vermifugado. <hr>Sou dócil, calmo, brincalhão e sociável. Gosto de carinho, mas também sei ser independente 🐾✨ <hr>Me dou bem com outros cachorros, crianças, idosos e até pessoas que eu ainda não conheço! <hr>Posso viver tanto em casa quanto em apartamento… só preciso de um lar cheio de amor e cuidado 🏡💙"
    },

    simba: {
        nome: "Simba",
        sexo: "Macho",
        idade: "5 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/simba.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Simba! <hr>Sou um cachorro vira-lata, de porte médio, tenho 5 anos e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem branquinha com marrom e já estou vacinado e vermifugado. <hr>Sou dócil, calmo, brincalhão e sociável. Gosto de companhia, mas também sei ficar de boa no meu cantinho 🐾✨ <hr>Me dou bem com gatos, outros cachorros, crianças, idosos e até pessoas que eu ainda não conheço! <hr>Posso viver tanto em casa quanto em apartamento... só preciso de um lar com carinho e cuidado 🏡💙"
    },

    perola: {
        nome: "Pérola",
        sexo: "Fêmea",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/perola.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Pérola! <hr>Sou uma filhotinha vira-lata, de porte pequeno, tenho entre 2 a 6 meses e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem branquinha e sou bem fofinha. <hr>Sou dócil, calma, brincalhona e bem carente… adoro carinho e companhia 🐾✨ <hr>Me dou super bem com gatos, cachorros, crianças, idosos e pessoas desconhecidas também! <hr>Posso viver em casa com quintal ou apartamento… só preciso de um lar cheio de amor e cuidado 🏡💙 (preciso de alguns cuidados especiais no veterinário)"
    },

    capitao: {
        nome: "Capitão",
        sexo: "Macho",
        idade: "5 anos",
        raca: "Boxer",
        imagens: [
            "../img/pets/capitao.webp",
            "../img/pets/capitao2.webp",
            "../img/pets/capitao3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Capitão! <hr>Sou um cachorro da raça Boxer, de porte grande, tenho 5 anos e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem branca com marrom e já estou vacinado e vermifugado. <hr>Sou dócil, calmo, brincalhão e carente… adoro atenção e carinho 🐾✨ <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Posso viver em casa com quintal… só preciso de um lar com amor e cuidado 🏡💙"
    },

    harley: {
        nome: "Harley",
        sexo: "Fêmea",
        idade: "3 anos",
        raca: "Dogue Alemão",
        imagens: [
            "../img/pets/harley.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Harley! <hr>Sou uma Dogue Alemão, de porte grande, tenho 3 anos e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem preta e branca e já estou vacinada e vermifugada. <hr>Sou dócil, brincalhona, sociável e bem carente… adoro carinho e atenção 🐾✨ <hr>Aprendo fácil e só preciso de um lar com amor, cuidado e companhia. <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero uma família que me dê carinho e um cantinho seguro pra eu ser feliz 🏡💙"
    },

    pandora: {
        nome: "Pandora",
        sexo: "Fêmea",
        idade: "4 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/pandora.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Pandora! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 4 anos e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem caramelo e já sou castrada e vacinada. <hr>Sou dócil, brincalhona, sociável e também sei ser um pouquinho independente 🐾✨ <hr>Me dou muito bem com crianças, idosos e pessoas desconhecidas! <hr>Só preciso de um lar com carinho, cuidado e um cantinho seguro pra ser feliz 🏡💙"
    },

    apollo: {
        nome: "Apóllo",
        sexo: "Macho",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/apollo.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Apóllo! Sou um cachorrinho vira-lata, de porte grande, tenho 2 anos e sou muito amoroso e companheiro."
    },

    chico: {
        nome: "Chico",
        sexo: "Macho",
        idade: "6 anos ou mais",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/chico.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Chico! <hr>Sou um cachorrinho vira-lata, de porte médio, tenho 6 anos ou mais e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem pretinha com uma charmosa manchinha branca no peito e já sou castrado e vacinado. <hr>Sou dócil, brincalhão, sociável e também independente… adoro fazer novos amigos 🐾✨ <hr>Me dou bem com gatos, cachorros, crianças, idosos e até pessoas desconhecidas! <hr>Posso viver em casa com quintal ou apartamento… só quero um lar cheio de carinho e amor 🏡💙"
    },

    fiona: {
        nome: "Fiona",
        sexo: "Fêmea",
        idade: "6 anos ou mais",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/fiona.webp"
        ],
        descricao: "🐶💙Oi, eu sou a Fiona! <hr>Sou uma cachorrinha vira-lata, de porte grande, tenho 6 anos ou mais e um coração cheio de amor 🥰 <hr>Tenho a pelagem pretinha e já sou castrada e vacinada. <hr>Sou dócil, calma, sociável, carente e também independente… adoro carinho e companhia 🐾✨ <hr>Me dou bem com gatos, cachorros, crianças, idosos e até pessoas desconhecidas! <hr>Posso viver tanto em casa com quintal quanto em apartamento… só quero um lar cheio de amor e cuidado 🏡💙"
    },

    zuma: {
        nome: "Zuma",
        sexo: "Fêmea",
        idade: "4 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/zuma.webp",
            "../img/pets/zuma2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Zuma! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 4 anos e sou cheia de alegria 🥰 <hr>Tenho a pelagem branca e preta e já sou castrada. <hr>Sou dócil, brincalhona e muito carinhosa… adoro compartilhar momentos felizes com quem amo 🐾✨ <hr>Sou um pouquinho medrosa às vezes, mas isso só faz eu querer ainda mais carinho e paciência 💖 <hr>Me dou bem com crianças e sonho com um lar cheio de amor e cuidado 🏡💙"
    },

    hunter: {
        nome: "Hunter",
        sexo: "Macho",
        idade: "7 a 11 meses",
        raca: "Rottweiler",
        imagens: [
            "../img/pets/hunter.webp",
            "../img/pets/hunter2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Hunter! <hr>Sou um Rottweiler de porte médio, tenho entre 7 e 11 meses e sou cheio de energia e amor pra dar 🥰 <hr>Tenho a pelagem preta com marrom e já estou vacinado. <hr>Sou dócil, brincalhão e muito sociável… adoro brincar e passar tempo com as pessoas 🐾✨ <hr>Me dou bem com outros cachorros e crianças, sempre pronto para momentos divertidos e cheios de carinho! <hr>Estou procurando uma família que me dê amor, atenção e um lar cheio de felicidade 🏡💙"
    },

    tchuca: {
        nome: "Tchuca",
        sexo: "Fêmea",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/tchuca.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Tchuca! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 2 anos e sou muito carinhosa 🥰 <hr>Tenho a pelagem branca com caramelo e já sou castrada, vacinada e vermifugada. <hr>Sou dócil e bem carente… adoro carinho, companhia e momentos tranquilos ao lado de quem amo 🐾✨ <hr>Me dou bem com outros cachorros, crianças e idosos! <hr>Estou procurando um novo lar cheio de amor, cuidado e aconchego para recomeçar minha história 🏡💙"
    },

    pingo: {
        nome: "Pingo",
        sexo: "Macho",
        idade: "7 a 11 meses",
        raca: "Labrador",
        imagens: [
            "../img/pets/pingo.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Pingo! <hr>Sou um Labrador de porte médio, tenho entre 7 e 11 meses e sou um filhotão cheio de amor 🥰 <hr>Tenho a pelagem pretinha e adoro brincar, correr e receber carinho. <hr>Sou dócil, brincalhão, sociável e bem carente… vou amar ser seu melhor amigo 🐾✨ <hr>Me dou bem com gatos, cachorros, crianças e até pessoas desconhecidas! <hr>Posso viver em casa com quintal ou apartamento… só preciso de uma família cheia de amor e atenção 🏡💙"
    },

    revoada: {
        nome: "Revoada",
        sexo: "Macho",
        idade: "2 anos",
        raca: "Pit-Bul",
        imagens: [
            "../img/pets/revoada.webp",
            "../img/pets/revoada2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Revoada! <hr>Sou um Pit-bul, tenho 2 anoa e sou cheio de amor 🥰 <hr>Adoro brincar, correr e receber carinho. <hr>Sou dócil, brincalhão, sociável e bem carente… vou amar ser seu melhor amigo 🐾✨ <hr>Me dou bem com gatos, cachorros, crianças e até pessoas desconhecidas! <hr>Posso viver em casa com quintal ou apartamento… só preciso de uma família cheia de amor e atenção 🏡💙"
    },

    theo: {
        nome: "Theo",
        sexo: "Macho",
        idade: "1 ano",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/theo.webp",
            "../img/pets/theo2.webp",
            "../img/pets/theo3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Theo! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 1 aninho e muita energia pra gastar 🥰 <hr>Tenho a pelagem preta com cinza e já estou vacinado e vermifugado. <hr>Sou brincalhão, independente e adoro explorar tudo ao meu redor 🐾✨ <hr>Também tenho meu jeitinho e preciso de uma família paciente, que me dê carinho, atenção e espaço para brincar. <hr>Me dou bem com outros cachorros e sonho com um lar cheio de amor e momentos felizes 🏡💙"
    },

    gracinha: {
        nome: "Gracinha",
        sexo: "Fêmea",
        idade: "4 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/gracinha.webp",
            "../img/pets/gracinha2.webp",
            "../img/pets/gracinha3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Gracinha! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 4 anos e muito amor pra dar 🥰 <hr>Tenho a pelagem rajada e já sou castrada e vermifugada. <hr>Sou calma, carente e adoro receber carinho e atenção 🐾✨ <hr>Estou procurando uma família cheia de amor, cuidado e um cantinho aconchegante para chamar de meu 🏡💙"
    },

    maya: {
        nome: "Maya",
        sexo: "Fêmea",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/maya.webp",
            "../img/pets/maya2.webp",
            "../img/pets/maya3.webp",
            "../img/pets/maya4.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Maya! <hr>Sou uma filhotinha vira-lata, de porte pequeno, tenho entre 2 a 6 meses e sou muito fofinha 🥰 <hr>Tenho a pelagem rajada e estou cheia de amor pra dar. <hr>Sou brincalhona, carinhosa e adoro atenção 🐾✨ <hr>Estou procurando uma família cheia de cuidado, carinho e um lar quentinho para crescer feliz 🏡💙"
    },

    mel: {
        nome: "Mel",
        sexo: "Fêmea",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/mel.webp",
            "../img/pets/mel2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Mel! <hr>Sou vira-lata, de porte pequeno, tenho entre 2 anos e sou muito fofinha 🥰 <hr>Estou cheia de amor pra dar. <hr>Sou brincalhona, carinhosa e adoro atenção 🐾✨ <hr>Estou procurando uma família cheia de cuidado, carinho e um lar quentinho para crescer feliz 🏡💙🐶💙 Oi, eu sou a Mel! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 2 anos e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem caramelo e já sou castrada, vacinada e vermifugada. <hr>Sou dócil, calma e adoro carinho e companhia 🐾✨ <hr>Estou procurando um lar cheio de amor, cuidado e um cantinho especial para ser feliz 🏡💙"
    },

    isis: {
        nome: "Ísis",
        sexo: "Fêmea",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/isis.webp",
            "../img/pets/isis2.webp",
            "../img/pets/isis3.webp",
            "../img/pets/isis4.webp",
            "../img/pets/isis5.webp",
            "../img/pets/isis6.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Ísis! <hr>Sou uma filhotinha vira-lata, de porte médio, tenho entre 2 a 6 meses e sou cheia de alegria 🥰 <hr>Tenho a pelagem pretinha e já estou vacinada e vermifugada. <hr>Sou dócil, brincalhona e sociável… adoro explorar tudo ao meu redor 🐾✨ <hr>Estou sempre curiosa e feliz, pronta para encher qualquer lar de amor e energia. <hr>Posso viver em casa com quintal ou apartamento… só preciso de carinho, cuidado e uma família pra crescer feliz 🏡💙"
    },

    brigite: {
        nome: "Brigite",
        sexo: "Fêmea",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/brigite.webp",
            "../img/pets/brigite2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Brigite! <hr>Sou uma cachorrinha vira-lata, de porte médio, tenho 2 anos e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem preta com marrom e já sou castrada, vacinada e vermifugada. <hr>Sou dócil, brincalhona, sociável e bem carente… adoro companhia e carinho 🐾✨ <hr>Tenho um olhar que conquista qualquer coração e só quero uma família pra amar pra sempre 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Estou procurando um lar seguro, cheio de cuidado e amor 🏡💙"
    },

    astor: {
        nome: "Astor",
        sexo: "Macho",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/astor.webp",
            "../img/pets/astor2.webp",
            "../img/pets/astor3.webp",
            "../img/pets/astor4.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Astor! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 2 anos e um sorriso cheio de amor 🥰 <hr>Tenho a pelagem amarela e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Sou aquele companheiro perfeito pra quem busca amizade verdadeira e momentos felizes. <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Estou procurando um lar cheio de amor, cuidado e um cantinho especial pra chamar de meu 🏡💙"
    },

    karamellow: {
        nome: "Karamellow",
        sexo: "Macho",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/karamellow.webp",
            "../img/pets/karamellow2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Karamellow! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 2 anos e meio e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem caramelo e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Estou esperando uma chance de ter um lar cheio de amor e cuidado 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero uma família pra chamar de minha 🏡💙"
    },

    bigodinho: {
        nome: "Bigodinho",
        sexo: "Macho",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/bigodinho.webp",
            "../img/pets/bigodinho2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Bigodinho! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 2 anos e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem amarela e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Estou esperando uma chance de ter um lar cheio de amor, alegria e cuidado 🏡💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero uma família pra chamar de minha e viver feliz pra sempre 💙"
    },

    floquinho: {
        nome: "Floquinho",
        sexo: "Macho",
        idade: "3 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/floquinho.webp",
            "../img/pets/floquinho2.webp",
            "../img/pets/floquinho3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Floquinho! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 3 anos e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem amarela e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro companhia e carinho 🐾✨ <hr>Tenho só um olhinho, mas enxergo o mundo com muito amor e alegria 💙 <hr>Estou esperando uma família pra ser meu lar e me dar muito carinho 🏡💛 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas!"
    },

    polly: {
        nome: "Polly",
        sexo: "Fêmea",
        idade: "2 anos",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/polly.webp",
            "../img/pets/polly2.webp",
            "../img/pets/polly3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Polly! <hr>Sou uma cachorrinha vira-lata, de porte pequeno, tenho 2 anos e sou cheia de amor pra dar 🥰 <hr>Tenho a pelagem amarela e já sou castrada, vacinada e vermifugada. <hr>Sou dócil, brincalhona, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Tenho uma carinha que conquista qualquer coração e só quero uma chance de ser feliz 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Estou procurando um lar cheio de amor, cuidado e carinho 🏡💖"
    },

    theobaldo: {
        nome: "Theobaldo",
        sexo: "Macho",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/theobaldo.webp",
            "../img/pets/theobaldo2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Theobaldo! <hr>Sou um filhotão vira-lata, de porte médio, tenho entre 2 a 6 meses e sou cheio de alegria 🥰 <hr>Tenho a pelagem rajada e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Estou pronto pra viver grandes aventuras e transformar qualquer dia comum em especial 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só preciso de um lar cheio de amor pra ser feliz 🏡💙"
    },

    mike: {
        nome: "Mike",
        sexo: "Macho",
        idade: "1 ano",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/mike.webp",
            "../img/pets/mike2.webp",
            "../img/pets/mike3.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Mike! <hr>Sou um cachorrinho vira-lata, de porte pequeno, tenho 1 ano e meio e sou cheio de energia e amor pra dar 🥰 <hr>Tenho a pelagem branquinha e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Estou prontinho pra fazer parte da sua vida e ser seu companheiro fiel 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só preciso de um lar cheio de amor pra ser feliz 🏡💙"
    },

    fofokinha: {
        nome: "Fofokinha",
        sexo: "Fêmea",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/fofokinha.webp",
            "../img/pets/fofokinha2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou a Fofokinha! <hr>Sou uma filhotinha vira-lata, de porte pequeno, tenho entre 2 a 6 meses e sou pura alegria 🥰 <hr>Tenho a pelagem preta com marrom e já sou castrada, vacinada e vermifugada. <hr>Sou dócil, brincalhona, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Estou pronta pra crescer cercada de amor em um lar cheio de afeto 💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero uma família pra me amar pra sempre 🏡💖"
    },

    pinguinho: {
        nome: "Pinguinho",
        sexo: "Macho",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/pinguinho.webp",
            "../img/pets/pinguinho2.webp",
            "../img/pets/pinguinho3.webp",
            "../img/pets/pinguinho4.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Pinguinho! <hr>Sou um filhotinho vira-lata, de porte pequeno, tenho 2 meses e meio e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem pretinha e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Sou curioso e pronto pra descobrir o mundo, mas preciso de um lar pra minha história ficar completa 💔💙 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero uma família pra me amar e me dar um cantinho seguro 🏡💙"
    },

    demetrio: {
        nome: "Demétrio",
        sexo: "Macho",
        idade: "2 a 6 meses",
        raca: "Vira-lata",
        imagens: [
            "../img/pets/demetrio.webp",
            "../img/pets/demetrio2.webp"
        ],
        descricao: "🐶💙 Oi, eu sou o Demétrio! <hr>Sou um filhotinho vira-lata, de porte pequeno, tenho 3 meses e sou cheio de amor pra dar 🥰 <hr>Tenho a pelagem pretinha e já sou castrado, vacinado e vermifugado. <hr>Sou dócil, brincalhão, sociável e bem carente… adoro carinho e companhia 🐾✨ <hr>Sou curioso e estou prontinho pra encontrar uma família cheia de amor e cuidado 💛 <hr>Me dou bem com outros cachorros, crianças e pessoas desconhecidas! <hr>Só quero um lar pra ser feliz e crescer amado 🏡💙"
    }
};
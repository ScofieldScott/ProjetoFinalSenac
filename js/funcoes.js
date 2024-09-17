function listarCombos() {
    fetch('http://localhost:8080/combos').
        then(response => response.json()).
        then(function (dados) {
            let todosOsCombos = document.getElementById("combos")
            todosOsCombos.innerHTML = ""
            dados.forEach(function (dado) {
                let conteudo = `<a href="Combo.html?idCombo=${dado.id}">
                                        <img class="box-de-comida--1" src="${dado.img64}" alt="">
                                        <span>${dado.nome}</span>
                                        </br>
                                        <span>${dado.descricao}</span>
                                    </a>`


                todosOsCombos.innerHTML = todosOsCombos.innerHTML + conteudo;
            })
        }
        );
}

function recuperarCombo(id) {

    let url = new URL(window.location.href);
    //recuperando o id da pessoa que esta no parametro de nome idPessoa
    let idCombo = url.searchParams.get('idCombo');

    fetch('http://localhost:8080/combos/' + idCombo).then(response => response.json()).
        then(function (dados) {
            let combo = document.getElementById("dadosCombo")
            combo.innerHTML = ""

            let conteudo = `<img src="${dados.img64}" alt="">

            <div class="detalhes-do-prato">
                <h3>
                    <strong>${dados.nome}</strong>
                </h3>

                <p>
                    ${dados.descricao}
                </p>

                <strong class="preco">${"R$ " + dados.preco}</strong>
                
                <div class="adicionar-carrinho">
                    <a href="detalhesDoPedidoPratos.html">
                        <button>Adicionar</button>
                    </a>
                </div>
            </div>`

            combo.innerHTML = combo.innerHTML + conteudo;
        })
}

function listarMarmitas() {
    fetch('http://localhost:8080/marmita').
        then(response => response.json()).
        then(function (dados) {
            let todasAsMarmitas = document.getElementById("marmitas")
            todasAsMarmitas.innerHTML = ""
            dados.forEach(function (dado) {
                let conteudo = `<a class="related-post" href="menuPratos.html?idMarmita=${dado.id}">
                                <img class="box-de-comida--1" src="${dado.img64}" alt="">

                                <div>
                                    <span>${dado.nome}</span>
                                    <p>
                                        ${dado.acompanhamentos}
                                    </p>
                                </div>
                            </a>`


                todasAsMarmitas.innerHTML = todasAsMarmitas.innerHTML + conteudo;
            })
        }
        );
}
//Continuação PAULO

function listarCarrinho(id) {
    fetch('http://localhost:8080/carrinho/' + id).then(response => response.json()).
        then(function (dados) {
            let carrinho = document.getElementById("dadosCarrinho")
            carrinho.innerHTML = ""
            dados.forEach(function (dado) {
                let conteudo = `<img src="${dado.img64}" alt="">
            <div class="dados-carrinho">
                <h3>
                    <strong>${dado.nome}</strong>
                </h3>
                <p>
                    ${dado.descricao}
                </p>
                <strong class="preco">${dado.preco}</strong>
                <a href="#" onclick="removerItem(${dado.id})">
                    Remover
                </a>
            </div>`

                carrinho.innerHTML = carrinho.innerHTML + conteudo;
            })
        }
        );
}

function recuperaCarrinho() {
    let url = new URL(window.location.href);
    //recuperando o id da pessoa que esta no parametro de nome idPessoa
    let idPessoa = url.searchParams.get('idPessoa');
    fetch('http://localhost:8080/prato').
        then(response => response.json()).
        then(function (dados) {
            let carrinho = document.getElementById('dadosCarrinho');
            carrinho.innerHTML = ""
            let carro = `
        
        <div class="carrinho-cheio">
            <img src="${dados.img64}" alt="">
            <h4>
                ${dados.nome}
            </h4>

            <div class="valor-produto" id="valor-produto">
                    <span class="quantidade">${dados.quantidade}</span>
                    <button class="contador">
                    </button>

                    <div class="preco">

                        <span>${"R$ " + dados.preco}</span>
                    </div>

                </div>

            </div>`

            carro.innerHTML = carro.innerHTML + conteudo;


        });

//listar marmitas mais Pedidos gustavo
function listarMarmitasMaisPedidos(){
    fetch('http://localhost:8080/MarmitasMaisPedidos').
    then(response=>response.json()).
    then(function(dados){
        let todosOsMarmitasMaisPedidos = document.getElementById("marmitasMaisPedidos")
        todosOsMarmitasMaisPedidos.innerHTML=""
        dados.forEach(function(dad){
            let conteudo =`href=menuMarmitasMaisPedidos.html".html?idMarmitasMaisPedidos=${dad.id}">
            <span>${dad.nome}</span>
            </br>
            <span>${dad.descricao}</span>
            </a>`

        todosOsMarmitasMaisPedidos.innerHTML = todosOsMarmitasMaisPedidos.innerHTML + conteudo;
        });
    });
}

function recuperarMarmitasMaisPedidos(id){
    fetch('http://localhost:8080/MarmitasMaisPedidos/').then(response =>response.json()).
    then(function (dados){
        let MarmitasMaisPedidos = document.getElementById("dadosMarmitasMaisPedidos")
        MarmitasMaisPedidos.innerHTML = ""

        let conteudo = `<img src="${dados.img64}" alt="">

            <div class="detalhes-do-prato">
                <h3>
                    <strong>${dados.nome}</strong>
                </h3>

                <p>
                    ${dados.descricao}
                </p>

                <strong class="preco">${dados.preco}</strong>
                
                <div class="adicionar-carrinho">
                    <a href="detalhesDoPedidoPratos.html">
                        <button>Adicionar</button>
                    </a>
                </div>
            </div>`

        MarmitasMaisPedidos.innerHTML = MarmitasMaisPedidos.innerHTML + conteudo;
    })
}

//listar marmitas
function listarMarmitas(){
    fetch('http://localhost:8080/Marmitas').
    then(response=>response.json()).
    then(function(dados){
        let todosOsMarmitas = document.getElementById("marmitas")
        todosOsMarmitas.innerHTML=""
        dados.forEach(function(dad){
            let conteudo =`href=menuMarmitas.html".html?idMarmitas=${dad.id}">
            <span>${dad.nome}</span>
            </br>
            <span>${dad.descricao}</span>
            </a>`

        todosOsMarmitas.innerHTML = todosOsMarmitas.innerHTML + conteudo;
        });
    });
}

function recuperarMarmitas(id){
    fetch('http://localhost:8080/Marmitas/').then(response =>response.json()).
    then(function (dados){
        let Marmitas = document.getElementById("dadosMarmitas")
        Marmitas.innerHTML = ""

        let conteudo = `<img src="${dados.img64}" alt="">

            <div class="detalhes-do-prato">
                <h3>
                    <strong>${dados.nome}</strong>
                </h3>

                <p>
                    ${dados.descricao}
                </p>

                <strong class="preco">${dados.preco}</strong>
                
                <div class="adicionar-carrinho">
                    <a href="detalhesDoPedidoPratos.html">
                        <button>Adicionar</button>
                    </a>
                </div>
            </div>`

        Marmitas.innerHTML = Marmitas.innerHTML + conteudo;
    })
}




    


}

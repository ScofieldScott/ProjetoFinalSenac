function listarCombos(){
    fetch('http://localhost:8080/combos').
    then(response=>response.json()).
    then(function(dados){
        let todosOsCombos = document.getElementById("combos")
        todosOsCombos.innerHTML = ""
        dados.forEach(function (dado){
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

function recuperarCombo(id){

    let url = new URL(window.location.href);
    //recuperando o id da pessoa que esta no parametro de nome idPessoa
    let idCombo = url.searchParams.get('idCombo');

    fetch('http://localhost:8080/combos/'+idCombo).then(response =>response.json()).
    then(function (dados){
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

                <strong class="preco">${dados.preco}</strong>
                
                <div class="adicionar-carrinho">
                    <a href="detalhesDoPedidoPratos.html">
                        <button>Adicionar</button>
                    </a>
                </div>
            </div>`

        combo.innerHTML = combo.innerHTML + conteudo;
    })
}

function listarMarmitas(){
    fetch('http://localhost:8080/marmita').
    then(response=>response.json()).
    then(function(dados){
            let todasAsMarmitas = document.getElementById("marmitas")
            todasAsMarmitas.innerHTML = ""
            dados.forEach(function (dado){
                let conteudo = `<a class="related-post" href="pratoDeCarne1.html?idMarmita=${dado.id}">
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

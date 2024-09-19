function listarCombos() {
    fetch('http://localhost:8080/combos').
        then(response => response.json()).
        then(function (dados) {
            let todosOsCombos = document.getElementById("combos")
            todosOsCombos.innerHTML = ""
            dados.forEach(function (dado) {
                let conteudo = `<div class="related-box">
                <a href="Combo.html?idCombo=${dado.id}">
                                        <img class="box-de-comida--1" src="${dado.img64}" alt="">
                                        <div>
                                            <span>${dado.nome}</span>
                                            <p>${dado.descricao}</p>
                                            
                                        </div>
                                    </a>
                                    </div>`


                todosOsCombos.innerHTML = todosOsCombos.innerHTML + conteudo;
            })
        }
        );
}

function recuperarCombo() {

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
                    <a href="detalhesDoPedido.html?idCombo=${idCombo}">
                        <button>Escolher marmitas</button>
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
                    let conteudo = `
                    <div class="related-box">
                    <a class="related-post" href="MarmitaDeComida.html?idMarmita=${dado.id}">
                                <img class="box-de-comida--1" src="${dado.proteina.img64}" alt="">

                                <div class="descricao">
                                    <span>${dado.nome}</span>
                                    <p>
                                        ${dado.acompanhamentos}
                                    </p>
                                </div>
                            </a>
                    </div>`
                            
                todasAsMarmitas.innerHTML = todasAsMarmitas.innerHTML + conteudo;
            })
        }
        );
}

function recuperarMarmita(id) {

    let url = new URL(window.location.href);
    //recuperando o id da pessoa que esta no parametro de nome idMarmita
    let idMarmita = url.searchParams.get('idMarmita');

    fetch('http://localhost:8080/marmita/' + idMarmita).then(response => response.json()).
        then(function (dados) {
            let marmita = document.getElementById("box-apresentacao-do-prato")
            marmita.innerHTML = ""

            let conteudo = `<img src="${dados.proteina.img64}" alt="">

            <div class="detalhes-do-prato">
                <h3>
                    <strong>${dados.nome}</strong>
                </h3>

                <p>
                    ${dados.acompanhamentos}
                </p>
            </div>`

            marmita.innerHTML = marmita.innerHTML + conteudo;
        })
}

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


function listarMarmitasDoCombo() {

    let url = new URL(window.location.href);
    
    let idCombo = url.searchParams.get('idCombo');

    fetch('http://localhost:8080/marmita/combo/'  + idCombo).
        then(response => response.json()).
        then(function (dados) {
            let todasAsMarmitas = document.getElementById("adicionar")
            todasAsMarmitas.innerHTML = ""
            dados.forEach(function (dado) {
                    let conteudo = `
                    <li>
                <label class="wrapper" for="">
                  <input type="checkbox" limit="4" name="marmitas" required/>
                  <span>${dado.nome}</span>
                </label>
              </li>`
                            
                todasAsMarmitas.innerHTML = todasAsMarmitas.innerHTML + conteudo;
            })
        }
        ).then(function (){limitCheckbox()});
}

function limitCheckbox(){
    let qtd = 4;
    const checkboxes = document.querySelectorAll(`input[name="marmitas"]`);

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll(`input[name="marmitas"]:checked`).length;
            if (checkedCount > qtd) {
                checkbox.checked = false
            }
        });
    });
}


function dadosDoCombo(){

    let url = new URL(window.location.href);
    
    let idCombo = url.searchParams.get('idCombo');

    fetch('http://localhost:8080/combos/' + idCombo).then(response => response.json()).
        then(function (dados) {
            let combo = document.getElementById("detalhes-do-combo")
            combo.innerHTML = ""
            let conteudo = `
            <div class="apresentacao-da-comida" id="apresentacao-da-comida">
          <img
            src="${dados.img64}"
            alt=""
          />
        </div>

        <div class="box-apresentacao-do-prato" id="box-apresentacao-do-prato">
          <div class="detalhes-do-prato" id="detalhes-do-prato">
            <h3>
            <strong>${dados.nome}</strong>
          </h3>

          <p>
            ${dados.descricao}
          </p>

          <strong class="preco">${"R$" + dados.preco}</strong>
          </div>
        </div>`
        combo.innerHTML = combo.innerHTML + conteudo;
})}
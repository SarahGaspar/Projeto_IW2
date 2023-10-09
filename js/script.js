// QUESITO UM - Somar dois Numeros
verResposta1.addEventListener("click", somar);

function somar() {
    let n1 = Number(document.getElementById('numero1').value);
    let n2 = Number(document.getElementById('numero2').value);
    let soma = n1+n2;
    resposta1.innerHTML = soma;
}

// QUESITO DOIS - colorir uma certa pagina algo clicar

verResposta2.addEventListener(`click`, colorir);

function colorir(){
    cardVermelho.style.backgroundColor = 'red';
}

// QUESITO TRÊS - Fazer aparecer uma lista de números de um até 5

verResposta3.addEventListener("click", listaDeRepeticao);
function listaDeRepeticao() {
    for (let i = 0; i<=5; i++){
        resposta3.innerText += `${i}\n`; 
    }
}

// QUESITO QUATRO - Descobrir se o aluno é aprovado ou não

verResposta4.addEventListener("click", verificarMedia);
function verificarMedia() {
    let mediaAluno = Number.parseFloat(media.value);
    if (media.value >= 6){
        resposta4.innerHTML = 'Resposta: Aprovado'
    } else {
        resposta4.innerHTML = 'Resposta: Reprovado'
    }
}


// PAG - CONTATO 


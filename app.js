let listaNumeroSorteado = [];
let numeroLimite = 5;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
      campo.innerHTML = texto;
      responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', `Escolha um número entre 1 a ${numeroLimite}`);

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 a ${numeroLimite}`);
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    tentativas++;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        ativarBotao();
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número Secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
    }
    limparCampo();
}


function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroSorteado.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroSorteado = [];
    }
    
    if(listaNumeroSorteado.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';   
}

function ativarBotao(){
    let ativar = document.getElementById('reiniciar').removeAttribute('disabled');
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
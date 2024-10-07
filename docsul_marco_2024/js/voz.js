var selecaoAtivada = false;
var ultimoClique = 0; // Variável para armazenar o timestamp do último clique

function destacarAoPassarMouse(event) {
    if (selecaoAtivada) {
        var elementoClicado = event.target;

        // Remover destaque dos elementos anteriores
        removeHighlight();

        // Destacar o elemento ao passar o mouse
        elementoClicado.classList.add("highlight");
    }
}

function removerDestaqueAoSairMouse() {
    if (selecaoAtivada) {
        // Remover destaque ao sair do elemento
        removeHighlight();
    }
}

function selecionarTexto(event) {
    if (selecaoAtivada) {
        var targetElement = event.target;

        // Verifica se o elemento clicado é um link (<a>)
        if (targetElement.tagName.toLowerCase() === 'a') {
            
            var now = new Date().getTime();
            var delta = now - ultimoClique;

            if (delta > 300) { // Se o tempo entre cliques for menor que 300 milissegundos (ajuste conforme necessário)
                event.preventDefault(); // Impede o comportamento padrão do link
                var range = document.createRange();
                range.selectNode(targetElement);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
                responsiveVoice.speak(targetElement.textContent, 'Brazilian Portuguese Female', { rate: 1 });
                console.log(targetElement.textContent);
            }

            ultimoClique = now;
        } else {
            var range = document.createRange();
            range.selectNode(targetElement);
            window.getSelection().removeAllRanges(); // Limpa a seleção anterior
            window.getSelection().addRange(range); // Adiciona a nova seleção
            document.execCommand('copy'); // Copia o texto selecionado para a área de transferência
            window.getSelection().removeAllRanges(); // Limpa a seleção após a cópia (opcional)
            responsiveVoice.speak(targetElement.textContent, 'Brazilian Portuguese Female', { rate: 1 });
            console.log(targetElement.textContent);

            // Adicione aqui a lógica para falar o texto, no seu caso, o código do responsiveVoice.speak
        }
    }
}

function removeHighlight() {
    var elementosDestacados = document.querySelectorAll(".highlight");
    elementosDestacados.forEach(function (elementoDestacado) {
        elementoDestacado.classList.remove("highlight");
    });
}

function alternarSelecao() {
    selecaoAtivada = !selecaoAtivada;
    var botao = document.getElementById("myBtn");
    if (selecaoAtivada) {
        botao.textContent = "Desativar";
    } else {
        botao.innerHTML = '<img src="./img/icone_acessibilidade/descricao-de-audio.svg" style="width: 30px !important" alt="" srcset="">'; // Remove o texto do botão
    }
    var elementos = document.querySelectorAll("*");
    elementos.forEach(function (elemento) {
        if (selecaoAtivada) {
            elemento.addEventListener("mouseover", destacarAoPassarMouse);
            elemento.addEventListener("mouseout", removerDestaqueAoSairMouse);
            elemento.addEventListener("click", selecionarTexto);
        } else {
            elemento.removeEventListener("mouseover", destacarAoPassarMouse);
            elemento.removeEventListener("mouseout", removerDestaqueAoSairMouse);
            elemento.removeEventListener("click", selecionarTexto);
        }
    });
}

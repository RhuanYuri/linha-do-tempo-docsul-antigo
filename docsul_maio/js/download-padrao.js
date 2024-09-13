ids = [
    "questao1",
    "resposta1",
    "questao2",
    "resposta2",
    "questao3",
    "resposta3",
    "questao4",
    "ref4",
    "letra4",
    "cont4",
    "resposta4",
    "questao5",
    "ref5",
    "letraA5",
    "cont5A",
    "resposta5A",
    "letraB5",
    "cont5B",
    "resposta5B",
    "letraA5",
    "cont5C",
    "img5C",
    "ref5C",
    "texto5C1",
    "texto5C2",
    "ref5C2",
    "cont5C2",
    "resposta5C"
]

























function salvar_pdf(){
    tela_impressao = window.open('about:blank');
    string = document.getElementById("corpo").innerHTML
    tela_impressao.document.write(string)
    tela_impressao.window.print();
    tela_impressao.window.close();
}




function downloadTextPadrao(){
    /*
    var conteudo = document.getElementById('questao001').innerHTML,
    tela_impressao = window.open('about:blank');
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
    */
    var c = []
    tela_impressao = window.open('about:blank');
    tela_impressao.window.print();
    var string
    var lista = []
    var texto = ''
    var baixo = 10
    const lado = 10
    string =  '<div><h2>ATIVIDADE SOBRE O TEXTO: A FAMÍLIA COMO FORMA DE RESISTÊNCIA: JUSTINO ALBERTO LIMA, AMANCIA PEREIRA DE MIRANDA, LUIZ E IGNEZ DA CUNHA RIBEIRO</h2></div>'
    tela_impressao.document.write(string)
    tela_impressao.document.write('<br>')

    
    
    
    for(var i = 0; i < ids.length; i++ ){
        try{
            if ('questao' == ids[i].slice(0, 7)){
                string = document.getElementById(ids[i]).innerHTML
                

            }else{
                string = document.getElementById(ids[i])
                string = "R -> " + string.value
                
            }
        }catch (e){
            string = (i+1) + 'ª - R-> não transcrito'
        }
        tela_impressao.document.write('<p style="text-aling: left; font-size=11px;">'+string+'</p>')
        tela_impressao.document.write('<br>')
    }

    string = document.getElementById("referencia").innerHTML
    tela_impressao.document.write(string)
    tela_impressao.document.write('<br>')
    tela_impressao.window.print();
    tela_impressao.window.close();


}


texto = [
    'instrumento de escriptura de ven', //6
    'da de escravo ou como em direito milhor nome tenha virem', //7
    'que no anno de Nascimento de Nosso Senhor Jesus Christo de mil', //8
    'oitocentos setenta e sete, aos trinta dias do mez de Maio do dito', //9
    'anno, neta cidade e Comarca da Carolina, da província do Mara', //10
    'nhão, em meu escriptorio forão presentes partes justas e contrata',//11
    'das a saber',//12
    'te nesta cidade, ambos do primeiro distrito e de mim reconhe',//15
    'cidos do que dou fé',//16
    'um escravo de nome Francisco, cabra',//19
    'com idade hoje de trinta e quatro annos, solteiro, vaqueiro',//20
    'natural desta Provincia',//21
    'Joaquim Antonio Nogueira, Collector das rendas geraes',//24
    'desta Cidade - A requerimento verbal do Capitão João',//25
    'Baptista Mascarenhas, certifico que revendo o livro de ma',//26
    'do livro, verifiquei achar-se matiulado sob os números',//28
    'quartorze da matricula e trez da relação apresentada em',//29
    'dezenove de Junho de mil oitocentos setenta e dois, perten',//30
    'de, n aquelle tempo, solteiro, filho de Maria, vaqueiro',//32



    'e sete – O Collector Joaquim Antonio Nogueira – Estava',//36
    'se acha quite do impos',//46
    'to da taxa annual, como do conhecimento',//47
    'Recebido do Capitão João Baptista Mascarenhas',//51
    'Em trinta de Maio de mil oitocentos setenta e',//55
    'Disse ainda, que pelo',//56
    'prezente instrumento vende, como de facto vendido tem o',//57
    'escravo acima referido à Dona Juliana Moreira Perei',//58
    'ra, pela quantia de oitocentos mil reis moeda corrente',//59
    'que neste acto recebeu, pelo que dá a compradora plena e',//60
    'geral quitação de paga, e lhe transfere toda a posse, jus e do',//61
    'minio que no mesmo escravo tinha, para que o possa',//62
    'dispor como seu que desde já fica sendo, pois ao assigna',//63
    'rem este contracto fica logo amparada dele: assim',//64
    'sempre bôa, de paz, firme',//66
    'Dona Juliana Moreira Pereira foi dito',//68
    'que aceita a presente escriptura, sempre, digo, escriptura',//69
    'nos termos expressados; e me apresentou o conhecimen',//70



    'com o da taxa annual, ficão também archivados no meo',//75
    'cartorio, e bem assim uma estampilha do valor de oito cen',//76
    'tos reis, proporcional ao mesmo contracto que vai no',//77
    'fim deste instrumento devidamente inutillizado Assim',//78
    'a disporão, ouvirão ler e assigna o vendedor fazendo à',//79
    'por declarar não saber escrever',//80
    'com as testemunhas a este',//81
    'acto presente',//82
    'que também são reconhecidos',//83
    'que o escrevy por me ser pedido'//85
]

ids = ['line6',
    'line7',
    'line8',
    'line9',
    'line10',
    'line11',
    'line12',
    'line15',
    'line16',
    'line19',
    'line20',
    'line21',
    'line24',
    'line25',
    'line26',
    'line28',
    'line29',
    'line30',
    'line32',
    'line36',
    'line46',
    'line47',
    'line51',
    'line55',
    'line56',
    'line57',
    'line58',
    'line59',
    'line60',
    'line61',
    'line62',
    'line63',
    'line64',
    'line66',
    'line68',
    'line69',
    'line70',
    'line75',
    'line76',
    'line77',
    'line78',
    'line79',
    'line80',
    'line81',
    'line82',
    'line83',
    'line85']

re = ['re6',
    're7',
    're8',
    're9',
    're10',
    're11',
    're12',
    're15',
    're16',
    're19',
    're20',
    're21',
    're24',
    're25',
    're26',
    're28',
    're29',
    're30',
    're32',
    're36',
    're46',
    're47',
    're51',
    're55',
    're56',
    're57',
    're58',
    're59',
    're60',
    're61',
    're62',
    're63',
    're64',
    're66',
    're68',
    're69',
    're70',
    're75',
    're76',
    're77',
    're78',
    're79',
    're80',
    're81',
    're82',
    're83',
    're85']


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



function analisarTexto(){
    var string 
    for(var i = 0; i < texto.length; i++ ){
        string = document.getElementById(ids[i])
        reDiv = document.getElementById(re[i])        
        try {
            if (string.value.replace(/^\s+|\s+$/g, '') === texto[i]){
                reDiv.innerHTML = '<i style="background-color: rgb(5, 218, 33);" class="gg-check"></i>'
            }else{
                reDiv.innerHTML = '<i style="background-color: red;" class="bi bi-x"></i>'
    
            }
         }
         catch (e) {
            reDiv.innerHTML = '<i style="background-color: red;" class="bi bi-x"></i>'
         }
    }

}
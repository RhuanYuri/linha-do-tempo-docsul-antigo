ids = [
    'download01',
    'download02',
    'download03',
    'download04',
    'download05',
    'download06',
    'download012',
    'download13',
    'download14',
    'download016',
    'download17',
    'download18',
    'download19',
    'download021',
    'download22',
    'download23',
    'download27',
    'download31',
    'download032',
    'download33'
]

var valores = ["download1",
    "download2",
    "download3",
    "download4",
    "download5",
    "download6",
    "download06",
    "download7",
    "download8",
    "download9",
    "download10",
    "download11",
    "download012",
    "download12",
    "download13",
    "download14",
    "download15",
    "download016",
    "download16",
    "download17",
    "download18",
    "download019",
    "download19",
    "download20",
    "download021",
    "download21",
    "download22",
    "download23",
    "download24",
    "download25",
    "download26",
    "download27",
    "download28",
    "download29",
    "download30",
    "download31",
    "download032",
    "download32",
    "download33",
    "download34",
    "download35",
    "download36",
    "download37",
    "download38",
    "download39",
    "download40",
    "download41",
    "download42",
    "download43",
    "download44",
    "download45",
    "download46",
    "download046",
    "download47",
    "download047",
    "download48",
    "download49",
    "download50",
    "download051",
    "download51",
    "download52",
    "download53",
    "download54",
    "download055",
    "download55",
    "download56",
    "download57",
    "download58",
    "download59",
    "download060",
    "download60",
    "download061",
    "download61",
    "download62",
    "download63",
    "download64",
    "download65",
    "download066",
    "download66",
    "download67",
    "download068",
    "download68",
    "download69",
    "download070",
    "download70",
    "download71",
    "download72",
    "download73",
    "download74",
    "download75",
    "download76",
    "download77",
    "download78",
    "download79",
    "download079",
    "download80",
    "download080",
    "download800",
    "download081",
    "download81",
    "download82",
    "download082",
    "download83",
    "download083",
    "download84",
    "download85",
    "download86",
    "download87",
    "download88",
    "download89"]
function downloadText(){
    /*
    var conteudo = document.getElementById('questao001').innerHTML,
    tela_impressao = window.open('about:blank');
    tela_impressao.document.write(conteudo);
    tela_impressao.window.print();
    tela_impressao.window.close();
    */
    var c = []
    tela_impressao = window.open('about:blank');
    var string
    var lista = []
    var texto = ''
    var baixo = 10
    const lado = 10
    string =  '<div><h2>Texto transcrito do escravizado Francisco</h2></div>'
    tela_impressao.document.write(string)
    tela_impressao.document.write('<br>')
    for(var i = 0; i < valores.length; i++ ){
        try{
            if (valores[i][8] == "0"){
                string = document.getElementById(valores[i])
                string = "R -> " + string.value

            }else{
                string = document.getElementById(valores[i]).innerHTML
                
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


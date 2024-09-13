export default function AnalizarResposta(props){
    let respostasCorretas = ['A', 'B', 'A']
    for(var i = 0; i < props.resposta.lenght; i++){
        if (props.resposta[i] == respostasCorretas[i]){
            props.estilo.estiloTd  = {
                display: "table-cell",
                verticalAlign: "inherit",
                border: "6px solid mediumturquoise"
            }
        }else{
            props.estilo.estiloTd  = {
                display: "table-cell",
                verticalAlign: "inherit",
                border: "6px solid red"
            }
        }
    }
    return props.estilo.estiloTd

}
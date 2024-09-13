import Style from "./css/css.module.css"
import AnalizarResposta from "./js/AnalizarRespostas"
export default function ex1(){
    let estilo = {
        estiloClass: Style.estilo,
        estiloTr: Style.tr,
        estiloTd: Style.td
    }
    let lista = {
        estilo: estilo,
        resposta: ['A', 'B', 'C']
    } 
    return (
        <div className={estilo.estiloClass}>
            <div className={Style.chamadaExercicio}>Questão 1</div>
                <p></p>
                <p style={{textAlign: "justify"}}><strong>Questão 1 -</strong> Um veículo trafega em uma rodovia com velocidade média de 80 km/h. Sabendo que a viagem teve uma duração de 1 hora e 30 minutos (1,5 h), qual foi a distância percorrida pelo veículo?</p>
                <table>
                    <tbody>
                        <tr className={estilo.estiloTr}>
                            <td valign="top" width="70" className={estilo.estiloTd}>
                                <label for="obj_3059_0">A)</label> 
                                <input type="radio" id="letraA1" name="fav_language" value="A"/>
                            </td>
                        </tr>
                        <tr className={estilo.estiloTr}>
                            <td valign="top" width="70" className={estilo.estiloTd}>
                                <label for="obj_3059_0">B)</label> 
                                <input type="radio" id="letraB1" name="fav_language" value="B" />
                            </td>
                            <td className={estilo.estiloTd}>
                            <label for="obj_3059_0">
                                <p style={{textAlign: "justify"}}>vinculação com a filosofia como saber unificado.</p>
                            </label> 
                            </td>
                        </tr>
                        <tr className={estilo.estiloTr}>
                            <td valign="top" width="70" className={estilo.estiloTd}>
                                <label for="obj_3059_0">C)</label> 
                                <input type="radio" id="letraC1" name="fav_language" value="C"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            <div style={{textAlign: "right"}}>
                <button className={Style.button} onClick={() => <AnalizarResposta resposta />}>Verifica Respostas</button>
            </div>
        </div>
    )
}



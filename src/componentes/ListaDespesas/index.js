import Despesa from "../Despesa"
import "./ListaDespesas.css"

const ListaDespesas = (props) => {
    return (
        (props.despesas.length > 0) ? <section className='listaDespesas' >
            <h3 >{props.nome}</h3>
            <div className='despesas'>
                {props.despesas.map(despesa => <Despesa key={despesa.key} nome={despesa.nome} banco={despesa.banco}  valorDespesa={despesa.valorDespesa}/> )}
            </div>
        </section> 
        : ''
    )
}

export default ListaDespesas
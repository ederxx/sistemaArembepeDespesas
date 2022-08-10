import  './DataVencimento.css'


const DataVencimento = (props) => {


    return (
        <div className='data-vencimento'>
            <label>{props.label}</label>
            <input id="Vencimento" name="Vencimento"  type="date" onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} />
             
            </div>
        )
    }
    
    export default DataVencimento
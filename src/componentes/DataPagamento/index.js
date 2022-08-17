
const DataPagamento = (props) => {
    
return (
    <div className='data-pagamento'>
        <label>{props.label}</label>
        <input id="Pagamento" name="Pagamento" type="date" onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}  />
         
        </div>
    )
}

export default DataPagamento
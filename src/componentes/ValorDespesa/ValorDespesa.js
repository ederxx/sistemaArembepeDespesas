import "../ValorDespesa/ValorDespesa.css"

const ValorDespesa = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value) }

    return (
        <div className="valor-despesa">
            <label>
                {props.label}
            </label>
            <input value={props.valor} type="number" onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
            </div>
        
        
        )
        
        
        }
        
        export default ValorDespesa;
        


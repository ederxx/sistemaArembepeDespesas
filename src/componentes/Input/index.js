import "../Input/Input.css"

const Input = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value) }
/* <label>{props.label}</label> - passa como parametro do componente para usar o label diferente de acorodo com paramentro recebido */
    return (
        <div className="campo-texto">
            <label>
                {props.label} 
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
            </div>
        
        
        )
        
        
        }
        
        export default Input;
        


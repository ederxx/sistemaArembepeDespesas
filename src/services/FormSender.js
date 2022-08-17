import Despesa from "../componentes/Despesa/Despesa.js"

function FormSender() {
   const[despesa, setDespesa] = useState('')
   Despesa.map()
   return <div className={'FormSender'}>
        <form 
        value={despesas}>

        </form>

    </div>
}
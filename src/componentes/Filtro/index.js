
import "../Filtro/Filtro.css"

const Filtro = () => {
  
    return (
        <div>
            <label className="filtrar-tabela">Filtro:</label>
            <input type="text" name="filtro" id="filtrar-tabela" placeholder="Digite o nome da despesa" />
        </div>
    )
}

export default Filtro;   
import "../Despesa/Despesa.css"

const Despesa = ({ nome, banco, vencimento, pagamento, valordespesa }) => {

  
  return (
        <div className="lista-despesas">
             <section className="lista-despesas">
                <thead>
     
            <th className='despesas'><td className='info-nome'>{nome}</td>
            <td className="info-banco">{banco}</td>
            <td className="info-vencimento">{vencimento}</td>
            <td className="info-pagamento"> {pagamento}</td>
            <td className="info-valor">{valordespesa}</td>
            </th>
                            
          </thead>
          </section>  
             </div>
             
    )
}

export default Despesa


import "../Despesa/Despesa.css"

const Despesa = ({ nome, banco, vencimento, pagamento, valor }) => {
    return (
        <div className="lista-despesas">
             <section className="lista-despesas">
              <table>
                <thead>
     
 <th ><td>{nome}</td>
            <td>{banco}</td>
          <td>{vencimento}</td>
         <td> {pagamento}</td>
          <td>{valor}</td>
          </th>
                            
          </thead>
          </table>
          </section>  
             </div>
             
    )
}

export default Despesa


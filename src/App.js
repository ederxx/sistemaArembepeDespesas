import './App.css';
import Header from "./componentes/Header/index.js"
import Form from "./componentes/Form/index.js"
import { useState } from 'react';
import Despesa from "./componentes/Despesa"

function App() {

  const bancos = [
    {
      nome: 'Banco do Brasil'
    },
    {
      nome: 'Banco Bradesco'
    }
  ]

  const [despesas, setDespesas] = useState([])
  const aNovaDespesaAdicionada = (despesa) => {
    debugger
    console.log(despesa)
    setDespesas([...despesas, despesa])
  }
  return (


    <div className="App">
      <Header>Arembepe Sistema</Header>
      <Form bancos={bancos.map(banco => banco.nome)} aDespesaCadastrada={despesa => aNovaDespesaAdicionada(despesa)} />
      <section className='cabecalho-despesas'> 
      <ul className="cabecalho">
        <td>Nome</td>
      <td>Banco</td>
      <td>Dt Vencimento</td>
      <td>Dt Pagamento</td>
      <td>Valor</td>
        </ul> 
        {despesas.map(despesa => <Despesa
        key={despesa.nome} 
        nome={despesa.nome} 
        banco={despesa.banco} 
        vencimento={despesa.vencimento} 
        pagamento={despesa.pagamento} 
        valor={despesa.valorDespesa} 
        despesas={despesas.filter(despesa => despesa.despesa ===despesa.nome)}


        />)}   

        </section>
      
    </div>
  );
}

export default App;

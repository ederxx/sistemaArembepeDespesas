import './App.css';
import Header from "./componentes/Header/index.js"
import Form from "./componentes/Form/index.js"
import { useEffect, useState } from 'react';
import Despesa from "./componentes/Despesa"
import {initializeApp} from 'firebase/app'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Filtro from './componentes/Filtro';



const firebaseApp = initializeApp( {
  apiKey: "AIzaSyBmxqLALo0TdfitXQs7hRzpgJwKOzXnQNs",
  authDomain: "arembepe-despesas.firebaseapp.com",
  projectId: "arembepe-despesas",
 
});


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

 const  db = getFirestore(firebaseApp)
  const useCollectionRef= collection(db, "despesas");
useEffect(() => {
  const getUsers = async () => {
    const data = await getDocs(useCollectionRef)
     setDespesas(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
  }
  getUsers();

}, [])
const aNovaDespesaAdicionada = (despesa) => {
  debugger
  console.log(despesa)
  
    setDespesas([...despesas, despesa])

  }

  return (


    <div className="App">
      <Header>Arembepe Sistema</Header>
      <Form bancos={bancos.map(banco => banco.nome)} aDespesaCadastrada={despesa => aNovaDespesaAdicionada(despesa)} />
      <Filtro></Filtro>
      <section className='cabecalho-despesas'> 
      <ul className="cabecalho">
  
      <td className='info-nome'>Nome</td>
      <td>Banco</td>
      <td>Dt Vencimento</td>
      <td>Dt Pagamento</td>
      <td>Valor</td>
  
        </ul> 
        <tr className="despesas">
        <ul className="cabecalho">
        {despesas.map(
          despesa =>
          <Despesa
        key={despesa.nome} 
        nome={despesa.nome} 
        banco={despesa.banco} 
        vencimento={despesa.vencimento} 
        pagamento={despesa.pagamento} 
        valordespesa={despesa.valordespesa} 
        despesas={despesas.filter(despesa => despesa.despesa ===despesa.nome)}


        />)}   
        
  </ul> 
  </tr>
        </section>
      
    </div>
  );
}

export default App;

import { useState } from "react"
import Input from "../Input"
import ValorDespesa from "../ValorDespesa/ValorDespesa"
import Botao from "../Botao"
import './Formulario.css'
import ListaSuspensa from "../ListaSuspensa"
import DataPagamento from "../DataPagamento"
import DataVencimento from "../DataVencimento"
import { addDoc, collection } from "firebase/firestore"
import { getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'




const Form = (props) => {
    const [nome, setNome] = useState();
    const [banco, setBanco] = useState();
    const [pagamento, setPagamento] = useState();
    const [vencimento, setVencimento] = useState();
    const [valordespesa, setValordespesa] = useState();


    const firebaseApp = initializeApp( {
        apiKey: "AIzaSyBmxqLALo0TdfitXQs7hRzpgJwKOzXnQNs",
        authDomain: "arembepe-despesas.firebaseapp.com",
        projectId: "arembepe-despesas",
       
      });
    const  db = getFirestore(firebaseApp)
    const useCollectionRef= collection(db, "despesas");
        
       
  async function aoSalvar (){

        const despesa= addDoc(useCollectionRef,
         {
            nome,
            banco,
            pagamento,
            vencimento,
            valordespesa
        })
        setNome('')
        setBanco('')
        setPagamento('')
        setVencimento('')
        setValordespesa('')
        console.log(despesa)
    }
   

   
return(
    <section className="formulario">
    <form onSubmit={aoSalvar}>
        <h2>Relatorio De Despesas</h2>
        <Input
            obrigatorio={true}
            label="Nome"
            placeholder="Digite seu nome" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
        />
        <DataPagamento
            obrigatorio={true}
            label="Data do Pagamento"
            valor={pagamento}
            aoAlterado={valor => setPagamento(valor)}
        />
        <DataVencimento
            obrigatorio={true}
            label="Data do Vencimento"
            valor={vencimento}
            aoAlterado={valor => setVencimento(valor)}
        />
      
<ListaSuspensa   
obrigatorio={true}
label="Banco"
valor={banco}
itens={props.bancos}
aoAlterado={valor => setBanco(valor)} />

<ValorDespesa 
obrigatorio={true}
label="Valor da Despesa"
valor={valordespesa}
aoAlterado={valor => setValordespesa(valor)} />

<Botao >
                    Adicionar Despesa
                </Botao>

                       
        </form>
</section>


)



}

export default Form
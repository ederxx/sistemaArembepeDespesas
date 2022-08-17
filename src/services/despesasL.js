import {db} from '../firebase'

const MessagingService = {
    async getMessages () {
       return db
       .collection("despesas")
       .get()
       .then(despesas => {
        let _despesas = []
        despesas.forEach(despesa => {
            _despesas.push(despesa.data())
            console.log(despesa.data())
        }) 
        return _despesas
    })
    }
}

export default MessagingService
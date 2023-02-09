import { model, Schema } from 'mongoose'

const Sac = new Schema({
    nome: String,
    email: String,
    mensagem: String,
      telefone: telefone,
        cpf: cpf,
        assunto: assunto,
        numeropedido:numeropedido
})

export default new model('Sac', Sac)

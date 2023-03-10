import Emailsclientes from "../schemas/Emailsclientes";

class Emailclientecontroller {
    async post(req, res) {
        const { nome, telefone } = req.body
        const Emaillist = await Emailsclientes.create({
            nome: nome,
            telefone: telefone
        })
        return res.json(Emaillist)
    }
    async update(req, res) {
        const { _id } = req.params
        const { nome, telefone } = req.body
        const Emaillist = await Emailsclientes.updateOne({ _id: _id }, {
            nome: nome,
            telefone: telefone
        })
        return res.json(Emaillist)
    }
    async delete(req, res) {
        const { _id } = req.params
        const Emaillist = await Emailsclientes.deleteOne({ _id: _id })

        return res.json(Emaillist)
    }
    async get(req, res) {
        const Emaillist = await Emailsclientes.find()
        return res.json(Emaillist)
    }
}
export default new Emailclientecontroller();

import Perguntas from '../schemas/Perguntas'

class Perguntascontroller {
    async post(req, res) {
        const { sumary, resposta } = req.body
        const perguntaslist = await Perguntas.create({
            sumary,
            resposta
        })
        return res.json(perguntaslist)
    }
    async put(req, res) {
        const { sumary, resposta } = req.body
        const { _id } = req.params

        const perguntaslist = await Perguntas.updateOne({ _id: _id }, {
            sumary,
            resposta
        })
        return res.json(perguntaslist)
    }
    async get(req, res) {
        const perguntaslist = await Perguntas.find()
        return res.json(perguntaslist)
    }


}

export default new Perguntascontroller();
import Categorias from '../schemas/Categorias'

class Categoriascontroller {
    async post(req, res) {
        const { categoria,sub1,sub2,sub3,sub4 } = req.body
        const categorialist = await Categorias.create({
            categoria: categoria,
            sub1:sub1,
            sub2:sub2,
            sub3:sub3,
            sub4:sub4,
        })

        return res.json(categorialist)
    }

    async get(req, res) {
        const categorialist = await Categorias.find({})

        return res.json(categorialist)
    }
        async delete(req, res) {
            const {_id} = req.params
        const categorialist = await Categorias.deleteOne({_id:_id})

        return res.json(categorialist)
    }
}

export default new Categoriascontroller();

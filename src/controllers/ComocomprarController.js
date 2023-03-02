import Comocomprar from '../schemas/Editacomocomprar'


class ComocomprarController {
    async post(req, res) {
        const { urlbanner,urlbannermobile } = req.body
        const banner = await Comocomprar.create({
            urlbanner: urlbanner,
            urlbannermobile:urlbannermobile
        })
        return res.json(banner)
    }
    async update(req, res) {
        const { _id } = req.params
        const { urlbanner,urlbannermobile } = req.body
        const banner = await Comocomprar.updateOne({ _id }, {
            urlbanner: urlbanner,
            urlbannermobile:urlbannermobile
        })
        return res.json(banner)
    }
    async delete(req, res) {
        const { _id } = req.params
        const banner = await Comocomprar.deleteOne({ _id })
        return res.json(banner)
    }
    async get(req, res) {
        const banner = await Comocomprar.find()
        return res.json(banner)
    }

}

export default new ComocomprarController;
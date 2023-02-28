import EditarSobreSchemas from "../schemas/EditarSobre";

class EditarSobre {
  async post(req, res) {
    const { sobre } = req.body;
    const Edicaolist = await EditarSobreSchemas.create({ sobre: sobre });
    return res.json(Edicaolist);
  }
  async update(req, res) {
    const { _id: _id } = req.params;
    const { sobre } = req.body;
    const Edicaolist = await EditarSobreSchemas.updateOne(
      { _id: _id },
      { sobre: sobre }
    );
    return res.json(Edicaolist);
  }
  async get(req, res) {
    const Edicaolist = await EditarSobreSchemas.find();
    return res.json(Edicaolist);
  }
}
export default new EditarSobre();

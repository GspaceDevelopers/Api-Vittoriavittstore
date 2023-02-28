import EditarPoliticaSchemas from "../schemas/Politicadeprivacidade";

class EditarPolitica {
  async post(req, res) {
    const { politica } = req.body;
    const Edicaolist = await EditarPoliticaSchemas.create({
      politica: politica,
    });
    return res.json(Edicaolist);
  }
  async update(req, res) {
    const { _id: _id } = req.params;
    const { politica } = req.body;
    const Edicaolist = await EditarPoliticaSchemas.updateOne(
      { _id: _id },
      { politica: politica }
    );
    return res.json(Edicaolist);
  }
  async get(req, res) {
    const Edicaolist = await EditarPoliticaSchemas.find();
    return res.json(Edicaolist);
  }
}
export default new EditarPolitica();

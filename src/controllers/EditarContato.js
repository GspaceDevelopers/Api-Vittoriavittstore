import EditarContatoSchemas from "../schemas/EditarContato";

class EditarContato {
  async post(req, res) {
    const { texto, mapa, numero } = req.body;
    const Edicaolist = await EditarContatoSchemas.create({
      texto: texto,
      mapa: mapa,
      numero: numero,
    });
    return res.json(Edicaolist);
  }
  async update(req, res) {
    const { _id: _id } = req.params;
    const { texto, mapa, numero } = req.body;
    const Edicaolist = await EditarContatoSchemas.updateOne(
      { _id: _id },
      { texto: texto, mapa: mapa, numero: numero }
    );
    return res.json(Edicaolist);
  }
  async get(req, res) {
    const Edicaolist = await EditarContatoSchemas.find();
    return res.json(Edicaolist);
  }
}
export default new EditarContato();

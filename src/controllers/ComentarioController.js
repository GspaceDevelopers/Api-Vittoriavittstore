import Comentarioclientes from "../schemas/Comentario";

class ComentarioController {
  async index(req, res) {
    const comentlist = await Comentarioclientes.find();
    return res.json(comentlist);
  }
  async post(req, res) {
    const {
      comentario,
      idproduto,
      user,
      data = new Date(),
      printcomentario,
      star,
      liberar,
    } = req.body;
    const comentlist = await Comentarioclientes.create({
      user: user,
      comentario: comentario,
      printcomentario: printcomentario,
      idproduto: idproduto,
      data: data,
      star: star,
      liberar: liberar,
    });
    return res.json(comentlist);
  }

  async del(req, res) {
    const { _id } = req.params;
    const del = await Comentarioclientes.deleteOne({ _id: _id });

    return res.json(del);
  }
  async index2(req, res) {
    const { idproduto } = req.query;
    const comentlist = await Comentarioclientes.find({
      idproduto: idproduto,
    });
    return res.json(comentlist);
  }

  async update(req, res) {
    const { _id } = req.params;
    const {
      comentario,
      user,
      data = new Date(),
      printcomentario,
      idproduto,
      star,
      liberar,
    } = req.body;
    const comentlist = await Comentarioclientes.updateOne(
      { _id: _id },
      {
        user: user,
        idproduto: idproduto,
        comentario: comentario,
        printcomentario: printcomentario,
        data: data,
        star: star,
        liberar: liberar,
      }
    );
    return res.json(comentlist);
  }
}

export default new ComentarioController();

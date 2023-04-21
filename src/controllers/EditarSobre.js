import EditarSobreSchemas from "../schemas/EditarSobre";

class EditarSobre {
  async post(req, res) {
    const { sobre , banners : {banner1, banner2, banner3, banner4}} = req.body;
    const Edicaolist = await EditarSobreSchemas.create({ sobre: sobre , 
      banners: {
        banner1: banner1,
        banner2: banner2,
        banner3: banner3,
        banner4: banner4
      }});
    console.log(req.body);
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

import { Schema, model } from "mongoose";

const EditarContato = new Schema({
  numero: String,
  texto: String,
  mapa: String,
});

export default model("EditarContato", EditarContato);

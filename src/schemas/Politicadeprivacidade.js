import { Schema, model } from "mongoose";

const EditarPoliticaSchemas = new Schema({
  politica: String,
});

export default model("EditarPoliticaSchemas", EditarPoliticaSchemas);

import { Schema, model } from "mongoose";

const EditarSobre = new Schema({
  sobre: String,
});

export default model("EditarSobre", EditarSobre);

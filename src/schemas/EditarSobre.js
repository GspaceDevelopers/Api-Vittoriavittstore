import { Schema, model } from "mongoose";

const EditarSobre = new Schema({
  sobre: String,
  banners: {
    banner1: String,
    banner2: String,
    banner3: String,
    banner4: String
  }
});

export default model("EditarSobre", EditarSobre);

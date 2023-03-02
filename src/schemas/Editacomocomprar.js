import { model, Schema } from "mongoose";

const Comocomprar = new Schema({
    urlbanner: String
})

export default model(Comocomprar)
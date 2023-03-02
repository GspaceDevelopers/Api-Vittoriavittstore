import { model, Schema } from "mongoose";

const Comocomprar = new Schema({
    urlbanner: String,
    urlbannermobile: String,
})

export default model(Comocomprar)
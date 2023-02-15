import { model, Schema } from 'mongoose'

const Categorias = new Schema({
    categoria: String,
    sub1:String,
    sub2:String,
    sub3:String,
    sub4:String,
})
export default new model('Categorias', Categorias)

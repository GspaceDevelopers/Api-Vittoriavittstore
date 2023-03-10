import { Schema, model } from 'mongoose'


const Edicaohome = new Schema({
    componentetexto1: String,
    parcelas:String,
    bannerpaginaprod:String,
    bannermodalpromocao: String,
    bannercentralhome:String,
    aparecercampobrinde:String,
    url1:String,
     url2:String,
     url3:String,
     url4:String,
     url5:String,
     url6:String,
    componentelogos: {
        logo1: String,
        logo2: String,
        logo3: String,
        logo4: String,
        logo5: String,
        logo6: String,
        logo7: String,
    },
    backgoundhome: {
        background1: String,
        background2: String,
        background3: String,
        backgroundmobile1: String,
        backgroundmobile2: String,
        backgroundmobile3: String,
    },
    componentetexto2: String,
    banners: {
        banner1: String,
        banner2: String,
        banner3: String,
        banner4: String,
        banner5: String,
        banner6: String,
        banner7: String,
    },
    linkredes:{
        link1:String,
        link2:String,
        link3:String,
    },
    telefoneloja:String,
    emailloja:String,
    cnpjloja:String,
    categoriabtnhome1:{
    img1:String,
    title1:String,
    },
    categoriabtnhome2:{
    img2:String,
    title2:String,
    },
    categoriabtnhome3:{
    img3:String,
    title3:String,
    },
    categoriabtnhome4:{
    img4:String,
    title4:String,
    },
    categoriabtnhome5:{
    img5:String,
    title5:String,
    },
    categoriabtnhome6:{
    img6:String,
    title6:String,
    },
    icon1:String,
    icon2:String,
    icon3:String

})

export default model("Edicaohome", Edicaohome);

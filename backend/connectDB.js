var mongoose = require("mongoose")
const url = 'mongodb+srv://manav272:puneet123456@cluster0-mji43.mongodb.net/test?retryWrites=true&w=majority'

const connectDb = async () =>{
    await mongoose.connect(url,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log("db connected .. ")
}

 module.exports = connectDb;
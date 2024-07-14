const mongoose = require('mongoose');
const url = 'mongodb+srv://123:456@cluster0.wued4s8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connectDB=async()=>{
try{
    const connect = await mongoose.connect(url);
    console.log(`Connected to Mongodb database ${connect.connection.host}`)
}catch(error)
{
    console.log(`Error in Mongodb ${error}`);
}
}
module.exports = connectDB;
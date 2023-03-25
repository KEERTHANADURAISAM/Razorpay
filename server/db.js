import mongoose from "mongoose";

export function dataBaseConnection(){
    const params={
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try{
        mongoose.connect(process.env.MONGO_URL,params);
        console.log("mongo db is Connected")
    }
catch(error){
console.log("mongoose is not Connected",error);
}
} 
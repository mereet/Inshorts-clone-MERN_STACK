import mongoose from 'mongoose';
const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.mowld0x.mongodb.net/CLONEINSHORTS?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
console.log(`database connected successfully`);    
    }catch(error){
        console.log(`error while connecting to database`,error);
    }
}
export default Connection;
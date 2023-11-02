import mongoose from 'mongoose';

const Connection = async (username, password) => {
  
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.n7pg4jh.mongodb.net/?retryWrites=true&w=majority`
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;


// useNewUrlParser:true,
// useCreateIndex:true,
// useFindAndModify:true,
// useUnifiedTopology: true
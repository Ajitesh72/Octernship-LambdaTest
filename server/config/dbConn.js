const mongoose = require('mongoose');


const connectDB=()=>{

    mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('connected with db'))
        .catch((error) => {
            console.log(error)
        })
}

module.exports = connectDB;

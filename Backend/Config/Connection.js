var mongoose=require('mongoose')
const connectDb=()=>{
    mongoose.connect(process.env.DB_URL)
    .then((con) => {
        console.log(`DB Connected: ${con.connection.host}`);
    })
    .catch((err) => {
        console.error(`DB Connection Error: ${err.message}`);
        process.exit(1);
    });
    
}
module.exports= connectDb

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        let dbUrl = process.env.MONGO_URI;
  
        const conn = await mongoose.connect(dbUrl);
  
        console.log(
            `MongoDB connected: ${conn.connection.host}`
        );
    } catch (err) {
        console.log(err);
    }
};

module.exports = { connectDB }

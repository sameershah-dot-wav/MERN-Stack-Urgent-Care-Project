//database configuration for mongoose

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Sameer123:tUnZoO6KIlkDo7jU@cluster0.eydz3xb.mongodb.net/?retryWrites=true&w=majority",
    
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;



const mongoose = require("mongoose");
// remove < > and replace <password> with real password  
const dbConnect = "mongodb+srv://commentsProjectUser:1amazon1@cluster0-4w1oj.mongodb.net/test?retryWrites=true&w=majority"

const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
};

// mongoose method
mongoose.connect(dbConnect,options, (error) => {
    
    if (error) {
        console.log("Something happended conncecting to the database!  cannot connect. ", error);
    } else {
        console.log("Successfully connected to MongoDB!");
    }

});
// connect is to conncect, connection is the road
let db = mongoose.connection;

// not sure what on does
db.on("error",console.error.bind(console, "MongoDB connction error: "));

mongoose.Promise = global.Promise;

// FINISHED CONNECTING TO MONGODB

// SCIMA are blueprints on how the data should be stored in the database
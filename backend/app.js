import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/routes.js";
// import User from "./models/userModel.js";
import cors from "cors";


const app = express();
var allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json()); //using middleware to access json data

//connecting to mongoDb database via mongoose and local server
mongoose.connect("mongodb://localhost:27017/", {
        dbName: "Assignment_08",
    })
    .then(() => {
        console.log("Database Connected on port 5500!");
        app.listen(5500, ()=> {
            console.log("SERVER IS RUNNING on port 5500 !!!")
        });
    })
    .catch((e) => console.log(e));

app.use('/user', userRouter);

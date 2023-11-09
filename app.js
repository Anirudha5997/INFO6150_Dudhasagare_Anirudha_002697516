import express from "express";
import mongoose from "mongoose";
import User from "./models/userModel.js";

const app = express();
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


//Create Users

app.post("/user/create", async (req, res) => {
    const{ fullName, email, password } = req.body; 
    
    try {
        const user = await User.create({
            fullName,
            email,
            password
        })
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json({message : error.message});
    }
})

//Update Users
app.put('/user/edit/:email', async (req, res) => {
    try {
        const {email} = req.params;
        const {fullName, password} = req.body;
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(password, salt)
        
        await User.findOne({email}).then(async (user)=>{
            if(user){
                user.fullName = fullName,
                user.password = password
                await user.save().then((p) => {
                return res.status(200).json({p})
                })
                .catch(err => { return res.status(404).json({message: err.message})})
            } else {
                return res.status(404).json({message: `Cant find any user`})
            }
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//deleting the users
app.delete("/user/delete", async (req, res) => {
    try{
        const {email} = req.body
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found in the database' });
        } res.json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
        }
})

//Get all user details
app.get("/user/getAll", async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
})
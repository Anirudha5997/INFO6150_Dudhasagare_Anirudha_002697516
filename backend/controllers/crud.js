import User from "../models/userModel.js";
import bcrypt from "bcrypt"

//create user
export const userCreate = async (req, res) => {
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

};

//update user
export const updateUser = async(req, res) => {
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
};

//getting one use
export const getUser = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found in the database' });
        } 

        // res.status(200).json(user);
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(404).json({
                success: false,
                message: 'incorrect password' });
        } res.status(200).json({ message: 'Correct password' });

    } catch (error) {
        res.status(500).json({ message: 'Error finding user' });
        }

};

//deleting the users
export const deleteUser = async (req, res) => {
    try{
        const {email} = req.body
        const user = await User.findOneAndDelete({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found in the database' });
        } res.json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
        }
};

//get all users
export const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message : error.message})
    }
};


import mongoose from "mongoose";
import bcrypt from "bcrypt";

let regExEmailId = /([\w\.]+)@northeastern.edu$/;
let regExFullName = /^[a-zA-Z ]+$/;
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Please Enter a valid Full Name"],
            validate: {
                validator: function(v){
                    return regExFullName.test(v);
                }, 
                message: props => `${props.value} is not a valid Full Name`
            }
        },

        email: {
            type: String,
            required: [true, "Please Enter a valid Northeaster Email ID"],
            unique: true,
            validate: {
                validator: function(v){
                    return regExEmailId.test(v);
                }, 
                message: props => `${props.value} is not a valid Email ID`
            }
        },

        password: {
            type: String,
            required: [true, "Please Enter a valid Password"],
            validate: {
                validator: function(v){
                    console.log(v);
                    return regExPassword.test(v);
                }, 
                message: `Must include atleast one uppercase, one lowercase, one number and one special character and 8 characters long`
            },
        },    
    },
    { 
        timestamps : true
    }
);


userSchema.pre('save', async function(next){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt)
    this.password = hash;
    next();
})

const User = mongoose.model("User", userSchema);
export default User;
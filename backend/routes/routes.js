import { Router } from "express";
import { deleteUser, getAllUsers, getUser, updateUser, userCreate } from "../controllers/crud.js";

const userRouter = Router();
//Create Users
userRouter.post("/create", userCreate);

//Update Users
userRouter.put('/edit/:email', updateUser);

//deleting the users
userRouter.delete("/delete", deleteUser);

//Get all user details
userRouter.get("/getAll", getAllUsers);

//Get single User
userRouter.post("/getOne", getUser);

export default userRouter;
import express from "express";
const userRouter = express.Router();
import * as userController from "../controllers/userController.js";
import bodyParser from "body-parser";
userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: false }));

userRouter.post("/register", userController.createUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/logout", userController.logoutUser);

export default userRouter;

import mongoose from "mongoose";
import UserModel from "./models/userModel.js";
import GamePlanModel from "./models/gamePlanModel.js";
import ActiveGameModel from "./models/activeGameModel.js";
import PlayerModel from "./models/playerModel.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

export { UserModel, GamePlanModel, ActiveGameModel, PlayerModel };

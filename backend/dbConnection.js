import mongoose from "mongoose";
import User from "./models/userModel.js";
import GamePlan from "./models/gamePlanModel.js";
import ActiveGame from "./models/activeGameModel.js";
import Player from "./models/playerModel.js";
import Marker from "./models/markerModel.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
});

export { User, GamePlan, ActiveGame, Player, Marker };

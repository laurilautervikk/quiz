import GamePlan from "./gamePlanModel.js";
import Player from "./playerModel.js";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ActiveGameSchema = new Schema({
  gamePlan: { type: GamePlan.schema },
  gameStartTime: { type: Date, required: true },
  gameEndTime: { type: Date, required: true },
  players: { type: [Player.schema] }, //array  of player ids?
});

const ActiveGame = mongoose.model("ActiveGame", ActiveGameSchema);

export default ActiveGame;

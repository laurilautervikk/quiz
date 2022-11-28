import GamePlanModel from "./gamePlanModel.js";
import PlayerModel from "./playerModel.js";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ActiveGameSchema = new Schema({
  gamePlan: { type: GamePlanModel.schema },
  gameStartTime: { type: Date, required: true },
  gameEndTime: { type: Date, required: true },
  players: { type: [PlayerModel.schema] },
});

const ActiveGameModel = mongoose.model("ActiveGameModel", ActiveGameSchema);

export default ActiveGameModel;

import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: { type: String, required: true },
  pointsTotal: { type: Number, required: true },
  markersFound: { type: Number, required: true },
});

const PlayerModel = mongoose.model("PlayerModel", PlayerSchema);

export default PlayerModel;

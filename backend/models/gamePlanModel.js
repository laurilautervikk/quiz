import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
});

const MarkerSchema = new Schema({
  title: { type: String, required: true },
  content: {
    position: {
      x: { type: Number },
      y: { type: Number },
    },
    qrcode: { type: String },
    quiz: {
      question: { type: String, required: true },
      answers: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: AnswerSchema,
        },
      ],
    },
  },
});

const GamePlanSchema = new Schema({
  gameTitle: { type: String, required: true },
  ownerId: { type: String, required: true },
  markers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: MarkerSchema,
    },
  ],
});

const GamePlanModel = mongoose.model("GamePlanModel", GamePlanSchema);

export default GamePlanModel;

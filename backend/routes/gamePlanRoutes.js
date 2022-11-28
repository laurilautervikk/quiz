import express from "express";
const gamePlanRouter = express.Router();
import * as gamePlanController from "../controllers/gamePlanController.js";
import bodyParser from "body-parser";
gamePlanRouter.use(bodyParser.json());
gamePlanRouter.use(bodyParser.urlencoded({ extended: false }));

//add a game
gamePlanRouter.post("/add", gamePlanController.createGame);

//list your games
gamePlanRouter.get("/list", gamePlanController.listGames);

//patch a game
gamePlanRouter.patch("/edit/:id", gamePlanController.editGame);

//delete a game
gamePlanRouter.delete("/delete/:id", gamePlanController.deleteGame);

export default gamePlanRouter;

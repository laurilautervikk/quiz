import express from "express";
const gamePlanRouter = express.Router();
import * as gamePlanController from "../controllers/gamePlanController.js";
import bodyParser from "body-parser";
gamePlanRouter.use(bodyParser.json());
gamePlanRouter.use(bodyParser.urlencoded({ extended: false }));

//add a game
gamePlanRouter.post("/create", gamePlanController.createGame);

gamePlanRouter.post("/create-marker", gamePlanController.createMarker);

//list your games
gamePlanRouter.get("/list", gamePlanController.listGames);

//patch a game
gamePlanRouter.patch("/update/:id", gamePlanController.updateGame);

//need to test if this can be upsert.
//The app will have just one save button for both create and edit
gamePlanRouter.patch("/update-marker/:id", gamePlanController.updateMarker);

//delete a game
gamePlanRouter.delete("/delete-marker/:id", gamePlanController.deleteMarker);

//delete a game
gamePlanRouter.delete("/delete/:id", gamePlanController.deleteGame);

export default gamePlanRouter;

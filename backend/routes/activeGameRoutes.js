import express from "express";
const activeGameRouter = express.Router();
import * as activeGameController from "../controllers/activeGameController.js";
import bodyParser from "body-parser";
activeGameRouter.use(bodyParser.json());
activeGameRouter.use(bodyParser.urlencoded({ extended: false }));

//create a game
activeGameRouter.post("/activate", activeGameController.activateGame);

activeGameRouter.get("/join/:id", activeGameController.joinGame);

activeGameRouter.post("/setname", activeGameController.setName);
// //create a marker
// gamePlanRouter.post("/create-marker", gamePlanController.createMarker);

// //list your games
// gamePlanRouter.get("/list", gamePlanController.listGames);

// //get a game by id
// gamePlanRouter.get("/:id", gamePlanController.getGame);

// //get a marker by id
// gamePlanRouter.get("/marker/:id", gamePlanController.getMarker);

// //patch a game
// gamePlanRouter.patch("/update/:id", gamePlanController.updateGame);

// //need to test if this can be upsert.
// //The app will have just one save button for both create and edit
// gamePlanRouter.patch("/update-marker/:id", gamePlanController.updateMarker);

// //delete a marker
// gamePlanRouter.delete("/delete-marker/:id", gamePlanController.deleteMarker);

// //delete a game
// gamePlanRouter.delete("/delete/:id", gamePlanController.deleteGame);

export default activeGameRouter;

import { GamePlan } from "../dbConnection.js";
import { Marker } from "../dbConnection.js";
//import moment from "moment";

export async function createGame(req, res) {
  try {
    const { gameTitle, ownerId, gameMap } = req.body;
    if (gameTitle && ownerId) {
      const newGamePlanData = {
        gameTitle: gameTitle,
        gameMap: gameMap,
        ownerId: ownerId,
        markers: [],
      };

      const newPlan = await GamePlan.create(newGamePlanData);
      res.status(201).send(newPlan);
    } else {
      res.status(411).send({ error: "One or more required fields empty" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

//make sure the frontend has valid gamePlanId in req.body, otherwise it will fail
export async function createMarker(req, res) {
  try {
    const { marker } = req.body;
    const newMarker = await Marker.create(marker);

    //add id of newly createrd marker to the parent GamePlan
    if (newMarker) {
      const filter = { _id: newMarker.gamePlanId };
      const update = {
        $push: {
          markers: newMarker._id,
        },
      };
      const options = { sort: { _id: 1 }, new: true, overwrite: true };

      const newGamePlan = await GamePlan.findOneAndUpdate(
        filter,
        update,
        options
      );
      console.log("newGamePlan ", newGamePlan);
    } else {
      res.status(400).send({ error: "No GamePlan by such gamePlanId" });
    }

    res.status(201).send(newMarker);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function listGames(req, res) {
  try {
    const list = await GamePlan.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function updateGame(req, res) {
  try {
    const filter = { _id: req.params.id };
    const { gameTitle, ownerId, gameMap, markers } = req.body;
    const update = {
      gameTitle: gameTitle,
      gameMap: gameMap,
      ownerId: ownerId,
    };
    const options = { sort: { _id: 1 }, new: true, overwrite: true };

    let updatedGamePlan = await GamePlan.findOneAndUpdate(
      filter,
      update,
      options
    );

    res.status(200).send(updatedGamePlan);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

//must not update the gamePlanId
export async function updateMarker(req, res) {
  try {
    const filter = { _id: req.params.id };
    const { marker } = req.body;
    const options = { sort: { _id: 1 }, new: true, overwrite: true };
    let updatedMarker = await Marker.findOneAndUpdate(filter, marker, options);
    res.status(200).send(updatedMarker);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

//remember to remove the marker id from GamePlan
export async function deleteMarker(req, res) {
  try {
    const result = await Marker.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(403).send({ message: "Marker not found" });
    } else {
      //remove marker from GamePlan
      const filter = { _id: req.body.gamePlanId };
      const update = {
        $pullAll: {
          markers: [req.params.id],
        },
      };
      const options = { sort: { _id: 1 }, new: true, overwrite: true };

      let updatedGamePlan = await GamePlan.findOneAndUpdate(
        filter,
        update,
        options
      );
      console.log("updatedGamePlan ", updatedGamePlan);
      res.status(204).send({ message: "Marker deleted" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

//remember to delete all associated markers as well
export async function deleteGame(req, res) {
  try {
    const result = await GamePlan.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(403).send({ message: "Game not found" });
    } else {
      //delete markers here
      res.status(204).send({ message: "Game deleted" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

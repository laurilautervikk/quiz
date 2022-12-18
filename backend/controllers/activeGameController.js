import { GamePlan } from "../dbConnection.js";
import { Marker } from "../dbConnection.js";
import ActiveGame from "../classes/ActiveGame.js";

let currentGame = "";
//import moment from "moment";

//ENDPOINTS

//activate game
//join game
//accept player
//start game
//end game

//check game time //or should this be streamed to client via WS?
//check answer
//check ranking

//req -> gamePlan id, res -> joining link

export async function activateGame(req, res) {
  try {
    const { gamePlanId } = req.body;
    const filter = { _id: gamePlanId };
    let foundGamePlan = await GamePlan.findOne(filter);
    if (foundGamePlan) {
      currentGame = new ActiveGame(foundGamePlan);
      console.log(" currentGame", currentGame);
      //make this link a QR code in the frontend
      res.status(200).send({
        message: `<a href="localhost:8080/game/join/${currentGame.activeGameId}">Join Game</a>`,
      });
    } else {
      res.status(404).send({ error: "Game Plan not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function joinGame(req, res) {
  console.log("currentGame ", currentGame.activeGameId);
  try {
    if (req.params.id === currentGame.activeGameId) {
      console.log("Redirected to enter your name");
      //res.status(200).send({ message: "all good" });
      res.redirect("/join.html"); //redirects here after login
    } else {
      res.status(404).send({ error: "No active game with this Id" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function setName(req, res) {
  const { name } = req.body;
  try {
    if (name) {
      console.log("name received"); //add player instance with given name to ActiveGame
      res.status(200).send({ message: "all good" });
    } else {
      res.status(404).send({ error: "No active game with this Id" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

// export async function createGame(req, res) {
//   try {
//     const { gameTitle, ownerId, gameMap } = req.body;
//     if (gameTitle && ownerId) {
//       const newGamePlanData = {
//         gameTitle: gameTitle,
//         gameMap: gameMap,
//         ownerId: ownerId,
//         markers: [],
//       };

//       const newPlan = await GamePlan.create(newGamePlanData);
//       res.status(201).send(newPlan);
//     } else {
//       res.status(411).send({ error: "One or more required fields empty" });
//     }
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// //make sure the frontend sends valid gamePlanId in req.body, otherwise it will fail
// export async function createMarker(req, res) {
//   try {
//     const { marker } = req.body;
//     const newMarker = await Marker.create(marker);

//     //add id of newly createrd marker to the parent GamePlan
//     if (newMarker) {
//       const filter = { _id: newMarker.gamePlanId };
//       const update = {
//         $push: {
//           markers: newMarker._id,
//         },
//       };
//       const options = { sort: { _id: 1 }, new: true, overwrite: true };

//       const newGamePlan = await GamePlan.findOneAndUpdate(
//         filter,
//         update,
//         options
//       );
//       console.log("newGamePlan ", newGamePlan);
//     } else {
//       res.status(400).send({ error: "No GamePlan by such gamePlanId" });
//     }

//     res.status(201).send(newMarker);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function listGames(req, res) {
//   try {
//     const list = await GamePlan.find();
//     res.status(200).send(list);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function getGame(req, res) {
//   try {
//     const filter = { _id: req.params.id };
//     let foundGamePlan = await GamePlan.findOne(filter);

//     res.status(200).send(foundGamePlan);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function getMarker(req, res) {
//   try {
//     const filter = { _id: req.params.id };
//     let foundMarker = await Marker.findOne(filter);

//     res.status(200).send(foundMarker);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function updateGame(req, res) {
//   try {
//     const filter = { _id: req.params.id };
//     const { gameTitle, ownerId, gameMap, markers } = req.body;
//     const update = {
//       gameTitle: gameTitle,
//       gameMap: gameMap,
//       ownerId: ownerId,
//     };
//     const options = { sort: { _id: 1 }, new: true, overwrite: true };

//     let updatedGamePlan = await GamePlan.findOneAndUpdate(
//       filter,
//       update,
//       options
//     );

//     res.status(200).send(updatedGamePlan);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// //must not update the gamePlanId
// export async function updateMarker(req, res) {
//   try {
//     const filter = { _id: req.params.id };
//     const { marker } = req.body;
//     const options = { sort: { _id: 1 }, new: true, overwrite: true };
//     let updatedMarker = await Marker.findOneAndUpdate(filter, marker, options);
//     res.status(200).send(updatedMarker);
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function deleteMarker(req, res) {
//   try {
//     const result = await Marker.deleteOne({ _id: req.params.id });
//     if (result.deletedCount === 0) {
//       res.status(403).send({ message: "Marker not found" });
//     } else {
//       //removing marker from GamePlan
//       const filter = { _id: req.body.gamePlanId };
//       const update = {
//         $pullAll: {
//           markers: [req.params.id],
//         },
//       };
//       const options = { sort: { _id: 1 }, new: true, overwrite: true };

//       let updatedGamePlan = await GamePlan.findOneAndUpdate(
//         filter,
//         update,
//         options
//       );
//       console.log("updatedGamePlan ", updatedGamePlan);
//       res.status(204).send({ message: "Marker deleted" });
//     }
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

// export async function deleteGame(req, res) {
//   try {
//     //finding the game and deleting its markers first
//     const filter = { _id: req.params.id };
//     const foundGamePlan = await GamePlan.findOne(filter);
//     const markers = foundGamePlan.markers;
//     for (const marker of markers) {
//       const deletingMarker = await Marker.deleteMany({ _id: marker });
//       console.log("deletingMarker ", deletingMarker);
//     }
//     //deleting the game
//     const result = await GamePlan.deleteOne(filter);
//     if (result.deletedCount === 0) {
//       res.status(403).send({ message: "Game not found" });
//     } else {
//       res.status(204).send({ message: "Game deleted" });
//     }
//   } catch (error) {
//     res.status(500).send({ error: error });
//   }
// }

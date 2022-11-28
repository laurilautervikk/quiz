import { GamePlanModel } from "../dbConnection.js";
//import moment from "moment";

export async function createGame(req, res) {
  try {
    // const { title, image, location, time } = req.body;
    // if (title && image && location) {
    //   const event = {
    //     title: title,
    //     image: image,
    //     location: location,
    //     time: new Date(time),
    //     authorId: req.auth.id,
    //   };

    //await GamePlanModel.create(req.body);
    res.status(201).send(req.body);
    // } else {
    //   res.status(411).send({ error: "One or more required fields empty" });
    // }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function listGames(req, res) {
  try {
    const list = await GamePlanModel.find();
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function editGame(req, res) {
  try {
    // const { title, image, location, time } = req.body;
    // const isTimeValid = moment(time, moment.ISO_8601, true).isValid();
    // if (title && image && location && isTimeValid) {
    //   let updatedEvent = await Event.findOneAndUpdate(
    //     { _id: req.params.id },
    //     {
    //       $set: {
    //         title: title,
    //         image: image,
    //         location: location,
    //         time: new Date(time),
    //         authorId: req.auth.id,
    //       },
    //     },
    //     { sort: { _id: 1 }, new: true }
    //   );
    //   res.status(200).send(updatedEvent);
    // } else {
    //   res
    //     .status(400)
    //     .send({ error: "One or more required fields empty or malformed" });
    // }
    res.status(200).send({ message: `Trying to edit Game ${req.params.id}` });
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function deleteGame(req, res) {
  try {
    const result = await GamePlanModel.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) {
      res.status(403).send({ message: "Game not found" });
    } else {
      res.status(204).send({ message: "Game deleted" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

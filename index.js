import express from "express";
import session from "express-session";
import userRouter from "./routes/userRoutes.js";
//import eventRouter from "./routes/eventRoutes.js";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
const secret = process.env.SESSION_SECRET;
//import path from "path";

//USE PASSPORT..
//https://blog.logrocket.com/using-passport-authentication-node-js/
//https://github.com/MilanSteman/Mongo-Express-User-Authentication/blob/main/src/config/passport.js

const app = express();
app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: secret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 19 * 60000 }, // store for 19 minutes
    store: MongoStore.create({
      client: mongoose.connection.getClient(),
    }),
  })
);

app.use("/users", userRouter);
//app.use("/events", eventRouter);

//NEEDED LATER
//serving public files
// app.use("/", express.static(path.join(__dirname, "../public")));

//serv static FE
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/index.html"));
// });

// //Middleware
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500).send(err);
// });

app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});

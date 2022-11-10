import { User } from "../dbConnection.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
  try {
    const { email, password } = req.body;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email) && password.length > 4) {
      const user = await User.findOne({ email: email });
      if (!user) {
        let createUser = new User({
          email: email,
          password: bcrypt.hashSync(password, 10),
        });
        await User.create(createUser);
        //send to login
        res.status(201).send({ message: "User created" });
      } else {
        res.status(403).send({ error: "User already exists" });
        //send to login or reset password
      }
    } else {
      res.status(406).send({ error: "Email or password not acceptable" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: email });
      if (user) {
        const isPasswordvalid = bcrypt.compare(password, user.password);
        if (isPasswordvalid) {
          console.log("User logged in, cookie sent");

          res.status(200).send({ cookie: "this should be a cookie" });
        } else {
          res.status(401).send({ error: "Wrong password" });
        }
      } else {
        res.status(404).send({ error: "User does not exist" });
      }
    } else {
      res.status(411).send({ error: "Email or password field empty" });
    }
  } catch (error) {
    res.status(500).send({ error: error });
  }
}

export async function logoutUser(req, res) {
  req.session.destroy((error) => {
    if (error) return console.error(error);
  });
  return res.clearCookie("connect.sid").send({ message: "User logged out" });
}

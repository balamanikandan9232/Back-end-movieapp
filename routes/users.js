import express from "express";
import { createUser } from "../helper.js";
import bcrypt from "bcrypt";
const router = express.Router();
async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  console.log({ salt, hashPassword });
  return hashPassword;
}

router.post("/signup", async function (req, res) {
  const { username, password } = req.body;
  const hashpassword = await genPassword(password);
  const newuser = {
      username:username,
      password:hashpassword,
  };
  const result = await createUser(newuser);
  res.send(result);
});

export const usersRouter = router;

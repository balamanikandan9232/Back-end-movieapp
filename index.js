import express from "express";
import { MongoClient } from "mongodb";
import {moviesRouter} from "./routes/movies.js";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import {usersRouter} from "./routes/users.js"
console.log(process.env.MONGO_URL);
const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
const PORT = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL;
async function CreateConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("mongodb is connected😁");
  return client;
}
export const client = await CreateConnection();
app.get("/", (req, res) => {
  res.send("hello 😂world");
});
app.use('/movies', moviesRouter);
app.use("/users", usersRouter);
app.listen(PORT, () => {
  console.log(`server started in ${PORT}`);
});

  
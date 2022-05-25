// import { MongoClient } from "mongodb";
// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// import cors from "cors";
// console.log(process.env.MONGO_URL)
// const app = express();
// const PORT = 4000;
// const MONGO_URL = "";
// app.use(express.json())
// app.use(cors({ origin: "*" }))
// async function CreateConnection() {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect();
//   console.log(client);
//   return client;
// }

// const client = await CreateConnection();

// app.get("/", (req, res) => {
//   console.log("mongodb is connected");
// });
// app.get("/movies/:id", async function (req, res) {
//   console.log(req.params);
//   const { id } = req.params;
//   const result = await client
//     .db("b30wd")
//     .collection("movies")
//     .findOne({ id: id });
//   res.send(result);
// });
// app.get("/moviesall", async function (req, res) {
//   const resultant = await client
//     .db("b30wd")
//     .collection("movies")
//     .find({})
//     .toArray();
//   res.send(resultant);
// });
// app.post("/movies", async function (req, res) {
//   const body = req.body;
//   console.log(body);
//   const resulttt = await client
//     .db("b30wd")
//     .collection("movies")
//     .insertMany(body);
//   res.send(resulttt);
// });
// app.put("/movies/:id", async function (req, res) {
//   console.log(req.params);
//   const { id } = req.params;
//   const bodydata = req.body;
//   const out = await client
//     .db("b30wd")
//     .collection("movies")
//     .updateOne({id:id},{$set:bodydata})
//     res.send(out)
// });
// app.listen(PORT, () => {
//   console.log(`Server started in ${PORT}`);
// });


// app.get("/moviesall",(req,res)=>{
//     const notout = await client.db("b30wd").collection("movies").find({}).toArray()
// })
// app.get("/movies/:id",async function (req,res){
//     console.log(req.params);
//     const {id}=req.params;
//     const client = await client.db("b30wd").collection("movies").findOne({id:id})
//     res.sendFile(client)
// })
// app.delete("/movies/:id",async function(req,res){
//     console.log(req.params);
//     const {id}=req.params;
//     const notout = await client .db("b30wd").collection("movies").deleteOne({id:id});
//     res.send(notout);
// })
// app.put("/movies/:id",async function(req,res){
//     console.log(req.params);
//     const {id}=req.params;
//     const body = req.body;
//     const rjbalaji = await client.db("b30wd").collection("movies").updateOne({id:id},{$set:body});
//     res.send(rjbalaji);
// })
// app.post("/movies",async function(req,res){
//     const data = req.body;
//     console.log(data)
//     const post = await client.db("b30wd").collection("movies").insertMany(data);
//     res.send(post)
// })
import { client } from "./index.js";

export async function putMovies(id, updatedata) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ id: id }, { $set: updatedata });
}
export async function postMovie(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}

export async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}

export async function deletefunction(id) {
  return await client.db("b30wd").collection("movies").deleteOne({ id: id });
}

export async function getMoviebyId(id) {
  return await client.db("b30wd").collection("movies").findOne({ id: id });
}

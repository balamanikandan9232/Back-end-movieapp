import express from 'express';
import {putMovies,
  postMovie,
  getAllMovies,
  deletefunction,
  getMoviebyId,}from "../helper.js";
  const router = express.Router();
router.get("/movies", (req, res) => {
    res.send(movies);
  });
  router.get("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const movie = await getMoviebyId(id);
    console.log(movie);
    movie
      ? res.send(movie)
      : res.status(404).send({ message: "No such movie found" });
  });
  router.delete("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const resultt = await deletefunction(id);
    res.send(resultt);
  });
  router.get("/", async function (req, res) {
    const results = await getAllMovies();
    res.send(results);
  });
  router.post("/", async function (req, res) {
    const data = req.body;
    console.log(data);
    const result = await postMovie(data);
    res.send(result);
  });
  router.put("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const updatedata = req.body;
    const resultt = await putMovies(id, updatedata);
    res.send(resultt);
  });
  export const moviesRouter = router;
import express from "express";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { Photo } from "./entity/Photo";
import bodyParser from "body-parser";

let connection: Connection;
const getConnection = async () => {
  connection = await createConnection();
};

const port = 5000;

const app = express();
const jsonParser = bodyParser.json();

app.use(jsonParser);

app.get("/photo", async (req, res) => {
  const photoRepository = connection.getRepository(Photo);
  const photos = await photoRepository.find();
  res.json(photos);
});

app.get("/photo/:id", async (req, res) => {
  const id = req.params.id;

  const photoRepository = connection.getRepository(Photo);
  try {
    const photo = await photoRepository.findOne(id);
    res.json(photo);
  } catch (e) {
    res.json({
      message: "cannot save",
      error: e,
    });
  }
});

app.put("/photo/:id", async (req, res) => {
  const photoRepository = connection.getRepository(Photo);
  try {
    const photo = new Photo(req.body);
    photo.id = Number(req.params.id);
    await photoRepository.save(photo);
    res.json({
      message: "data saved",
    });
  } catch (e) {
    res.json({
      message: "cannot save",
      error: e,
    });
  }
});

app.delete("/photo/:id", async (req, res) => {
  const photoRepository = connection.getRepository(Photo);
  const id = req.params.id;
  try {
    const photo = await photoRepository.findOne(id);
    await photoRepository.remove(photo);
    res.json({
      message: "data deleted",
      photo,
    });
  } catch (e) {
    res.json({
      message: "cannot save",
      error: e,
    });
  }
});

app.post("/photo", async (req, res) => {
  const photoRepository = connection.getRepository(Photo);
  const photo = req.body as Photo;
  try {
    await photoRepository.insert(photo);
    res.json({
      message: "data saved",
    });
  } catch (e) {
    res.json({
      message: "cannot save",
      error: e,
    });
  }
});

app.listen(port, async () => {
  console.log("Getting connection.");
  try {
    await getConnection();
  } catch (e) {
    console.log("error getting connection.", e);
  }
  console.log(`server started at port ${port}`);
});

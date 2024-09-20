import express from 'express';
import { Config, JsonDB } from 'node-json-db';

const app = express();
const db = new JsonDB(new Config("db", true, true, '/'));
const port = 3456;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/hulls", async (req, res) => {
    let hulls = await db.getData("/hull");

    res.send(hulls);
})
app.get("/hulls/:name", async (req, res) => {
    let hulls = await db.getData(`/hull`);
    let hull = hulls.find(hull => hull.name === req.params.name);

    res.send(hull);
})


app.get("/engines", async (req, res) => {
    let engines = await db.getData("/engine");

    res.send(engines);
})
app.get("/engines/:name", async (req, res) => {
    let engines = await db.getData("/engine");
    let engine = engines.find(engine => engine.name === req.params.name);

    res.send(engine);
})


app.get("/armaments", async (req, res) => {
    let armaments = await db.getData("/armament");

    res.send(armaments);
})
app.get("/armaments/:name", async (req, res) => {
    let armaments = await db.getData("/armament");
    let armament = armaments.find(armament => armament.name === req.params.name);

    res.send(armament);
})


app.listen(port);
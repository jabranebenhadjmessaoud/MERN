import express from "express";
import rrr from "./routes/tvshows.routes.js";
const app = express();
const port = 8000;


app.use(express.json())

app.use("/api",rrr)












app.listen( port, () => console.log(`Listening on port: ${port}`) );
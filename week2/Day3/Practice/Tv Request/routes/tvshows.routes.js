import TvShowController from "../controllers/tvshows.controller.js";
import { Router } from "express";

const rrr=Router()

rrr.route("/alltvshows")
.get(TvShowController.all)

rrr.route("/show/:yearCreated")
.get(TvShowController.findyy)

rrr.route("/delete/:tvShow")
.get(TvShowController.remove)

rrr.route("/update/:tvShow")
.patch(TvShowController.update);



export default rrr
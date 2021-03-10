import * as express from "express";
import movieRouter from "./moviesRoutes";
const router = express.Router();
const bodyParser = require("body-parser")


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))
router.use("/movies", movieRouter);

export default router;
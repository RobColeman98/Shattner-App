import * as express from "express";
import commercialsRouter from "./commercialRouter"
const router = express.Router();
const bodyParser = require("body-parser")


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

router.use("/commercials", commercialsRouter);

export default router;
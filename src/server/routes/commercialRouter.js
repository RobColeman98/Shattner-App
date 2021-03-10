import * as express from "express";
import dbCommercials from "../db/commericalsQuery"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      let data = await dbCommercials.all();
      console.log(data);
      res.json(data);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.get("/:id", async (req, res) => {
    try {
      let data = await dbCommercials.get(req.params.id);
      res.json(data);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

  router.post("/", async (req, res) => {
    const makeCommercial = req.body;
    console.log(makeCommercial)
    try {
      const dataCommericial  = await dbCommercials.post(
        makeCommercial.name,
        makeCommercial.company
        
        );
      res.json(dataCommericial);
    } catch (e) {
      res.status(500).json(e);
      console.log(e);
    }
  });

  router.put("/:id?", async (req, res) => {
    const updateCommercial = req.body;
    console.log(updateCommercial)
    try {
      const data = await dbCommercials.put(
        updateCommercial.name,
        updateCommercial.company,
        req.params.id,
        
        );
         console.log("ormgormg")
      res.json(data);
    } catch (e) {
      console.log(e);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      let id = Number(req.params.id);
      await dbCommercials.deleteMovie(id);
      res.json({ msg: `Commercial ${id} deleted` });
    } catch (e) {
      console.log(e);
    }
  });
  
  export default router;
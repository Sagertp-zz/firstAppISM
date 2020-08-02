import { Router } from 'express'
const router = Router();

router
  .get("/", (req, res) => res.json({ mensaje: "GET hola mundo" }))
  .post("/", (req, res) => res.json({ mensaje: "POST hola mundo" }))
  .put("/", (req, res) => res.json({ mensaje: "PUT hola mundo" }))
  .delete("/", (req, res) => res.json({ mensaje: "DELETE hola mundo" }));

export default router;
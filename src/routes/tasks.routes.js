import { Router } from "express";
const router = Router();

//Databases connection
import { connect } from "../database";
import { ObjectID } from "mongodb";

router
  .get("/", async (req, res) => {
    const db = await connect();
    const result = await db.collection("tasks").find({}).toArray();
    console.log(result);
    res.json(result);
  })

  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection("tasks").findOne({_id: ObjectID(id)});
    console.log(result);
    res.json(result);
  })

  .post("/", async (req, res) => {
    const db = await connect();
    const task = {
      Direccion: req.body.Direccion,
      Contacto: req.body.Contacto,
      Detalle: req.body.Detalle,
      Responsable: req.body.Responsable,
      Fecha: req.body.Fecha,
      Estatus: req.body.Estatus,
    };
    const result = await db.collection("tasks").insert(task);
    console.log(req.body);
    res.json([{ MESSAGE: "POST Tasks" }, result.ops[0]]);
  })

  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const updateTask = {
      Direccion: req.body.Direccion,
      Contacto: req.body.Contacto,
      Detalle: req.body.Detalle,
      Responsable: req.body.Responsable,
      Fecha: req.body.Fecha,
      Estatus: req.body.Estatus,
    };
    const db = await connect();
    const result = await db.collection("tasks").updateOne( {_id: ObjectID(id)}, {$set: updateTask} );
    res.json({
      MESSAGE: `Task ${id} Updated`,
      result
    });
  })

  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection("tasks").deleteOne({_id: ObjectID(id)});
    console.log(result);
    res.json({
      MESSAGE: `Task ${id} Deleted`,
      result
    });
  });

export default router;

/*
{
  "Direccion": "Av. Cristóbal Mendoza, Edificio Estoril Park", 
  "Contacto": "Francisco Carril -Cónyuge- 0416-614.1816.",
  "Detalle": "Se verificó la línea vista hacia la torre polar",
  "Responsable": "Oswaldo Alberti."
  "Fecha": "Martes 28 / 07 / 2020.",
  "Estatus": "En ejecucion."
}

*/
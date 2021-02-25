const express = require("express");
const router = express.Router();
const pool = require("../../database/mysqlhelper");

// const { validToken } = require('../middlewares/jw_token');

router.get("/lista_grados/:id_Colaborador", async (req, res) => {
  const { id_Colaborador } = req.params;

  await pool.query(
    "call Tsp_Get_Grados_x_idColaborador (?)",
    [id_Colaborador],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error:
            "Ocurrio un suceso inesperado (/lista_grados/:id_Colaborador) : " +
            err,
        });
      }
    }
  );
});

router.get("/lista_seccion/:id_Colaborador&:id_Grado", async (req, res) => {
  const { id_Colaborador, id_Grado } = req.params;

  await pool.query(
    "call Tsp_Get_seccion_x_idColaborador_idGrado (?,?)",
    [id_Colaborador, id_Grado],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error: "Ocurrio un suceso inesperado (/lista_seccion) : " + err,
        });
      }
    }
  );
});

router.get("/lista_clase/:id_Colaborador&:id_Seccion", async (req, res) => {
  const { id_Colaborador, id_Seccion } = req.params;

  await pool.query(
    "call Tsp_Get_Clase_x_idColaborador_idseccion (?,?)",
    [id_Colaborador, id_Seccion],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error: "Ocurrio un suceso inesperado (/lista_clase) : " + err,
        });
      }
    }
  );
});

router.get("/lista_Alumnos_x_Seccion/:id_Seccion", async (req, res) => {
  const { id_Seccion } = req.params;

  await pool.query(
    "call Tsp_Get_Alumnos_x_seccion (?)",
    [id_Seccion],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error:
            "Ocurrio un suceso inesperado (/lista_Alumnos_x_Seccion) : " + err,
        });
      }
    }
  );
});

router.get("/NotasAlumnos_x_Clase_Cx/:id_Clase&:Cx", async (req, res) => {
  const { id_Clase, Cx } = req.params;

  await pool.query(
    "call Tsp_Get_NotasAlumnos_x_Clase_Cx (?,?)",
    [id_Clase, Cx],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error:
            "Ocurrio un suceso inesperado (/NotasAlumnos_x_Clase_Cx) : " + err,
        });
      }
    }
  );
});

router.get("/NotasAlumnos_x_Clase/:id_Clase", async (req, res) => {
  const { id_Clase, Cx } = req.params;

  await pool.query(
    "call Tsp_Get_NotasAlumnos_x_Clase (?)",
    [id_Clase],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error:
            "Ocurrio un suceso inesperado (/NotasAlumnos_x_Clase) : " + err,
        });
      }
    }
  );
});

router.get("/pepe", async (req, res) => {
  await pool.query(
    "call Tsp_lista_cursos ()",

    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
        res.status(404).send({
          error:
            "Ocurrio un suceso inesperado (/NotasAlumnos_x_Clase) : " + err,
        });
      }
    }
  );
});

module.exports = router;

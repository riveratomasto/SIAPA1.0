const express = require("express");
const router = express.Router();
const pool = require("../database/mysqlhelper");

const { validToken } = require("../middlewares/jw_token");

/*
const usuarioSchema = require('../schemas/usuario');
const vparams = require('../middlewares/vparams')
*/

router.get("/", async (req, res) => {
  // await pool.query("call Tsp_lista_cursos ()", (err, rows, fields) => {
  //   if (!err) {
  //     res.json({ rows: rows[0] });

  //     //res.json(rows);
  //     //rows: rows[0][0]
  //   } else {
  //     console.log(err);
  //     res.status(404).send({ error: "Ocurrio un suceso inesperado: " + err });
  //   }
  // });
  const datos = [
    { id: 1, nombre: "Asfo" },
    { id: 2, nombre: "Denisse" },
    { id: 3, nombre: "Carlos" },
  ];

  res.json(datos);
});

router.get("/a", async (req, res) => {
  // await pool.query("call Tsp_lista_cursos ()", (err, rows, fields) => {
  //   if (!err) {
  //     res.json({ rows: rows[0] });

  //     //res.json(rows);
  //     //rows: rows[0][0]
  //   } else {
  //     console.log(err);
  //     res.status(404).send({ error: "Ocurrio un suceso inesperado: " + err });
  //   }
  // });
  

  res.json('se recogio por post');
});








// router.post("/", async (req, res) => {
//   const { curso, id_usu } = req.body;

//   //console.log(req.session.Ses_id_usu);

//   await pool.query(
//     "CALL Tsp_IU_curso (?, ?, ?)",
//     [0, curso, id_usu /*req.session.Ses_id_usu*/],
//     (err, rows, fields) => {
//       if (!err) {
//         res.json({
//           mensaje: "Curso registrado correctamente",
//           id_curso: rows[0][0].id_curso,
//         });
//       } else {
//         console.log(err);
//         res.status(404).send({ error: "Ocurrio un suceso inesperado: " + err });
//       }
//     }
//   );
// });

// router.put("/", async (req, res) => {
//   const { id_curso, curso, id_usu } = req.body;

//   //console.log(req.session.Ses_id_usu);

//   await pool.query(
//     "CALL Tsp_IU_curso (?, ?, ?)",
//     [id_curso, curso, id_usu /*req.session.Ses_id_usu*/],
//     (err, rows, fields) => {
//       if (!err) {
//         res.json({
//           mensaje: "Curso actualizado correctamente",
//           //id_curso: rows[0][0].id_curso
//         });
//       } else {
//         console.log(err);
//         res.status(404).send({ error: "Ocurrio un suceso inesperado: " + err });
//       }
//     }
//   );
// });

// router.delete("/:id_curso", async (req, res) => {
//   const { id_curso } = req.params;

//   console.log(req.session.Ses_id_usu);

//   await pool.query(
//     "CALL Tsp_Del_curso (?)",
//     [id_curso],
//     (err, rows, fields) => {
//       if (!err) {
//         res.json({
//           mensaje: "Curso eliminado correctamente",
//           //id_curso: rows[0][0].id_curso
//         });
//       } else {
//         console.log(err);
//         res.status(404).send({ error: "Ocurrio un suceso inesperado: " + err });
//       }
//     }
//   );
// });

// router.get("/cursos", validToken, (req, res) => {
//   const datos = [
//     { id: 1, nombre: "Asfo" },
//     { id: 2, nombre: "Denisse" },
//     { id: 3, nombre: "Carlos" },
//   ];

//   res.json(datos);
// });

module.exports = router;

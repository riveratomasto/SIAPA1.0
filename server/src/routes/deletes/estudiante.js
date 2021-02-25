const express = require("express");
const router = express.Router();
const pool = require("../database/mysqlhelper");

const { validToken } = require('../middlewares/jw_token');

router.post("/pepe", async (req, res) => {

  const { usu, pwd } = req.body;
  await pool.query(
    "call Tsp_Login (?, ?)",[usu, pwd],

    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
        // console.log(err);
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

const express = require("express");
const router = express.Router();
const pool = require("../database/mysqlhelper");

router.post("/find", async (req, res) => {
  await pool.query("CALL TSP_INBOX_1", (err, rows, fields) => {
    if (!err) {
      // res.json(rows[1]);
      // res.json([rows[0]]);
      // console.log(rows[0]);
      // res.send('Hello');
      total = rows[0].length
      res.json({
        items:rows[0],
        total:total
      });
      // res.render('index', rows[0] );
     
    } else {
      res.status(404).send({
        error: "Ocurrio un suceso inesperado (inbox/emitidos) : " + err,
      });
    }
  });
});
 
// router.get('/index',async (req, res) => {
//   //   const {idCalificacion} = req.params;
//   const { usu, pwd} = req.body;
// await pool.query('CALL RSP_COLA_SEL',(err,rows,fields) => {
//   if(!err)
//   {
//     // res.json(rows[1]);			
//     res.send(rows);
//   }else{
//     res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
//   }
//       });	
// });

module.exports = router;

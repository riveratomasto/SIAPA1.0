const express = require('express');
const router = express.Router();
const pool = require('../database/mysqlhelper');

// const { validToken } = require('../middlewares/jw_token');

router.get('/index',async (req, res) => {

      const {idCalificacion} = req.params;
    const { C1,C2,C3,CanEval} = req.body;

	await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

		if(!err)
		{
			res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
			 
		}else{
			console.log(err);
			res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
		}
		});	
 });


 router.get('/update',async (req, res) => {

    const {idCalificacion} = req.params;
  const { C1,C2,C3,CanEval} = req.body;

  await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

      if(!err)
      {
          res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
           
      }else{
          console.log(err);
          res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
      }
      });	
});

router.get('/edit',async (req, res) => {

    const {idCalificacion} = req.params;
  const { C1,C2,C3,CanEval} = req.body;

  await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

      if(!err)
      {
          res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
           
      }else{
          console.log(err);
          res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
      }
      });	
});

















router.get('/:idCalificacion',async (req, res) => {

    const {idCalificacion} = req.params;
    const { C1,C2,C3,CanEval} = req.body;

	await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

		if(!err)
		{
			res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
			 
		}else{
			console.log(err);
			res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
		}
		});	
 });


module.exports = router;
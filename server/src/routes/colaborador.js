const express = require('express');
const router = express.Router();
const pool = require('../database/mysqlhelper');

// const { validToken } = require('../middlewares/jw_token');

router.get('/index',async (req, res) => {
    //   const {idCalificacion} = req.params;
    const { usu, pwd} = req.body;

	await pool.query('CALL RSP_COLA_SEL',(err,rows,fields) => {
		if(!err)
		{
			// res.json(rows[1]);			
			res.send(rows);

		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
		}
        });	

 });


 router.get('/insert',async (req, res) => {
    //   const {idCalificacion} = req.params;
    const { 
		tipo_doc,
		num_doc,
		nombres,
		correo,
		celular,
		estado,
		id_area,
		id_usu,
		telefono,
		apellidos,
		sexo,
		fec_nac,
		situacion,
		fec_reg,
		tipo_contrato,
		cod_modular } = req.body;

	await pool.query('CALL TSP_COLABORADOR_INS(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
	[tipo_doc,
		num_doc,
		nombres,
		correo,
		celular,
		estado,
		id_area,
		id_usu,
		telefono,
		apellidos,
		sexo,
		fec_nac,
		situacion,
		fec_reg,
		tipo_contrato,
		cod_modular
	],
	(err,rows,fields) => {
		if(!err)
		{
			res.json({ message: 'Se registro correctamente'});			
		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/insert) : " + err });
		}
        });	
 });




 router.get('/edit',async (req, res) => {
    //   const {idCalificacion} = req.params;
    const { usu, pwd} = req.body;

	await pool.query('CALL TSP_COLABORADOR_SEL1',(err,rows,fields) => {
		if(!err)
		{
			res.json({ message: 'Total de Registros : ' + rows.length});			
		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
		}
        });	

 });



 router.get('/delete',async (req, res) => {
    //   const {idCalificacion} = req.params;
    const { usu, pwd} = req.body;

	await pool.query('CALL TSP_COLABORADOR_SEL1',(err,rows,fields) => {
		if(!err)
		{
			res.json({ message: 'Total de Registros : ' + rows.length});			
		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
		}
        });	

 });



//  router.get('/update',async (req, res) => {

//     const {idCalificacion} = req.params;
//   const { C1,C2,C3,CanEval} = req.body;

//   await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

//       if(!err)
//       {
//           res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
           
//       }else{
//           console.log(err);
//           res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
//       }
//       });	
// });

// router.get('/edit',async (req, res) => {

//     const {idCalificacion} = req.params;
//   const { C1,C2,C3,CanEval} = req.body;

//   await pool.query('call Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval (?,?,?,?,?)', [idCalificacion,C1,C2,C3,CanEval], (err,rows,fields) => {

//       if(!err)
//       {
//           res.json( { message: 'Nota Actualizada : ' + idCalificacion + ' C1: ' + C1 + ' canEval: ' + CanEval} );			
           
//       }else{
//           console.log(err);
//           res.status(404).send({ error: "Ocurrio un suceso inesperado (put/notas/) : " + err });
//       }
//       });	
// });


module.exports = router;
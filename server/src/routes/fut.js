const express = require('express');
const router = express.Router();
const pool = require('../database/mysqlhelper');


router.post('/insert',async (req, res) => {
    
    const { 
        nom ,
        pat ,
        mat ,
        email ,
        cel ,

        tel ,
        direccion ,
        dt_fut ,
        url_adjuntos ,
        num_folios ,

        num_doc ,
        tipo_doc,
        titulo_fut  } = req.body;

	await pool.query('CALL TSP_FUT_INS(?,?,?,?,?,?,?,?,?,?,?,?,?)',
	[   nom ,
        pat ,
        mat ,
        email ,
        cel ,

        tel ,
        direccion ,
        dt_fut ,
        url_adjuntos ,
        num_folios ,

        num_doc ,
        tipo_doc,
        titulo_fut
	],
	(err,rows,fields) => {
		if(!err)
		{
			res.json({ message: 'Se registro correctamente', rows: rows[0][0] });			
		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (fut/insert) : " + err });
		}
        });	
 });

 router.put('/upd_Pri:pri',async (req, res) => {

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
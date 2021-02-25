const express = require('express');
const router = express.Router();
const pool = require('../database/mysqlhelper');


router.get('/index',async (req, res) => {
    //   const {idCalificacion} = req.params;
    // const { usu, pwd} = req.body;

	// await pool.query('CALL TSP_COLABORADOR_SEL',(err,rows,fields) => {
	// 	if(!err)
	// 	{
	// 		res.json({message: 'Total de Registros : ' + rows.length});			
	// 	}else{
	// 		res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
	// 	}
    //     });	

res.send('se envio index')



 });

 router.get('/insert',async (req, res) => {
    //   const {idCalificacion} = req.params;
    // const { 
	// 	tipo_doc,
	// 	num_doc,
	// 	nombres,
	// 	correo,
	// 	celular,
	// 	estado,
	// 	id_area,
	// 	id_usu,
	// 	telefono,
	// 	apellidos,
	// 	sexo,
	// 	fec_nac,
	// 	situacion,
	// 	fec_reg,
	// 	tipo_contrato,
	// 	cod_modular } = req.body;

	// await pool.query('CALL TSP_COLABORADOR_INS(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
	// [
    //     tipo_doc,
	// 	num_doc,
	// 	nombres,
	// 	correo,
	// 	celular,
	// 	estado,
	// 	id_area,
	// 	id_usu,
	// 	telefono,
	// 	apellidos,
	// 	sexo,
	// 	fec_nac,
	// 	situacion,
	// 	fec_reg,
	// 	tipo_contrato,
	// 	cod_modular
	// ],
	// (err,rows,fields) => {
	// 	if(!err)
	// 	{
	// 		res.json({ message: 'Se registro correctamente'});			
	// 	}else{
	// 		res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/insert) : " + err });
	// 	}
    //     });	
    res.send('inserttar')
 });




 router.get('/edit',async (req, res) => {
    //   const {idCalificacion} = req.params;
    // const { usu, pwd} = req.body;

	// await pool.query('CALL TSP_COLABORADOR_SEL1',(err,rows,fields) => {
	// 	if(!err)
	// 	{
	// 		res.json({ message: 'Total de Registros : ' + rows.length});			
	// 	}else{
	// 		res.status(404).send({ error: "Ocurrio un suceso inesperado (colaborador/index) : " + err });
	// 	}
    //     });	
    res.send('editar')

 });
 module.exports = router;
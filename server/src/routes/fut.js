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


 module.exports = router;
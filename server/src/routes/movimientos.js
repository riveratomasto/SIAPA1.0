const express = require('express');
const router = express.Router();
const pool = require('../database/mysqlhelper');




router.post('/insert',async (req, res) => {
    
    const { 
        area_origen ,
        area_destino ,
        obs ,
        url_adjuntos ,
        id_FUT ,
        id_usuario ,
        tipo  /* 1 = DERIVA / 2 = Resuelve / 3 = Rechaza*/} = req.body;

	await pool.query('CALL TSP_MOV_INS(?,?,?,?,?,?,?)',
	[   area_origen ,
        area_destino ,
        obs ,
        url_adjuntos ,
        id_FUT ,
        id_usuario ,
        tipo
	],
	(err,rows,fields) => {
		if(!err)
		{
			res.json({ message: 'Se registro correctamente' });			
		}else{
			res.status(404).send({ error: "Ocurrio un suceso inesperado (movimientos/insert) : " + err });
		}
        });	
 });
 














module.exports = router;
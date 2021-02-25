const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const pool = require('../database/mysqlhelper');
const config = require('../middlewares/config');
const { validToken, llavex } = require('../middlewares/jw_token');

const usuarioSchema = require('../schemas/usuario');
const vparams = require('../middlewares/vparams');
const { date } = require('yup');


router.post('/login', (req, res, next) => {

	const { usu, pwd } = req.body;

	pool.query('CALL Tsp_Login (?, ?)', [usu, pwd], (err, rows, fields) => {

		if (rows[0].length > 0) {


			/* CREAR Ses_USU */
			//req.session.Ses_id_usu =  rows[0][0].id_usu;			
			/* end ses_usu */

			/* CREAR TOKEN */
			
			// const payload = { id_usu: rows[0][0].id_usu };
			// const expiresIn = 12 * 60 * 60; //  segundos multiplicados = 12 Hrs  Vida de 1 DIA

			// const token = jwt.sign(
			// 	payload ,
			// 	llavex,
			// 	{ expiresIn: expiresIn });

			const token = jwt.sign({id: rows[0][0].id},config.secret)
			// const expiresIn = new Date()//  segundos multiplicados = 12 Hrs  Vida de 1 DIA
			const refreshToken = token+ Math.floor(Math.random() * 10);  
			// const objExpire = expiresIn.toISOString()
			res.json({
				// mensaje: 'Autenticación correcta',
				accessToken: token,
				// expiresIn: objExpire,
				refreshToken: refreshToken,
				/*
				id_usu: rows[0][0].id_usu	,		
				id_perfil: rows[0][0].id_perfil
				*/
				rows: rows[0][0]
			});

			/* END CREATE */

			// console.log(rows[0]);

		} else {
			
			// console.log(err);
			// console.log(rows[0]);
			// console.log(res)
			res.status(401).send({ error: "usuario o contraseña inválidos" });
			// res.send({ error: "usuario o contraseña inválidos" });
		}

	});


});

router.post('/signup', vparams(usuarioSchema), (req, res, next) => {

	const { usu, pwd, id_colaborador, id_perfil } = req.body;

	if (!id_colaborador) {
		res.status(401).send({ error: "Parametro no ingresado : id_Colaborador " });
		return;
	}
	if (!id_perfil) {
		res.status(401).send({ error: "Parametro no ingresado : id_perfil " });
		return;
	}

	pool.query('CALL Tsp_Insert_Usuario (?, ?, ?, ?)', [usu, pwd, id_colaborador, id_perfil], (err, rows, fields) => {

		if (!err) {
			
			/* CREAR Ses_USU */			
			//req.session.Ses_id_usu =  rows[0][0].id_usu;		// ITS OK but it's not necessary in this module Server, only in Front!	
			/* end ses_usu */
			

			/* CREAR TOKEN */

			const payload = { id_usu: rows[0][0].id_usu };
			const expiresIn = 12 * 60 * 60; //  segundos multiplicados = 12 Hrs  Vida de 1 DIA

			const token = jwt.sign(
				payload ,
				llavex,
				{ expiresIn: expiresIn });


			res.json({
				mensaje: 'Autenticación correcta',
				token: token,
				expiresIn: expiresIn,
				/*
				id_usu: rows[0][0].id_usu	,		
				id_perfil: rows[0][0].id_perfil
				*/
				rows: rows[0][0]
				//rows[0][0]
			});

			/* END CREATE */


		} else {
			console.log(err);
			res.status(401).send({ error: "Ocrurrio un error al registrar al usuario" });
		}

	});

});
 


module.exports = router;
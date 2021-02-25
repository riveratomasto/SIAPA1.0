USE SysTraDoc;

/* DESACTIVAR CONSTRAINTS FOREIGN KEY */

SET FOREIGN_KEY_CHECKS=0;

/*****************************************/
/******** AREAS */
/*****************************************/

INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Solicitante',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Mesa de Partes',1,now());
-- > SUPUESTOS
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Administracion',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Psicologia',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Pedagogia',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Contable',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Mantenimiento',1,now());
INSERT INTO  areas (`area`,`estado`,`fecha_reg`) VALUES ('Informatica',1,now());


/*****************************************/
/******** CARGOS */
/*****************************************/

INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Developer');
-- > SUPUESTOS
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Director');
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Psicologo');
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Docente');
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Contador');
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Soporte Informatico');
INSERT INTO cargo_colaborador (`cargo`) VALUES  ('Auxiliar');

select * from cargo_colaborador;


/*****************************************/
/****** COLABORADOR */
/*****************************************/

/*ALTER TABLE COLABORADOR NOCHECK CONSTRAINT ALL; NO SIRVE en MYSQL*/

INSERT INTO colaborador(`tipo_doc`,`num_doc`,`nom`,`email`,`cel`,`fec_reg`,`estado`,`id_area`,`mat`,`pat`,`tel`,`fec_nac`,`id_cargo_cola`)
VALUES ('DNI','','System32','System32@gmail.com','00000000',NOW(),1,0,'','','',CURDATE(),1);

INSERT INTO colaborador(`tipo_doc`,`num_doc`,`nom`,`email`,`cel`,`fec_reg`,`estado`,`id_area`,`mat`,`pat`,`tel`,`fec_nac`,`id_cargo_cola`)
VALUES ('DNI','987654321','SystemT','atomasto@gmail.com','00000000',NOW(),1,0,'Montañez','Tomasto','',CURDATE(),1);

INSERT INTO colaborador(`tipo_doc`,`num_doc`,`nom`,`email`,`cel`,`fec_reg`,`estado`,`id_area`,`mat`,`pat`,`tel`,`fec_nac`,`id_cargo_cola`)
VALUES ('DNI','','SystemR','jrivera@gmail.com','11111111',NOW(),1,0,'Bernuy','RIvera','',CURDATE(),1);

/*select * from COLABORADOR;*/


/*****************************************/
/******** USUARIOS */
/*****************************************/


INSERT INTO usuarios (`usu`, `pwd`, `estado`, `id_cola`, `id_perfil`)
VALUES ('System32',AES_ENCRYPT('Password$1','S3rver@.@Net'), 1, 1 , 1);

INSERT INTO usuarios (`usu`, `pwd`, `estado`, `id_cola`, `id_perfil`)
VALUES ('atomasto',AES_ENCRYPT('atomasto','S3rver@.@Net'), 1, 2 , 1);

INSERT INTO usuarios (`usu`, `pwd`, `estado`, `id_cola`, `id_perfil`)
VALUES ('jrivera',AES_ENCRYPT('jrivera','S3rver@.@Net'), 1, 3, 1);

/* SELECT * FROM usuarios */

/*****************************************/
/******** PERFILES */
/*****************************************/

INSERT INTO perfil (`id_perfil`, `perfil`, `estado`)
VALUES (1,'admintotal',1);


/*****************************************/
/******** ESTADO MOV */
/*****************************************/

INSERT INTO estado_mov (`est1`,`est2`,`estado`) VALUES ('Emitido','Emite Tramite',1) ;
INSERT INTO estado_mov (`est1`,`est2`,`estado`) VALUES ('Derivado','En proceso',1) ;
INSERT INTO estado_mov (`est1`,`est2`,`estado`) VALUES ('Resuelto','Resuelto',1) ;
INSERT INTO estado_mov (`est1`,`est2`,`estado`) VALUES ('Rechazado','Rechazado',1) ;
 



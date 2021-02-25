use DB_School;

/* DESACTIVAR CONSTRAINTS FOREIGN KEY */

SET FOREIGN_KEY_CHECKS = 0;

/*****************************************/
/******** AREAS */
/*****************************************/

INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('System32',1,1);

-- > SUPUESTOS
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Administracion',1,1);
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Psicologia',1,1);
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Pedagogia',1,1);
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Contable',1,1);
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Mantenimiento',1,1);
INSERT INTO  area (`area`,`estado`,`id_usu`) VALUES ('Informatica',1,1);

-- select * from AREA ;
/*****************************************/
/******** CARGOS */
/*****************************************/

INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Developer',now(),1,1,1);

-- > SUPUESTOS
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Director',now(),1,2,1);
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Psicologo',now(),1,3,1);
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Docente',now(),1,4,1);
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Contador',now(),1,5,1);
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Soporte Informatico',now(),1,7,1);
INSERT INTO cargo (`cargo`,`fec_reg`,`estado`, `id_area`, `id_usu`) VALUES  ('Auxiliar',now(),1,4,1);

select * from Cargo;
/*****************************************/
/****** COLABORADOR */
/*****************************************/

/*ALTER TABLE colaborador MODIFY id_colaborador INT; */

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('SystemT','','','M',null,'','',1,1,'DNI','00000000',1,'RESERVADO',CURDATE());

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('SystemR','','','M',null,'','',1,1,'DNI','00000000',1,'RESERVADO',CURDATE());

-- > SUPUESTOS
/*
INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('Profe Pepito','apeP','maternP','M',null,'','',1,4,'DNI','00000000',1,'ACTIVO',CURDATE());

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('Profe Martiza','apeM','materM','F',null,'','',1,4,'DNI','00000000',1,'ACTIVO',CURDATE());

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('Psico Pipi','apeP','matP','M',null,'','',1,3,'DNI','00000000',1,'ACTIVO',CURDATE());

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('Director Juan','apeJ','matJ','M',null,'','',1,2,'DNI','00000000',1,'ACTIVO',CURDATE());

INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`sexo`,`fec_nac`,`domicilio`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`)
VALUES ('Aux Fredy','apeF','matF','M',null,'','',1,7,'DNI','00000000',1,'ACTIVO',CURDATE());
*/

-- Select * from colaborador;

/* NO DA
ALTER TABLE colaborador MODIFY id_colaborador INT NOT NULL AUTO_INCREMENT ;
ALTER TABLE colaborador CHANGE COLUMN `id_colaborador` `id_colaborador` INT NOT NULL AUTO_INCREMENT;
ALTER TABLE tablename AUTO_INCREMENT SET 1;
*/

/*select * from COLABORADOR;*/

/*****************************************/
/******** CATEGORIA FORMULARIO  */
/*****************************************/
INSERT INTO CAT_FORM (`cat_form`) values ('Docente');
INSERT INTO CAT_FORM (`cat_form`) values ('Piscologico');
INSERT INTO CAT_FORM (`cat_form`) values ('Auxiliar');
INSERT INTO CAT_FORM (`cat_form`) values ('Seguridad');
INSERT INTO CAT_FORM (`cat_form`) values ('Academico');



/*****************************************/
/******** FORMULARIOS  */
/*****************************************/

INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Ciclo',1,5);
INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Periodo',1,5);
INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Calificaciones',1,1);
INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Seguimiento Emocional',1,2);
INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Incidente',1,3);
INSERT INTO formulario (`formulario`,`estado`,`id_cat_form`)VALUES ('Usuarios',1,4);

-- select * from formulario;

/*****************************************/
/******** PERFIL */
/*****************************************/

INSERT INTO perfil (`perfil`,`estado`) VALUES ('Administrador',1);
INSERT INTO perfil (`perfil`,`estado`) VALUES ('Docente',1);
INSERT INTO perfil (`perfil`,`estado`) VALUES ('Auxiliar',1);
INSERT INTO perfil (`perfil`,`estado`) VALUES ('Psicologo',1);

/*****************************************/
/******** FORMULARIOS_ PERFIL  */
/*****************************************/

INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (1,1,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (2,1,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (3,1,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (4,1,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (5,1,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (3,2,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (4,4,1);
INSERT INTO formulario_perfil (`id_form`,`id_perfil`,`estado`) values (5,3,1);

-- select * from formulario_perfil;

/*****************************************/
/******** USUARIOS */
/*****************************************/

INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('atomasto',AES_ENCRYPT('a1con9v','S3rver@.@Net'),1,1,1,1,now());
INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('jrivera',AES_ENCRYPT('password','S3rver@.@Net'),1,2,1,1,now());

-- > SUPUESTOS
/*
INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('ppepito',AES_ENCRYPT('ppepito','S3rver@.@Net'),1,3,2,1,now());

INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('pmaria',AES_ENCRYPT('pmaria','S3rver@.@Net'),1,4,2,1,now());

INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('ppipi',AES_ENCRYPT('ppipi','S3rver@.@Net'),1,5,4,1,now());

INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('djuan',AES_ENCRYPT('djuan','S3rver@.@Net'),1,6,1,1,now());

INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
VALUES ('afredy',AES_ENCRYPT('afredy','S3rver@.@Net'),1,7,3,1,now());
*/

/* 
SELECT  *, cast(aes_decrypt(pwd, 'S3rver@.@Net') as char) as 'Descifrado'  FrOM USUARIOS; 
*/


INSERT INTO `db_school`.`ciclo` (`ciclo`,`anio`,`fec_ini`,`fec_fin`,`estado`,`id_usu`)
VALUES ('2020',2020,'2020/01/01','2020/12/30',1,1);

-- SELECT * FROM CICLO;

 INSERT INTO `db_school`.`periodo` (`periodo`, `id_ciclo`, `fec_ini`, `fec_fin`, `estado`, `id_usu`)
 VALUES  ('2020',1,'2020/03/01','2020/12/30',1,1);
 
 -- SELECT * from periodo;

INSERT INTO `db_school`.`nivel` ( `nivel`, `estado`,`id_usu`)  VALUES ('PRIMARIA',1,1);
INSERT INTO `db_school`.`nivel` ( `nivel`, `estado`,`id_usu`)  VALUES ('SECUNDARIA',1,1);

-- SELECT * FROM nivel;

INSERT INTO `db_school`.`grado` ( `grado`, `id_nivel`, `estado`, `id_usu`) VALUES
('1',2,1,1), ('2',2,1,1),('3',2,1,1),('4',2,1,1),('5',2,1,1);

-- SELECT * from GRADO

INSERT INTO `db_school`.`seccion` (`seccion`,`estado`,`id_usu`,`id_ciclo`,`id_colaborador`, `fec_reg`,`id_grado`) VALUES
('A',1,1,1,1, CURDATE() , 1 ), ('B',1,1,1,1, CURDATE(), 1 ), 
('C',1,1,1,1, CURDATE() , 1 ), ('D',1,1,1,1, CURDATE(), 1 ), 
('E',1,1,1,1, CURDATE() , 1 ), ('F',1,1,1,1, CURDATE(), 1 ), 

('A',1,1,1,1, CURDATE() , 2 ), ('B',1,1,1,1, CURDATE(), 2 ), 
('C',1,1,1,1, CURDATE() , 2 ), ('D',1,1,1,1, CURDATE(), 2 ), 
('E',1,1,1,1, CURDATE() , 2 ), ('F',1,1,1,1, CURDATE(), 2 ), ('G',1,1,1,1, CURDATE() , 2 ),

('A',1,1,1,1, CURDATE() , 3 ), ('B',1,1,1,1, CURDATE(), 3 ), 
('C',1,1,1,1, CURDATE() , 3 ), ('D',1,1,1,1, CURDATE(), 3 ), 
('E',1,1,1,1, CURDATE() , 3 ), ('F',1,1,1,1, CURDATE(), 3 ),
('G',1,1,1,1, CURDATE() , 3 ), ('H',1,1,1,1, CURDATE(), 3 ),

('A',1,1,1,1, CURDATE() , 4 ), ('B',1,1,1,1, CURDATE(), 4 ), 
('C',1,1,1,1, CURDATE() , 4 ), ('D',1,1,1,1, CURDATE(), 4 ), 
('E',1,1,1,1, CURDATE() , 4 ), ('F',1,1,1,1, CURDATE(), 4 ),

('A',1,1,1,1, CURDATE() , 5 ), ('B',1,1,1,1, CURDATE(), 5 ), 
('C',1,1,1,1, CURDATE() , 5 ), ('D',1,1,1,1, CURDATE(), 5 ), 
('E',1,1,1,1, CURDATE() , 5 ), ('F',1,1,1,1, CURDATE(), 5 ),
('G',1,1,1,1, CURDATE() , 5 );

-- SELECT * from SECCION
  

INSERT INTO `db_school`.`estudiante`
(`nombres`, `ap_paterno`, `ap_materno`,
 `sexo`,`estado`,`fec_reg`,
 `tipo_doc`, `nro_doc`, `id_usu`, `situacion`, `correo`)
SELECT
TRIM(substring( ALUMNO ,  POSITION("," IN Alumno)+1 , ( length(ALUMNO) -  POSITION(" " IN Alumno) )  )), -- NOMBRES
TRIM(LEFT (ALUMNO ,  POSITION(" " IN Alumno) ) ), -- 'PATERNO' 
trim(substring( ALUMNO ,  POSITION(" " IN Alumno) , ( POSITION("," IN Alumno)-  POSITION(" " IN Alumno) )  )), -- 'MATERNO' ,
SEXO,1,CURDATE(),
'DNI',DNI,1,'A',correo FROM migrate_;

-- SELECT * from estudiante
-- WHERE correo is null
 
 /*
SELECT DNI,ALUMNO,
LEFT (ALUMNO ,  POSITION(" " IN Alumno) ) 'PATERNO' ,
substring( ALUMNO ,  POSITION(" " IN Alumno) , ( POSITION("," IN Alumno)-  POSITION(" " IN Alumno) )  ) 'MATERNO',
substring( ALUMNO ,  POSITION("," IN Alumno)+1 , ( length(ALUMNO) -  POSITION(" " IN Alumno) )  ) 'NOMBRES' 
,SEXO,correo  FROM migrate_ ;
*/
-- SELECT * FROM migrate_

INSERT INTO `db_school`.`curso` (`curso`,`estado`,`id_usu`,`fec_reg`, `abrev`) VALUES
('COMUNICACIÓN',1,1,curdate(),'COMU'),
('MATEMATICA',1,1,curdate(),'MAT'),
('EDUCACION RELIGIOSA',1,1,curdate(),'EDREL'),
('EDUCACION PARA EL TRABAJO',1,1,curdate(),'EPT'),
('INGLES',1,1,curdate(),'INGLES'),
('CIENCIAS SOCIALES',1,1,curdate(),'CCSS'),
('DPCC',1,1,curdate(),'DPCC'),
('EDUCACION FISICA',1,1,curdate(),'EDFS'),
('ARTE',1,1,curdate(),'ARTE'),
('CIENCIA Y AMBIENTE',1,1,curdate(),'CTA'),
('DESARROLLO PERSONAL Y CIUDADANIA',1,1,curdate(),'DPC');


INSERT INTO `db_school`.`matricula` ( `id_ciclo`, `id_estudiante`, `fecha_doc`, `fecha_reg`, `estado`, `id_seccion`, `id_usu`) 
SELECT 
1, id_estudiante,CURDATE(),CURDATE(),1,id_seccion,1 from ESTUDIANTE E INNER JOIN migrate_ M on E.correo = M.correo
INNER JOIN SECCION S on M.grado = S.id_GRADO and M.seccion = S.SECCION;
 
 
INSERT INTO colaborador (`nombres`,`ap_paterno`,`ap_materno`,`cel`,`estado`,`id_cargo`,`tipo_doc`,`nro_doc`,`id_usu`,`situacion`,`fec_reg`,`Cod_MODULAR`,`id_nivel`,`tipo_contrato`,`correo`)
SELECT 
Nombres,Ape_Paterno,Ape_Materno,Celular,1,4,'DNI',DNI,1,'A',CURDATE(),Cod_Modular,2,left(Situacion,1),correo from migrate_docentes;

 /*
 select  count(*) from migrate_ M inner join Estudiante E on M.correo = E.correo inner join Seccion S on M.grado = S.id_grado and M.seccion = S.seccion;

SELECT count(*) from migrate_
*/

-- select * from matricula


-- truncate table clase;

INSERT INTO `db_school`.`clase` (`clase`,`id_curso`,`id_colaborador`,`id_ciclo`,`can_evaluaciones`,`fec_reg`,`estado`,`id_usu`,`id_seccion`) VALUES
-- ---------   CUR  COL 
('CCSS S 1-D',  6,  21,   1,4,curdate(),1,1,4),
('CCSS S 1-E',  6,  21,   1,4,curdate(),1,1,5),
('CCSS S 1-F',  6,  21,   1,4,curdate(),1,1,6),

('CCSS S 1-A',  6,  10,   1,4,curdate(),1,1,1),
('CCSS S 1-B',  6,  10,   1,4,curdate(),1,1,2),
('CCSS S 1-C',  6,  10,   1,4,curdate(),1,1,3),
('CCSS S 2-A',  6,  10,   1,4,curdate(),1,1,7),
('CCSS S 2-B',  6,  10,   1,4,curdate(),1,1,8),
('CCSS S 2-C',  6,  10,   1,4,curdate(),1,1,9),

('CCSS S 4-A',  6,  51,   1,4,curdate(),1,1,22),
('CCSS S 4-B',  6,  51,   1,4,curdate(),1,1,23),
('CCSS S 4-C',  6,  51,   1,4,curdate(),1,1,24),
('CCSS S 4-D',  6,  51,   1,4,curdate(),1,1,25),
('CCSS S 4-E',  6,  51,   1,4,curdate(),1,1,26),
('CCSS S 4-F',  6,  51,   1,4,curdate(),1,1,27),

('CCSS S 2-D',6,33,1,4,curdate(),1,1,10),
('CCSS S 2-E',6,33,1,4,curdate(),1,1,11),
('CCSS S 2-F',6,33,1,4,curdate(),1,1,12),
('CCSS S 2-G',6,33,1,4,curdate(),1,1,13),
('CCSS S 3-A',6,33,1,4,curdate(),1,1,14),
('CCSS S 3-B',6,33,1,4,curdate(),1,1,15),



('CCSS S 5-B',6,55,1,4,curdate(),1,1,29),
('CCSS S 5-C',6,55,1,4,curdate(),1,1,30),
('CCSS S 5-D',6,55,1,4,curdate(),1,1,31),
('CCSS S 5-E',6,55,1,4,curdate(),1,1,32),
('CCSS S 5-F',6,55,1,4,curdate(),1,1,33),
('CCSS S 5-G',6,55,1,4,curdate(),1,1,34),

('CCSS S 3-C',6,52,1,4,curdate(),1,1,16),
('CCSS S 3-D',6,52,1,4,curdate(),1,1,17),
('CCSS S 3-E',6,52,1,4,curdate(),1,1,18),
('CCSS S 3-F',6,52,1,4,curdate(),1,1,19),
('CCSS S 3-G',6,52,1,4,curdate(),1,1,20),
('CCSS S 3-H',6,52,1,4,curdate(),1,1,21),

('CCSS S 5-A',6,56,1,4,curdate(),1,1,28),

-- ---------   CUR  COL 
('RELI S 4-A',  3,  43 ,1,4,curdate(),1,1,22),
('RELI S 4-B',  3,  43 ,1,4,curdate(),1,1,23),
('RELI S 4-C',  3,  43 ,1,4,curdate(),1,1,24),
('RELI S 4-D',  3,  43 ,1,4,curdate(),1,1,25),
('RELI S 4-E',  3,  43 ,1,4,curdate(),1,1,26),

('RELI S 5-A',  3,  43 ,1,4,curdate(),1,1,28),
('RELI S 5-B',  3,  43 ,1,4,curdate(),1,1,29),
('RELI S 5-C',  3,  43 ,1,4,curdate(),1,1,30),
('RELI S 5-D',  3,  43 ,1,4,curdate(),1,1,31),
('RELI S 5-E',  3,  43 ,1,4,curdate(),1,1,32),
('RELI S 5-F',  3,  43 ,1,4,curdate(),1,1,33),
('RELI S 5-G',  3,  43 ,1,4,curdate(),1,1,34);

-- select * from clase

-- ('RELI S 1-A',  3,  5  ,1,4,curdate(),1,1,34),

-- select * from CURSO
-- Only To format 3

-- update clase set can_evaluaciones = 3 where id_usu=1; 
-- update clase set can_evaluaciones = 2 where id_clase = 5

-- update calificaciones set C1 = null,c2=null,c3=null,c4=null where id_clase = 4


-- -------------------------------------------------------------------------
-- POR CADA CLASE CREADA SE INSERTARAN DATOS DE ALUMNO EN la TABLA NOTAS
-- ya que una clase contiene alumnos y estos seran evaluados con notas


INSERT INTO `db_school`.`calificaciones` (`estado`,`id_periodo`,`id_clase`,`id_estudiante`,`id_usu`)
SELECT
1,1, C.id_clase,E.id_Estudiante,1
from estudiante E inner join Matricula M on e.id_estudiante = M.id_estudiante inner join Clase C on M.id_seccion = C.id_seccion;

-- -----------------------------------------------------------------------
-- SELECT C.clase ,E.*  from estudiante E inner join Matricula M on e.id_estudiante = M.id_estudiante inner join Clase C on M.id_seccion = C.id_seccion -- where id_seccion = 1



/*
select * from colaborador WHERE trim(ap_paterno) =  'HURTADO' -- and TRIM(ap_materno) = 'ROSALES'

SELECT * from Seccion where id_grado = 5
*/



/*
INSERT INTO  `db_school`.`clase` (`clase`,`id_curso`,`id_colaborador`,`id_ciclo`,`can_evaluaciones`,`fec_reg`,`estado`,`id_usu`,`id_seccion`)
SELECT
CU.abrev ,CU.id_curso,id_Colaborador,1,4, CURDATE(),1,1,
from migrate_docentes MD inner join colaborador C on MD.Correo = C.correo inner join curso CU on  MD.areas_a_Cargo = CU.curso;
*/



/*
SELECT * from migrate_docentes MD inner join colaborador C on MD.Correo = C.correo inner join curso CU on  MD.areas_a_Cargo = CU.curso;

SELECT  * from curso;
SELECT DISTINCT(Areas_a_Cargo)  from migrate_docentes;
*/



SET FOREIGN_KEY_CHECKS = 1;


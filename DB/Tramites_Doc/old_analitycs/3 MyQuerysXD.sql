use DB_School;

/* ALTER IS NOT SUPPORT IN THIS COMMIT :
 https://www.mysqltutorial.org/mysql-stored-procedure/alter-stored-procedure/#:~:text=So%20you%20need%20to%20add,and%20click%20the%20Apply%20button.
 
  Only Drop and ReCreate
*/

DELIMITER //
CREATE procedure Tsp_Insert_Usuario
(
 /*id_usu int,*/
 usu_ varchar(70) ,
 pwd_ varchar(70) ,
 id_colaborador_ int,
 id_perfil_ int 
)
begin
/*if id_usu = 0 then*/ /* GRABA */

DECLARE id_usu_ int;

	INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
	VALUES (usu_,AES_ENCRYPT(pwd_,'S3rver@.@Net'),1,id_colaborador_,id_perfil_,1,now());
    

SET id_usu_ = LAST_INSERT_ID();
    
/*
else    Actualiza NO IMPLEMENTADO 

	INSERT INTO  usuarios (`usu`,`pwd`,`estado`,`id_colaborador`,`id_perfil`, `estado_usu`,`fec_reg`) 
	VALUES (usu_,AES_ENCRYPT(pwd_,'S3rver@.@Net'),1,id_colaborador_,id_perfil_,1,now());

end if;
*/
 

SELECT id_usu_ 'id_usu', nombres , ap_paterno, ap_materno from colaborador c where c.id_colaborador = id_colaborador_  ;

end 
//
DELIMITER ;

-- CALL Tsp_Insert_Usuario ('admin5','pwd$123',1,1); 


DELIMITER //
CREATE procedure Tsp_Login
(
 usu_ varchar(70) ,
 pwd_ varchar(70)
)
begin

/*	
SELECT  u.id_usu,id_perfil,c.nombres 'Colaborador' FrOM USUARIOS u RIGHT join  colaborador c on u.id_colaborador = c.id_colaborador
where u.usu like usu_  and cast(aes_decrypt(u.pwd, 'S3rver@.@Net') as char) like pwd_;
*/

SELECT  u.id_usu,id_perfil, c.nombres , c.ap_paterno, c.ap_materno FrOM USUARIOS u  inner join colaborador c on u.id_colaborador = c.id_colaborador
where u.usu like usu_  and cast(aes_decrypt(u.pwd, 'S3rver@.@Net') as char) like pwd_;

end 
//
DELIMITER ;



DELIMITER //
Create procedure Tsp_IU_curso
(
id_curso_ int,
 curso_ varchar(70) ,
 id_usu_ varchar(70)
)
begin
IF ID_CURSO_ = 0 THEN
	INSERT INTO curso(`CURSO`,`ESTADO`,`ID_USU`,`FEC_REG`) VALUES ( curso_,1,id_usu_,NOW());    
    SET id_curso_ = LAST_INSERT_ID();
ELSE
	UPDATE CURSO SET CURSO = curso_, ID_USU= ID_USU_ WHERE id_curso = ID_CURSO_ ;
END IF ;
	SELECT id_curso_ 'id_curso';    
end 
//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE Tsp_lista_cursos
()
begin
	select * from curso where estado = 1 ;
end
//
DELIMITER ;

-- call Tsp_lista_cursos()

DELIMITER //
Create procedure Tsp_Del_curso
(
id_curso_ int
)
begin
	UPDATE CURSO SET estado = 0 WHERE id_curso = ID_CURSO_ ;  
end 
//
DELIMITER ;






 

-- CALL Tsp_Login ('atomasto','a1con9v');

/************************************************************************************************************************************/
/******************************************************************* ALTERN *********************************************************/
/************************************************************************************************************************************/
/*
DELIMITER //
CREATE procedure Tsp_Max_id_Usu
()
begin
	select max(id_usu) as id_usu from usuarios ;
end 
//
DELIMITER ;

-- call Tsp_Max_id_Usu
*/

DELIMITER //
CREATE procedure Tsp_Get_datos_usu_x_IdUsu
(
 id_usu_ int
 )
begin
	SELECT  u.id_usu,p.id_perfil,p.perfil,u.usu, concat(c.nombres,' ' ,c.ap_paterno,' ' ,c.ap_materno) 'Colaborador' 
	FrOM USUARIOS u RIGHT join  colaborador c on u.id_colaborador = c.id_colaborador inner join Perfil p on u.id_perfil = p.id_perfil
    where u.id_usu = id_usu_;  
end 
//
DELIMITER ;

-- call Tsp_Get_datos_usu_x_IdUsu (4);

DELIMITER //
CREATE procedure Tsp_Get_Forms_x_idPerfil
(
 id_perfil_ int
 )
begin
	SELECT id_form  from Formulario_perfil 
    where id_perfil = id_perfil_ and estado = 1;
end 
//
DELIMITER ;

-- call Tsp_Get_Forms_x_idPerfil (1)

DELIMITER //
CREATE procedure Tsp_Get_Cat_Forms_x_idPerfil
(
 id_perfil_ int
 )
begin
	select distinct(id_cat_form) from FOrmulario_perfil fp inner join Formulario f on fp.id_form = f.id_form 
    where fp.id_perfil = id_perfil_;
end 
//
DELIMITER ;

-- CALL Tsp_Get_Cat_Forms_x_idPerfil (1);
-- CALL Tsp_Get_Cat_Forms_x_idPerfil (4);

-- perfil -> FOrmularios -> CAT_FORM

-- --------------------
-- 31/08/20 -----------
-- --------------------

DELIMITER //
CREATE procedure Tsp_Get_Grados_x_idColaborador
(
 id_colaborador_ int
 )
begin
	select distinct(S.id_grado)'id_grado',grado from clase C inner join seccion S on c.id_seccion = S.id_seccion inner join grado G on S.id_grado = G.id_grado
    where C.id_colaborador = id_colaborador_;	
end 
//
DELIMITER ;

-- CALL Tsp_Get_Grados_x_idColaborador (55);

DELIMITER //
CREATE procedure Tsp_Get_seccion_x_idColaborador_idGrado
(
 id_colaborador_ int,
 id_grado_ int
 )
begin
	select S.* from clase C inner join seccion S on c.id_seccion = S.id_seccion
    where C.id_colaborador = id_colaborador_ and S.id_grado = id_grado_;	
end 
//
DELIMITER ;

-- CAll Tsp_Get_seccion_x_idColaborador_idGrado (55,5)

DELIMITER //
CREATE procedure Tsp_Get_Clase_x_idColaborador_idseccion
(
 id_colaborador_ int,
 id_seccion_ int
 )
begin
	select  * from CLASE where 	id_seccion = id_seccion_ and id_colaborador =id_colaborador_;
end 
//
DELIMITER ;

CALL Tsp_Get_Clase_x_idColaborador_idseccion (10,1)

select * from seccion


DELIMITER //
CREATE procedure Tsp_Get_Alumnos_x_seccion
(
 id_seccion_ int 
 )
begin

	-- DECLARE @row_ int;
	SET @row_= 0; 

	SELECT @row_:= @row_+1 AS `Orden`,E.id_estudiante,
    concat(ap_paterno , ' ' , ap_materno , ', ' , nombres) 'Alumno'    
    from estudiante E inner join Matricula M on e.id_estudiante = M.id_estudiante where id_seccion = id_seccion_	
    order by ap_paterno asc;
    
end 
//
DELIMITER ;

call Tsp_Get_Alumnos_x_seccion (3)

/*
DELIMITER //
CREATE procedure Tsp_Get_NotasAlumnos_x_Clase_Cx
(
 id_clase_ int ,
 Cx int
 )
begin

IF Cx = 1 then
	
    SET @row_= 0; 

	SELECT
    @row_:= @row_+1 AS `Orden`,
    concat(ap_paterno , ' ' , ap_materno , ', ' , nombres) 'Alumno' ,
    C1 'C',E.id_estudiante,Ca.id_Calificacion from Calificaciones Ca inner join estudiante E on Ca.id_estudiante = E.id_estudiante
    where id_clase = id_clase_
    order by ap_paterno asc;

ELSEIF Cx = 2 then

    SET @row_= 0; 

	SELECT
    @row_:= @row_+1 AS `Orden`,
    concat(ap_paterno , ' ' , ap_materno , ', ' , nombres) 'Alumno' ,
    C2 'C',E.id_estudiante,Ca.id_Calificacion from Calificaciones Ca inner join estudiante E on Ca.id_estudiante = E.id_estudiante
    where id_clase = id_clase_
    order by ap_paterno asc;
    
ELSEIF Cx = 3 then

 SET @row_= 0; 

	SELECT
    @row_:= @row_+1 AS `Orden`,
    concat(ap_paterno , ' ' , ap_materno , ', ' , nombres) 'Alumno' ,
    C3 'C',E.id_estudiante,Ca.id_Calificacion from Calificaciones Ca inner join estudiante E on Ca.id_estudiante = E.id_estudiante
    where id_clase = id_clase_
    order by ap_paterno asc;
    
END IF;
    
end 
//
DELIMITER ;

CALL Tsp_Get_NotasAlumnos_x_Clase_Cx (4,1)
*/

DELIMITER //
CREATE procedure Tsp_Get_NotasAlumnos_x_Clase
(
 id_clase_ int 
 )
begin

    SET @row_= 0; 

	SELECT
    @row_:= @row_+1 AS `Orden`,
    concat(ap_paterno , ' ' , ap_materno , ', ' , nombres) 'Alumno' ,
    CASE C1 when -1 then null ELSE C1 END 'C1' ,
    CASE C2 when -1 then null ELSE C2 END 'C2' ,
    CASE C3 when -1 then null ELSE C3 END 'C3' ,
    CASE C4 when -1 then null ELSE C4 END 'C4' ,
    E.id_estudiante,Ca.id_Calificacion from Calificaciones Ca inner join estudiante E on Ca.id_estudiante = E.id_estudiante
    where id_clase = id_clase_
    order by ap_paterno asc;

    
end 
//
DELIMITER ;

-- select * from Calificaciones where id_clase = 4
-- CALL Tsp_Get_NotasAlumnos_x_Clase (4)


DELIMITER //
CREATE procedure Tsp_Up_NotasAlumnos_x_IdCalificacion_C1_C2_C3_CanEval
(
 Id_Calificacion_ int,
 C1_ int,
 C2_ int,
 C3_ int,
 CanEval_ int
 )
begin

IF CanEval_ = 1 then
	Update calificaciones set c1 = C1_  where id_calificacion = Id_Calificacion_ ;
    
ELSEIF CanEval_ = 2 then
	Update calificaciones set c1 = C1_ , C2 = C2_  where id_calificacion = Id_Calificacion_ ;

ELSEIF CanEval_ = 3 then
	Update calificaciones set c1 = C1_ , C2 = C2_ , C3 = C3_ where id_calificacion = Id_Calificacion_ ;

END IF;

end 
//
DELIMITER ;

-- 
-- select * from calificaciones where id_calificacion = 3
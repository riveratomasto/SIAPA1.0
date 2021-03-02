use SysTraDoc;

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

    INSERT INTO usuarios (`usu`, `pwd`, `estado`, `id_cola`, `id_perfil`)
	VALUES (usu_,AES_ENCRYPT(pwd_,'S3rver@.@Net'),1,id_colaborador_,id_perfil_);
    
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

SELECT  u.id_usuario,id_perfil, c.nom , c.pat, c.mat FrOM USUARIOS u  inner join colaborador c on u.id_cola = c.id_cola
where u.usu like usu_  and cast(aes_decrypt(u.pwd, 'S3rver@.@Net') as char) like pwd_;

end 
//
DELIMITER ;

-- CALL Tsp_Login ('atomasto','atomasto'); 

DELIMITER //
CREATE procedure Tsp_Get_datos_usu_x_IdUsu
(
 id_usu_ int
 )
begin
	SELECT  u.id_usuario,p.id_perfil,p.perfil,u.usu, concat(c.nom,' ' ,c.pat,' ' ,c.mat) 'Colaborador' 
	FrOM USUARIOS u RIGHT join  colaborador c on u.id_cola = c.id_cola inner join Perfil p on u.id_perfil = p.id_perfil
    where u.id_usuario = id_usu_;  
end 
//
DELIMITER ;


DELIMITER //
create procedure TSP_FUT_INS
(
 nom_ varchar(100),
 pat_ varchar(80),
 mat_ varchar(80),
 email_ varchar(80),
 cel_ varchar(10),
 tel_ varchar(10),
 direccion_ varchar(150),
 dt_fut_ text,
 url_adjuntos_ varchar(150),
 num_folios_ varchar(3),
 num_doc_ varchar(20),
 tipo_doc_  char(3),
 titulo_fut_ varchar(250)
 )
begin

DECLARE id_FUT_ int;

INSERT INTO fut (`nom`,`pat`,`mat`,`email`,`cel`,`tel`,`direccion`,`dt_fut`,`url_adjuntos`,`num_folios`,`fecha_reg`,`estado`,`num_doc`,`tipo_doc`,`titulo_fut`,`prioridad`,`id_est_mov`)
VALUES (nom_,pat_,mat_,email_,cel_,tel_,direccion_,dt_fut_,url_adjuntos_,num_folios_,NOW(),1,num_doc_,tipo_doc_,titulo_fut_,1,1);

SET id_FUT_ = LAST_INSERT_ID();

INSERT INTO movimientos (`fecha_reg`,`obs`,`url_adjunto`,`estado`,`id_fut`,`area_origen`,`area_destino`,`id_est_mov`,`id_usuario`,`flag`)
VALUES (now(),'','',1,id_FUT_,1,2,1,1,1);

select id_FUT_ as id_FUT;

end 
//
DELIMITER ;

-- SHOW CREATE PROCEDURE TSP_FUT_INS;


-- select * from FUT;


-- EMITIDOS / visible solo por MESA DE PARTES

DELIMITER //
CREATE procedure TSP_INBOX_1 ( )
begin
	-- HelpDesk Imbox 
	select id_fut,titulo_fut,tipo_doc,num_doc,fecha_reg,est1 from FUT F inner join estado_mov E on F.id_est_mov = E.id_est_mov
	where id_fut in ( select id_fut from Movimientos where area_destino = 2 and flag = 1) and F.estado = 1;
end 
//
DELIMITER ;

-- call  TSP_INBOX_1 ( );

DELIMITER //
CREATE procedure TSP_INBOX_2 
(
id_area_ int
)
begin
	-- Imbox all but not include helpDesk
    select F.id_fut,titulo_fut,A.area'Area_Origen',prioridad,M.fecha_reg,est1 
    from FUT F inner join estado_mov E on F.id_est_mov = E.id_est_mov inner join Movimientos M on F.id_fut = M.id_fut inner join areas A on M.area_origen = A.id_area
    where /*M.area_destino <> 2 and */  M.area_destino = id_area_ and flag = 1 and F.estado = 1;   
end 
//
DELIMITER ;

/*
call TSP_INBOX_2 (2);

select * from areas;
select * from Movimientos
*/

/* ANDY GAY */




DELIMITER //
create procedure TSP_MOV_INS
(
 area_origen_ int,
 area_destino_ int,
 obs_ text,
 url_adjuntos_ varchar(150),
 id_FUT_ int,
 id_usuario_ int,
 tipo_ int -- 1 = DERIVA / 2 = Resuelve / 3 = Rechaza
 )
begin

Declare _iDeriva int; -- CONTADOR DE DERIVACIONES

-- FLAG
update movimientos set flag = 0 where id_FUT = id_FUT_;

INSERT INTO movimientos (`fecha_reg`,`obs`,`url_adjunto`,`estado`,`id_fut`,`area_origen`,`area_destino`,`id_est_mov`,`id_usuario`,`flag`)
VALUES (now(),obs_,url_adjuntos_,1,id_FUT_,area_origen_,area_destino_,2,id_usuario_,1);

	if tipo_ = 1 then

		-- 1ERA DERIVACION
		select _iDeriva = count(*) from movimientos where id_FUT = id_FUT_ ;
		
		if _iDeriva = 2  then -- ( el 1ero es de emisor a MESa partes + 2do es la primera derivacion )
			-- CREAR CARGO FUT + GENERAR NRO FUT + COMUNICAR AL USAUARIO
			set @gato = null;
		end if;
		   
	elseif tipo_ = 2 then		
		Update FUT set id_est_mov = 3; -- ACTUALIZA EL ESTAOD A RESUELTO 		
	elseif tipo_ = 3 then		
		Update FUT set id_est_mov = 4; -- ACTUALIZA EL ESTAOD A RECHAZADO 

	end if;

end 
//
DELIMITER ;


DELIMITER //
CREATE procedure TSP_PRI_FUT
(
id_FUT_ int,
prioridad_ int
)
begin
	 update FUT set prioridad = prioridad_ where id_fut = id_FUT_;
end 
//
DELIMITER ; 



 
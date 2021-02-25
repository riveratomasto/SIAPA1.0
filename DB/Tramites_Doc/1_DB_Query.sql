/**DROP DATABASE SystraDoc;*/

Create Database SystraDoc;

use SystraDoc;

/* INSTRUCTIVO :
 ERWIN generaba mal el autoincremente x eso -> 1: busca esta cadena  'INT N@T NULL' (omite '' y cambia @ = A)  2: Reemplaza por ' INT N@T NULL AUTO_INCREMENT'  
 La tabla: Formulario_perfil , cursos_profe -> QUitar el AutoIncrement
 */
 
CREATE TABLE Areas
(
	id_area              INT NOT NULL AUTO_INCREMENT,
	area                 VARCHAR(80) NULL,
	estado               BIT NULL,
	fecha_reg            DATETIME NULL,
	PRIMARY KEY (id_area)
);



CREATE TABLE Cargo_Colaborador
(
	id_cargo_cola        INT NOT NULL AUTO_INCREMENT,
	cargo                VARCHAR(80) NULL,
	PRIMARY KEY (id_cargo_cola)
);



CREATE TABLE Cargo_FUT
(
	id_cargo_fut         INT NOT NULL AUTO_INCREMENT,
	id_fut               INT NULL,
	pwd_cargo_fut        CHAR(5) NULL,
	fecha                DATETIME NULL,
	estado               BIT NULL,
	url_sello            VARCHAR(150) NULL,
	id_usuario           INT NULL,
	PRIMARY KEY (id_cargo_fut)
);



CREATE TABLE Colaborador
(
	id_cola              INT NOT NULL AUTO_INCREMENT,
	tipo_doc             CHAR(3) NULL,
	num_doc              VARCHAR(15) NULL,
	nom                  VARCHAR(100) NULL,
	email                VARCHAR(80) NULL,
	cel                  VARCHAR(10) NULL,
	fec_reg              DATETIME NULL,
	estado               BIT NULL,
	id_area              INT NULL,
	mat                  VARCHAR(80) NULL,
	pat                  VARCHAR(80) NULL,
	tel                  VARCHAR(10) NULL,
	fec_nac              DATE NULL,
	id_cargo_cola        INT NULL,
	PRIMARY KEY (id_cola)
);



CREATE TABLE ESTADO_MOV
(
	id_est_mov           INT NOT NULL AUTO_INCREMENT,
	est1                 VARCHAR(20) NULL,
	est2                 VARCHAR(20) NULL,
	estado               BIT NULL,
	PRIMARY KEY (id_est_mov)
);



CREATE TABLE Form
(
	id_form              INT NOT NULL AUTO_INCREMENT,
	formulario           VARCHAR(80) NULL,
	estado               BIT NULL,
	PRIMARY KEY (id_form)
);



CREATE TABLE Form_Perfil
(
	id_op_perfil         INT NOT NULL,
	estado               BIT NULL,
	id_perfil            INT NULL,
	id_form              INT NULL,
	PRIMARY KEY (id_op_perfil)
);



CREATE TABLE FUT
(
	id_fut               INT NOT NULL AUTO_INCREMENT,
	nro_fut              VARCHAR(30) NULL,
	nom                  VARCHAR(100) NULL,
	pat                  VARCHAR(80) NULL,
	mat                  VARCHAR(80) NULL,
	email                VARCHAR(80) NULL,
	cel                  VARCHAR(10) NULL,
	tel                  VARCHAR(10) NULL,
	direccion            VARCHAR(150) NULL,
	dt_fut               TEXT NULL,
	url_adjuntos         VARCHAR(150) NULL,
	num_folios           VARCHAR(3) NULL,
	fecha_reg            DATETIME NULL,
	estado               BIT NULL,
	num_doc              VARCHAR(20) NULL,
	tipo_doc             CHAR(3) NULL,
	titulo_fut           VARCHAR(250) NULL,
	prioridad            CHAR(1) NULL,
	id_est_mov           INT NULL,
	PRIMARY KEY (id_fut)
);



CREATE TABLE Movimientos
(
	id_mov               INT NOT NULL AUTO_INCREMENT,
	fecha_reg            DATETIME NULL,
	obs                  TEXT NULL,
	url_adjunto          VARCHAR(150) NULL,
	estado               BIT NULL,
	id_fut               INT NULL,
	area_origen          INT NULL,
	area_destino         INT NULL,
	id_est_mov           INT NULL,
	id_usuario           INT NULL,
	flag                 BIT NULL,
	PRIMARY KEY (id_mov)
);



CREATE TABLE Perfil
(
	id_perfil            INT NOT NULL AUTO_INCREMENT,
	perfil               VARCHAR(30) NULL,
	estado               BIT NULL,
	PRIMARY KEY (id_perfil)
);



CREATE TABLE Usuarios
(
	id_usuario           INT NOT NULL AUTO_INCREMENT,
	usu                  VARCHAR(30) NULL,
	pwd                  BLOB NULL,
	estado               BIT NULL,
	id_cola              INT NULL,
	id_perfil            INT NULL,
	PRIMARY KEY (id_usuario)
);



ALTER TABLE Cargo_FUT
ADD FOREIGN KEY R_66 (id_fut) REFERENCES FUT (id_fut);



ALTER TABLE Cargo_FUT
ADD FOREIGN KEY R_74 (id_usuario) REFERENCES Usuarios (id_usuario);



ALTER TABLE Colaborador
ADD FOREIGN KEY R_40 (id_area) REFERENCES Areas (id_area);



ALTER TABLE Colaborador
ADD FOREIGN KEY R_54 (id_cargo_cola) REFERENCES Cargo_Colaborador (id_cargo_cola);



ALTER TABLE Form_Perfil
ADD FOREIGN KEY R_45 (id_perfil) REFERENCES Perfil (id_perfil);



ALTER TABLE Form_Perfil
ADD FOREIGN KEY R_47 (id_form) REFERENCES Form (id_form);



ALTER TABLE FUT
ADD FOREIGN KEY R_67 (id_est_mov) REFERENCES ESTADO_MOV (id_est_mov);



ALTER TABLE Movimientos
ADD FOREIGN KEY R_33 (id_fut) REFERENCES FUT (id_fut);



ALTER TABLE Movimientos
ADD FOREIGN KEY R_58 (id_est_mov) REFERENCES ESTADO_MOV (id_est_mov);



ALTER TABLE Movimientos
ADD FOREIGN KEY R_59 (id_usuario) REFERENCES Usuarios (id_usuario);



ALTER TABLE Usuarios
ADD FOREIGN KEY R_43 (id_perfil) REFERENCES Perfil (id_perfil);



ALTER TABLE Usuarios
ADD FOREIGN KEY R_15 (id_cola) REFERENCES Colaborador (id_cola);


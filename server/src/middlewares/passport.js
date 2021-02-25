const Passport = require('passport');
// Uzaremos autentificacion local en este caso -- Esto usan para fb,google Signup
const localStrategy = require('passport-local').Strategy;

const pool = require('../database/mysqlhelper');//para Conecciones Mysql



Passport.use('local.sigin', new localStrategy({
 
    usernameField: 'usu',
    passwordField: 'pwd',
    passReqToCallback: true //--> No lo necesito

}, async(req,usu,pwd, done) => {

    const rows_u = await pool.query('CALL Tsp_Login (?, ?)', [usu,pwd] );

    //console.log(rows_u);
    
    if(rows_u[0].length > 0){
        const Rusu = rows_u[0][0];      
        return done(null,Rusu);
        
    }else{
        return done(null,false);
    }

}));


Passport.use('local.signup', new localStrategy(

    {
    usernameField: 'usu', // username = name en el html signup.hbs
    passwordField: 'pwd',
    passReqToCallback: true //-> Permitira recojer otros atributos del body
    }, 

    async (req, usu, pwd, done) => 
    {
        const {id_colaborador,id_perfil} = req.body;

        const newUser =  {usu,pwd};
    
        await pool.query('CALL Tsp_Insert_Usuarios (?, ?, ?, ?)', [newUser.usu,pwd,id_colaborador,id_perfil] );

        const Rmax = await pool.query('call Tsp_Max_id_Usu ');    
        //console.log(Rmax)
        const Rusu = Rmax[0][0]; 
        //console.log(Rusu.id_usu)

        newUser.id_usu = Rusu.id_usu; 
        return done(null,newUser);
    }

));

// EXPLAIN : https://www.it-swarm.dev/es/node.js/entender-pasaporte-serializar-deserializar/1050241925/

//Creara la Sesion del Usuario Registrado 
Passport.serializeUser( ( user, done) => {
    //LLAVE PRIMARIA DE lA SESION 
    done(null, user.id_usu); //-> user.id_usuario (fila.columna_en_BD )
} );

// LLENA DATOS A LA SESION (fila)
Passport.deserializeUser( async(req,id,done) => {
      
    //-> AQI Manda todo a Sesion : Ses_usu , por lo cual todos estos datos de SELECT  seran siempre visibles.

    await pool.query('CALL Tsp_Get_datos_usu_x_IdUsu (?)', [id], async (err,rows) => {
        if(!err){ 
                       
            //--> AQI GUARDO EL ARRAY SESSION CON FORMULARIOS PERMITIDOS !!

            //rows_perfiles = await pool.query('CALL Tsp_Get_Forms_x_idPerfil (?)', [rows[0][0].id_perfil] );            
            //req.session.Global_Perfiles =  req.session.Global_Perfiles ? rows_perfiles[0] : [];
            //req.session.Global_Perfiles =  rows_perfiles[0] ;
            
            //--> AQI GUARDO EL ARRAY GLOBAL CON LOS ID_FORMULARIOS PERMITIDOS !!
            //FUNCIONA COMO GLOBAL..
            //req.Global_Perfiles = req.Global_Perfiles ? [] : rows_perfiles[0];
            //en cualquier lugar lo recupero con => console.log(req.Global_Perfiles);

            rows_forms = await pool.query('CALL Tsp_Get_Forms_x_idPerfil (?)', [rows[0][0].id_perfil] );  
            req.Rforms =  rows_forms[0];
            //req.Rperfiles = 'VARIABLE GLOBAL LLENADA !!!!'



            done(null, rows[0][0]);
        }else{
            console.log('ERROR EN DESEARLIZADOR');
            done(err);
        }
    } )

}); 



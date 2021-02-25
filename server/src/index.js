const express = require("express");
const morgan = require("morgan");
//const path = require('path');
//const { execArgv } = require('process');
const session = require("express-session");
const MySqlStore = require("express-mysql-session");

const cors = require("cors");

//Iniziar
const app = express();

//----------------------------------------------
//--Settings Configuraciones
//----------------------------------------------
app.set("port", process.env.PORT || 4000); //-> TOma el puerto del sistema si no tomara el 4000

//----------------------------------------------
// Middlewares
//----------------------------------------------

//const {database} = require('./database/keys'); // Instancio objeto database donde se almacenan los datos de acceso a la Base de datos

app.use(
  session({
    secret: "ThisMySecretPXD",
    resave: false,
    saveUninitialized: false /*,
    store: new MySqlStore(database)*/,
  })
);

app.use(morgan("dev")); //-> Permite ver resultados x consola
app.use(cors());
app.use(express.json());

//----------------------------------------------
//Global Variables
//----------------------------------------------

/*
app.use((req,res,next) => { //- Permitira el uso de Variables

    app.locals.Ses_usu = req.Ses_usu;
    app.locals.Rforms = req.Rforms;

    next();
})
*/

//Todos los errrores
/*
app.use((error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});
*/

//----------------------------------------------
// Rutas
//----------------------------------------------

app.use(require("./routes/authentication"));

app.use("/fut", require("./routes/fut"));

// app.use("/personal", require("./routes/personal"));
// app.use("/api/notas", require("./routes/notas"));
// app.use("/api/tablas", require("./routes/tablas"));
// app.use("/estudiante", require("./routes/estudiante"));

//systradoc

app.use("/colaborador", require("./routes/colaborador"));
app.use("/personal",require("./routes/personal"));
app.use("/emitido",require("./routes/emitido"));
// app.use("/areas", require("./routes/areas"));
// app.use("/perfil", require("./routes/perfil"));
// app.use("/tipos-doc", require("./routes/tipos-doc"));
// app.use("/usuarios", require("./routes/usuarios"));





//app.use(require('./routes')); //-> automaticamente ejecutara el index.js de esa carpeta

//app.use(require('./routes/authentication'));

/*
app.use('/SysTraDoc',require('./routes/SysTraDoc')); //*HERE***********
app.use('/Mantenimiento',require('./routes/Manto_Tablas')); 
*/



//----------------------------------------------
// Starting the server
//----------------------------------------------
app.listen(app.get("port"), () => {
  console.log("servidor en el port", app.get("port"));
});

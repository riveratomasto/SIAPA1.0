const Valid_forms = {};

Valid_forms.vRol = (id_rol,dt_perfiles) => {

    for (var i = 0; i < dt_perfiles.length; i++) {

        if(dt_perfiles[i].id_form == id_rol){
             console.log(dt_perfiles[0].id_form)
             return true;
        }

     }

     return false;
     
};

module.exports = Valid_forms;
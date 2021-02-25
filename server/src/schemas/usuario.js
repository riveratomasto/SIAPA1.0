const yup = require('yup');


const schema = yup.object().shape({

    usu:  yup.string().required(),
    pwd:  yup.string().required(),
    id_colaborador: yup.number().min(1).integer().required(),
    id_perfil: yup.number().min(1).integer().required()

    /*
    name: yup.string().min(5).matches(/^[a-z]+$/).required(),
    age: yup.number().min(1).max(100).integer().required(),
    email: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/).required(),
    */
});


module.exports = schema;
 
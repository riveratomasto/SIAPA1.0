
const jwt = require('jsonwebtoken');

const config = {	llave : "09f26_-@d'l2586eZfES.a26097befa8b/*/$$2ce28" };

const llave = config.llave; 


module.exports = {

    validToken(req, res, next){

        var token = req.headers.authorization;
        
        if (token) {

        token = token.replace('Bearer ', '')

        jwt.verify(token, llave , (err, decoded) => {      
            if (err) {
            return res.json({ mensaje: 'Token inválida' });    
            } else {
            req.decoded = decoded;    
            next();
            }
        });
        } else {
            res.status(401).send({ error: "Es necesario el token de autenticación" });
        }
    }
    ,
    llavex: llave //-> Para enviarlo al otro lao
};
 
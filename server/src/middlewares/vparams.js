
//https://www.youtube.com/watch?v=ZrjEKTz_kps

//https://www.youtube.com/watch?v=Rf6mQl_xtCI


module.exports = (schema) => {

    return(req,res,next) => {

        try{

            schema.validateSync(req.body);
            next();        

        }catch (error){
            res.send(error);
            
        }
    }
};
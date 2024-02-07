const jwt= require('jsonwebtoken');
const env= require('dotenv');

//Configuro el .env
env.config();

const middlewareAuth = (req,res,next)=>{
    try{
        const head = req.headers['authorization'];
        if(!head){
            return res.status(400).json({validado: false, message:'Es necesario incluir el token en los encabezados de la solicitud Http.'});
        }

        if(head.includes(' ')=== false){
            return  res.status(400).json({validado: false, message:'La cadena del token no tiene el formato correcto. EL mismo es:  Bearer [token].'});
        }
        let token = head.split(" ")[1];
        let validate = jwt.verify(token, process.env.TOKEN) !== null ;
        if(validate){
            jwt.verify(token, process.env.TOKEN, (err, decoded) => {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        // Token expired, renew the token
                        const renewedToken = jwt.sign({ username: decoded.username }, process.env.TOKEN, { expiresIn: '1h' });
                        res.setHeader('Authorization', renewedToken);
                        req.user = decoded;
                    } else {
                        return res.status(401).json({validado: false,message:'Token invalido.'});
                    }
                } else {
                    req.user = decoded;
                }
                next();
            });
        }else {
            return res.status(400).json({validado: false, message:"No se puedo validar el token provisto."}) ;
        }
    }catch (error){
        console.error('Error en validacion Token: ', error);
        return res.status(500).json({validado: false, message:'Ocurrio un error validando el token'});
    }
}
module.exports = middlewareAuth;
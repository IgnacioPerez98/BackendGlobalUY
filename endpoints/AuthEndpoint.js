const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const env = require('dotenv');
const responses = require('../servicios/MensajesRespuestaGenericos')

//Configuro las variables de enviroments
env.config()

router.post('/token', (req,res)=>{
    try{
        const { user, password}= req.body;
        //Contrastar contra la BBDD

        let tokencito = jwt.sign({ user},process.env.TOKEN, { expiresIn: '1h' })
        return  res.status(200).json({token:tokencito});

    }catch(error){
        console.log("Error en auth endpoint:",error)
        return res.status(500).json(responses.Obtener(500));
    }
})


module.exports = router;
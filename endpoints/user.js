import express from 'express'

const router = express.Router()

// Recibe, user_name, area
router.post('/create', async function(req, res){})

router.get('/all', async function(req, res){})

router.get('/:id', async function(req, res){})

// Se recibe id del usuario
router.put('/delete', async function(req, res){})

//Cambiar contraseña, nueva contraseña, por parte del usuario estandar
router.put('/change_pwd', async function(req, res){})

// Cambiar el rol al usuario y la contraseña por parte del administrador
router.put('/change', async function(req,res){})


module.exports = router
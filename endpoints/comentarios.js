import express from 'express'
const router = express.Router()

// Id de la orden a la que pertenece, texto, id_usaurio 
router.post('/', async function(req, res){})

// Devuleve todos los comentarios de la Work Order
router.get('/:idWO', async function(req, res){})

module.exports = router

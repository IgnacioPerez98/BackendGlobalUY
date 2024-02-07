import express from 'express'
const router = express.Router()


// Recibe: titulo, nombre_proyecto, descripcion, fecha_fin_estado, 
//fecha_fin_proyecto, estado(id), asignados(opcional) 
router.post('/create', async function(req, res){})

router.get('/all', async function(req, res){})

// Recibe id de WO
    router.get('/:id', async function(req, res){})

/* Fecha de entrega, fecha de finalización estado, estado al que se cambia, usuarios que partenecen*/
router.put('/', async function(req, res){})


/* Filtros */

router.get('/filters', async function(req, res){
    /* Switch case gigante */
})

module.exports = router





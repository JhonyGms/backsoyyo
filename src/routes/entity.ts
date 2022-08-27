import express from 'express'
import * as entityServices from '../services/entityServices'
import * as response from '../shared/response/http.response'
const router = express.Router()

router.get('/', (_req, res) =>{
    res.send(entityServices.getEntity())
})

router.get('/:id', (req, res) =>{

    const id = +req.params.id
    if (id < 0 || id > 20 ) 
        return response.ERROR_RANGE_OUT(res, id) 

    const entity = entityServices.findById(+req.params.id)
    
    return (entity !== undefined)
    ? response.Ok(res, entity)
    : response.Error_Data_Input(res, entity)
})

export default router
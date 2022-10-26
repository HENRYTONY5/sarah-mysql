import {Router} from 'express'
import { createAgentes, getAgente, deleteAgentes, getAgentes, updateAgentes } from '../controllers/agentes.controllers.js'
const router = Router()

router.get('/agentes',getAgentes)

router.get('/agentes/:id',getAgente)

router.post('/agentes',createAgentes)

router.patch('/agentes/:id', updateAgentes) //patch apdate parcial

router.delete('/agentes/:id', deleteAgentes)

export default router

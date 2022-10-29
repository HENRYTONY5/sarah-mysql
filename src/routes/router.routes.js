import {register, login, isAuthenticated, logout} from '../controllers/authControllers'
import {Router} from 'express'
const router = Router()

router.post('/login', login)

router.post('/register', register)

router.get('/isAuthen', isAuthenticated)

router.get('/logout', logout)

export default router
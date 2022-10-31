
import  express  from "express";
import {register, login, isAuthenticated, logout} from '../controllers/authControllers.js'
import {Router} from 'express'
const router = Router()

router.get('/', isAuthenticated  ,(req, res) => {
    
    res.render('index', {user:req. user})
}) 

router.get('/login', (req, res) => {

    res.render('login', {alert:false})
})

router.get('/register', (req, res) => {

    res.render('register',{alert:false})
})
//router fot the methods    of the controllers
router.post('/login', login)

router.post('/register', register)

router.get('/isAuthenticated', isAuthenticated)

router.get('/logout', logout)

export default router
console.log('hola :]')
import  express  from "express";
import agentesRoutes from './routes/agentes.routes.js'
import indexR from './routes/index.routes.js'

const app = express();
app.use(express.json())

app.use(indexR)
app.use('/api',agentesRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'endpoint not found'
    })
})

export default app
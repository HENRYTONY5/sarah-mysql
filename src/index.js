import app from './app.js'
import {PORT} from './config.js'
app.listen(PORT)
console.log('server listening on port: http://localhost:8000', '& PORT:',PORT)
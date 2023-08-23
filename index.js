import 'dotenv/config.js'
import  express from "express";
import indexRouter from "./routes/indexRouter.js";
import cors from 'cors' 
import './config/database.js'


const server = express();
server.use(express.json());
server.use(cors())

server.use('/api', indexRouter)

server.get('/', (req,res,next)=>{
    res.send('Bienvenido a mi servidor')
});

server.listen(process.env.PORT, ()=>{console.log('Servidor corriendo en puerto ' + process.env['PORT']) })
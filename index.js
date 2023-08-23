import 'dotenv/config.js'
import  express from "express";
import indexRouter from "./routes/indexRouter.js";
import cors from 'cors' 
import './config/database.js'

const server = express();

const corsOptions = {
    origin: 'http://localhost:5173'
}

server.use(cors(corsOptions))
server.use(express.json());


server.use('/api', indexRouter)

server.get('/', (req,res,next)=>{
    res.send('Bienvenido a mi servidor')
});

server.listen(process.env.PORT, ()=>{console.log('Servidor corriendo en puerto ' + process.env['PORT']) })
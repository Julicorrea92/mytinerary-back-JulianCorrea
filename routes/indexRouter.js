import { Router } from 'express';
import usersRouter from './usersRouter.js';
import citiesRouter from './citiesRouter.js'

const indexRouter = Router();


indexRouter.get('/', (req, res, next)=>{
    console.log(req.params);
    res.send('Bienvenido a mi servidor en /api')
});

indexRouter.use('/users', usersRouter)
indexRouter.use('/cities', citiesRouter)


export default indexRouter;

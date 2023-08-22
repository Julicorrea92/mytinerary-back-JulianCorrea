import express from 'express';
import { Router } from 'express';
import citiesRouter from './users.js'
//const router = express.Router();

const router = Router()
router.use('/auth', citiesRouter)

export default router;

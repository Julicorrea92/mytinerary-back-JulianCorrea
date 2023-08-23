import { Router } from 'express';
import readCity  from '../controllers/cities/readCities.js'
import newCity from '../controllers/cities/createCity.js';

const citiesRouter = Router();
const { getAllCities, getOneCity } = readCity;
const { createCity } = newCity;


citiesRouter.get('/', getAllCities)
citiesRouter.get('/:city', getOneCity)
citiesRouter.post('/', createCity)

export default citiesRouter;
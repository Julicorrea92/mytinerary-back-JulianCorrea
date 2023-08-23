import { Router } from 'express';
import readCity from '../controllers/Cities/readCities.js';
import newCity from '../controllers/cities/createCity.js';
import updateCity from '../controllers/cities/updateCities.js';
import deleteCity from '../controllers/cities/deleteCities.js';

const citiesRouter = Router();
const { getAllCities, getOneCity } = readCity;
const { createCity } = newCity;
const { modifyCity } = updateCity;
const { clearCity } = deleteCity;


citiesRouter.get('/', getAllCities);
citiesRouter.get('/:id', getOneCity);
citiesRouter.post('/', createCity);
citiesRouter.put('/:id', modifyCity);
citiesRouter.delete('/:id', clearCity);


export default citiesRouter;
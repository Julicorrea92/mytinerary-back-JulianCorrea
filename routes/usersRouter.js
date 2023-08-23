import { Router } from 'express';
import readUser  from '../controllers/users/readUsers.js'

const usersRouter = Router();
const { getAllUsers, getOneUser } = readUser;


usersRouter.get('/', getAllUsers)
usersRouter.get('/:name', getOneUser)

export default usersRouter;
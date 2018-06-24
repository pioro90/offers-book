import { Router } from 'express';

import updateUser from './update-user';
import createUser from './create-user';
import findUsers from './find-users';
import getUser from './get-user';
import removeUser from './remove-user';


export default function (): Router {
    const router = Router();

    router.post('/', createUser);
    router.get('/', findUsers);
    router.get('/:id', getUser);
    router.delete('/:id', removeUser);
    router.put('/:id', updateUser);

    return router;
}

import { Router } from 'express';

import updateUser from './handleUpdateUser';
import createUser from './handleCreateUser';
import findUsers from './handleFindUsers';
import getUser from './handleGetUser';
import removeUser from './handleRemoveUser';

export const usersRootPath: string = '/users';

export default function (): Router {
    const router = Router();

    router.post('/', createUser);
    router.get('/', findUsers);
    router.get('/:id', getUser);
    router.delete('/:id', removeUser);
    router.put('/:id', updateUser);

    return router;
}

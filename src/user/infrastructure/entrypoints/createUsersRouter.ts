import { Router } from 'express';

import handleUpdateUser from './handleUpdateUser';
import handleCreateUser from './handleCreateUser';
import handleFindUsers from './handleFindUsers';
import handleGetUser from './handleGetUser';

export const usersRootPath: string = '/users';

export default function (): Router {
    const router = Router();

    router.post('/', handleCreateUser);
    router.get('/', handleFindUsers);
    router.get('/:id', handleGetUser);
    router.put('/:id', handleUpdateUser);

    return router;
}

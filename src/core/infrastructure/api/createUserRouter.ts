import { Router } from 'express';

import handleAddUser from './handleAddUser';
import handleGetUser from './handleGetUser';
import handleModifyUser from './handleModifyUser';

export const usersRootPath: string = '/users';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddUser);
    router.get('/:id', handleGetUser);
    router.put('/:id', handleModifyUser);

    return router;
}

import { Router } from 'express';

import handleAddUser from './handleAddUser';
import handleGetUser from './handleGetUser';

export const usersRootPath: string = '/users';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddUser);
    router.get('/:id', handleGetUser);

    return router;
}

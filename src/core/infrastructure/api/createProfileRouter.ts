import { Router } from 'express';
import handleAddProfile from './handleAddProfile';
import handleGetProfile from './handleGetProfile';
import handleAddRightsToProfile from './handleModifyProfile';


export const profilesRootPath: string = '/profiles';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddProfile);
    router.get('/:id', handleGetProfile);
    router.put('/:id', handleAddRightsToProfile);

    return router;
}

import { Router } from 'express';
import handleAddProfile from './handleAddProfile';
import handleGetProfile from './handleGetProfile';


export const profilesRootPath: string = '/profiles';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddProfile);
    router.get('/:id', handleGetProfile);

    return router;
}

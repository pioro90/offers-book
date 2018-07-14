import { Router } from 'express';
import handleAddProfile from './handleAddProfile';
import handleGetProfile from './handleGetProfile';
import handleAddRightsToProfile from './handleAddRightsToProfile';


export const profilesRootPath: string = '/profiles';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddProfile);
    router.get('/:id', handleGetProfile);
    router.post('/:id/rights', handleAddRightsToProfile);

    return router;
}

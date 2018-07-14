import { Router } from 'express';

import handleAddRight from './handleAddRight';
import handleGetRight from './handleGetRight';

export const rightsRootPath: string = '/rights';

export default function (): Router {
    const router = Router();

    router.post('/', handleAddRight);
    router.get('/:id', handleGetRight);

    return router;
}

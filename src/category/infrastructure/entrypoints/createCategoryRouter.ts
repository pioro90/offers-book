import { Router } from 'express';

import handleCreateCategory from './handleCreateCategory';
import handleCreateSubcategory from './handleCreateSubcategory';
import handleGetCategory from './handleGetCategory';

export const categoryRootPath: string = '/categories';

export default function (): Router {
    const router = Router();

    router.post('/', handleCreateCategory);
    router.post('/:id', handleCreateSubcategory);
    router.get('/:id', handleGetCategory);

    return router;
}

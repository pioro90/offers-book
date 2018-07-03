import { Router } from 'express';

import handleCreateCategory from './handleCreateCategory';
import handleCreateSubcategory from './handleCreateSubcategory';

export const categoryRootPath: string = '/categories';

export default function (): Router {
    const router = Router();

    router.post('/', handleCreateCategory);
    router.post('/:id', handleCreateSubcategory);

    return router;
}

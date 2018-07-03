import { Router } from 'express';

import handleCreateCategory from './handleCreateCategory';

export const categoryRootPath: string = '/categories';

export default function (): Router {
    const router = Router();

    router.post('/', handleCreateCategory);

    return router;
}

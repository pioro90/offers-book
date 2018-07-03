import * as httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';

import { CreateCategoryCommand } from '../../core/usecases/createcategory/CreateCategoryCommand';
import { CreateCategoryProvider } from '../database/CreateCategoryProvider';
import { categoryModel } from '../database/model/categoryModel';
import { CreateCategoryCommandHandler } from '../../core/usecases/createcategory/CreateCategoryCommandHandler';
import { Category } from '../../core/domain/Category';
import { ICreateCategoryProvider } from '../../core/usecases/createcategory/ICreateCategoryProvider';

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const createCategoryCommand: CreateCategoryCommand = req.body;
        const createCategoryProvider: ICreateCategoryProvider = new CreateCategoryProvider(categoryModel);
        const createCategoryCommandHandler: CreateCategoryCommandHandler = new CreateCategoryCommandHandler(createCategoryProvider);

        const category: Category = await createCategoryCommandHandler.handle(createCategoryCommand);
        res.status(httpStatus.CREATED).json(category);
    } catch (e) {
        next(e);
    }
}
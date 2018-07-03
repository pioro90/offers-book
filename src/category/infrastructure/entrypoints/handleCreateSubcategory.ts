import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { CreateSubcategoryCommand } from '../../core/usecases/createsubcategory/CreateSubcategoryCommand';
import { ICreateCategoryProvider } from '../../core/usecases/createcategory/ICreateCategoryProvider';
import { CreateCategoryProvider } from '../database/CreateCategoryProvider';
import { categoryModel } from '../database/model/categoryModel';
import { IGetCategoryProvider } from '../../core/usecases/createsubcategory/IGetCategoryProvider';
import { GetCategoryProvider } from '../database/GetCategoryProvider';
import { CreateSubcategoryCommandHandler } from '../../core/usecases/createsubcategory/CreateSubcategoryCommandHandler';
import { Category } from '../../core/domain/Category';
import { IUpdateCategoryProvider } from '../../core/usecases/createsubcategory/IUpdateCategoryProvider';
import { UpdateCategoryProvider } from '../database/UpdateCategoryProvider';

export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const createSubcategoryCommand = new CreateSubcategoryCommand(req.params.id,
            req.body.name,
            req.body.description);

        const createCategoryProvider: ICreateCategoryProvider = new CreateCategoryProvider(categoryModel);
        const getCategoryProvider: IGetCategoryProvider = new GetCategoryProvider(categoryModel);
        const updateCategoryProvider: IUpdateCategoryProvider = new UpdateCategoryProvider(categoryModel);

        const createSubcategoryCommandHandler: CreateSubcategoryCommandHandler = new CreateSubcategoryCommandHandler(createCategoryProvider,
            getCategoryProvider,
            updateCategoryProvider);

        const category: Category = await createSubcategoryCommandHandler.handle(createSubcategoryCommand);

        res.status(httpStatus.CREATED).json(category);
    } catch (e) {
        next(e);
    }
}
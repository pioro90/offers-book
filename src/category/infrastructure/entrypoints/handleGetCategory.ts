import { Category } from '../../core/domain/Category';
import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { IGetCategoryProvider } from '../../core/usecases/createsubcategory/IGetCategoryProvider';
import { GetCategoryProvider } from '../database/GetCategoryProvider';
import { categoryModel } from '../database/model/categoryModel';
import { GetCategoryCommandHandler } from '../../core/usecases/getcategory/GetCategoryCommandHandler';


export default async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const categoryId: string = req.params.id;

        const getCategoryProvider: IGetCategoryProvider = new GetCategoryProvider(categoryModel);
        const getCategoryCommandHandler: GetCategoryCommandHandler = new GetCategoryCommandHandler(getCategoryProvider);

        const category: Category = await getCategoryCommandHandler.handle(categoryId);

        res.status(httpStatus.CREATED).json(category);
    } catch (e) {
        next(e);
    }
}
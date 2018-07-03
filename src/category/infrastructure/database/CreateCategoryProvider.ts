import { ICreateCategoryProvider } from '../../core/usecases/createcategory/ICreateCategoryProvider';
import { CreateCategoryCommand } from '../../core/usecases/createcategory/CreateCategoryCommand';
import { Category } from '../../core/domain/Category';
import { ICategory } from './model/categoryModel';
import { Model } from 'mongoose';

export class CreateCategoryProvider implements ICreateCategoryProvider {

    constructor(private categoryModel: Model<ICategory>) {
    }

    createCategory(createCategoryCommand: CreateCategoryCommand): Promise<Category> {
        return this.categoryModel.create(createCategoryCommand)
            .then((categoryDocument: ICategory) => {
                return new Category(categoryDocument.name,
                    categoryDocument.description,
                    categoryDocument.createdAt,
                    categoryDocument.updatedAt,
                    categoryDocument.parent,
                    categoryDocument.ancestors,
                    categoryDocument.deletedAt);
            });
    }

}
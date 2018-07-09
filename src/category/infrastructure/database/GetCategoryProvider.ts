import { IGetCategoryProvider } from '../../core/usecases/createsubcategory/IGetCategoryProvider';
import { Category } from '../../core/domain/Category';
import { ICategory } from './model/categoryModel';
import { Model } from 'mongoose';

export class GetCategoryProvider implements IGetCategoryProvider {

    constructor(private categoryModel: Model<ICategory>) {
    }

    async getCategory(id: string): Promise<Category> {
        return this.categoryModel.findById(id)
            .exec()
            .then((categoryDocument: ICategory) => {
                return new Category(categoryDocument.id,
                    categoryDocument.name,
                    categoryDocument.description,
                    categoryDocument.createdAt,
                    categoryDocument.updatedAt,
                    categoryDocument.parent,
                    categoryDocument.ancestors,
                    categoryDocument.deletedAt);
            })
    }
}
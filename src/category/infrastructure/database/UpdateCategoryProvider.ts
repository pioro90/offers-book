import { IUpdateCategoryProvider } from '../../core/usecases/createsubcategory/IUpdateCategoryProvider';
import { Category } from '../../core/domain/Category';
import { Model } from 'mongoose';
import { ICategory } from './model/categoryModel';

export class UpdateCategoryProvider implements IUpdateCategoryProvider {

    constructor(private categoryModel: Model<ICategory>) {
    }

    async updateCategory(category: Category): Promise<void> {
        const categoryDocument: ICategory = await this.categoryModel.findById(category.id);
        categoryDocument.set({
            parent: category.parent,

        });
        await categoryDocument.save();

        return Promise.resolve();
    }

}
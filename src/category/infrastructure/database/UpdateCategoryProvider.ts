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
            name: category.name,
            description: category.description,
            parent: category.parent,
            ancestors: category.ancestors
        });

        await categoryDocument.save();

        return Promise.resolve();
    }

}
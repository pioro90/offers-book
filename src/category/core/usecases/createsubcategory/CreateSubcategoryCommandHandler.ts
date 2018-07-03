import { CommandHandler } from 'offers-book-cqrs/src/command/command-handler';
import { CreateSubcategoryCommand } from './CreateSubcategoryCommand';
import { ICategory } from '../../domain/category';
import { Category } from '../../domain/Category';
import { ICreateCategoryProvider } from '../createcategory/ICreateCategoryProvider';
import { IGetCategoryProvider } from './IGetCategoryProvider';
import { IUpdateCategoryProvider } from './IUpdateCategoryProvider';


export class CreateSubcategoryCommandHandler implements CommandHandler<CreateSubcategoryCommand, Promise<Category>> {

    constructor(private createCategoryProvider: ICreateCategoryProvider,
                private getCategoryProvider: IGetCategoryProvider,
                private updateCategoryProvider: IUpdateCategoryProvider) {
    }

    async handle(command: CreateSubcategoryCommand): Promise<Category> {
        const {name, description, parentId} = command;
        const category: Category = await this.createCategoryProvider.createCategory({name, description});
        const parentCategory: Category = await this.getCategoryProvider.getCategory(parentId);

        const parentAncestors = [...parentCategory.ancestors];

        category.parent = parentCategory.id;
        category.ancestors = [parentCategory.id, ...parentAncestors];

        await this.updateCategoryProvider.updateCategory(category);
        return category;
    }
}
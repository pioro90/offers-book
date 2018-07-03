import { CreateCategoryCommand } from './CreateCategoryCommand';
import { Category } from '../../domain/Category';

export interface ICreateCategoryProvider {
    createCategory(createCategoryCommand: CreateCategoryCommand): Promise<Category>;
}
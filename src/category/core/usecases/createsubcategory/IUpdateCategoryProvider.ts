import { Category } from '../../domain/Category';

export interface IUpdateCategoryProvider {
    updateCategory(category: Category): Promise<void>;
}
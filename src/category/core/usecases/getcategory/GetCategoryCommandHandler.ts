import { CommandHandler } from 'offers-book-cqrs/src/command/command-handler';
import { IGetCategoryProvider } from '../createsubcategory/IGetCategoryProvider';
import { Category } from '../../domain/Category';

export class GetCategoryCommandHandler implements CommandHandler<string, Promise<Category>> {

    constructor(private getCategoryProvider: IGetCategoryProvider) {
    }

    async handle(id: string): Promise<Category> {
        return this.getCategoryProvider.getCategory(id);
    }

}
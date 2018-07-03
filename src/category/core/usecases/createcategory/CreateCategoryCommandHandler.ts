import { CreateCategoryCommand } from './CreateCategoryCommand';
import { Category } from '../../domain/Category';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';
import { ICreateCategoryProvider } from './ICreateCategoryProvider';


export class CreateCategoryCommandHandler implements ICommandHandler<CreateCategoryCommand, Promise<Category>> {

    constructor(private createCategoryProvider: ICreateCategoryProvider) {
    }

    async handle(command: CreateCategoryCommand): Promise<Category> {
        return this.createCategoryProvider.createCategory(command);
    }

}
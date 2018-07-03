import { CreateUserCommand } from './CreateUserCommand';
import { Category } from '../../../../category/core/domain/Category';

export interface ICreateCategoryProvider {
    createUser(createUserCommand: CreateUserCommand): Promise<Category>;
}
import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../domain/User';
import { ICreateCategoryProvider } from './ICreateUserProvider';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';


export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand, Promise<User>> {

    constructor(private createUserProvider: ICreateCategoryProvider) {
    }

    async handle(command: CreateUserCommand): Promise<User> {
        return this.createUserProvider.createUser(command);
    }
}
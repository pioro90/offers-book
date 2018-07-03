import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../domain/User';
import { ICreateUserProvider } from './ICreateUserProvider';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';


export class CreateUserCommandHandler implements ICommandHandler<CreateUserCommand> {

    constructor(private createUserProvider: ICreateUserProvider) {
    }

    async handle(command: CreateUserCommand): Promise<User> {
        return this.createUserProvider.createUser(command);
    }
}
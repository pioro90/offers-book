import { AddUserCommand } from './AddUserCommand';
import { User } from '../../domain/user/User';
import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { UserRepository } from '../../domain/user/UserRepository';
import { UserFactory } from '../../domain/user/UserFactory';


export class AddUserCommandHandler implements ICommandHandler<AddUserCommand, Promise<string>> {

    constructor(private userRepository: UserRepository,
                private userFactory: UserFactory) {
    }

    async handle(command: AddUserCommand): Promise<string> {
        // TODO command validation

        const user: User = this.userFactory.createUser(command);
        await this.userRepository.save(user);
        return user.aggregateId.id;
    }
}
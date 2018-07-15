import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { ModifyUserCommand } from './ModifyUserCommand';
import { UserRepository } from '../../domain/user/UserRepository';
import { User } from '../../domain/user/User';

export class ModifyUserCommandHandler implements ICommandHandler<ModifyUserCommand, void> {

    constructor(private userRepository: UserRepository) {
    }


    async handle(command: ModifyUserCommand): void {
        const {id, firstName, lastName, password, profilesChange: {removed, added}} = command;

        const user: User = await this.userRepository.load(id);

        if (firstName) {
            user.changeFirstName(firstName);
        }

        if (lastName) {
            user.changeLastName(lastName);
        }

        if (password) {
            user.changePassword(password);
        }

        if (added) {
            user.addProfiles(added);
        }

        if (removed) {
            user.removeProfiles(removed);
        }

        await this.userRepository.save(user);
    }
}
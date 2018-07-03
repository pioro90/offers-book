import { IUpdateUserProvider } from './IUpdateUserProvider';
import { UpdateUserCommand } from './UpdateUserCommand';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';


export class UpdateUserCommandHandler implements ICommandHandler<UpdateUserCommand> {

    constructor(private updateUserProvider: IUpdateUserProvider) {
    }

    async handle(command: UpdateUserCommand): Promise<void> {
        return this.updateUserProvider.updateUser(command);
    }
}
import { FindUsersCommand } from './FindUsersCommand';
import { IFindUsersProvider } from './IFindUsersProvider';
import { User } from '../../domain/User';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';


export class FindUsersCommandHandler implements ICommandHandler<FindUsersCommand, Promise<User[]>> {

    constructor(private findUsersProvider: IFindUsersProvider) {
    }

    handle(command: FindUsersCommand): Promise<User[]> {
        return this.findUsersProvider.findUsers(command);
    }
}
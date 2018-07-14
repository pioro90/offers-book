import { ICommandHandler } from '../../../common/cqrs/ICommandHandler';
import { GetUserCommand } from './GetUserCommand';
import { UserFinder } from '../../readmodel/UserFinder';
import { UserView } from '../../readmodel/UserView';
import { UserQuery } from '../../readmodel/UserQuery';

export class GetUserCommandHandler implements ICommandHandler<GetUserCommand, Promise<UserView>> {

    constructor(private userFinder: UserFinder) {
    }

    handle(command: GetUserCommand): Promise<UserView> {
        // TODO validation
        const query: UserQuery = command as UserQuery;
        return this.userFinder.find(command)
    }
}
import { IGetUserProvider } from './IGetUserProvider';
import { User } from '../../domain/User';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';

export class GetUserCommandHandler implements ICommandHandler<string, Promise<User>> {

    constructor(private getUserProvider: IGetUserProvider) {
    }

    handle(id: string): Promise<User> {
        return this.getUserProvider.getUser(id);
    }
}
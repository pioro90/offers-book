import { IRemoveUserProvider } from './IRemoveUserProvider';
import { ICommandHandler } from '../../../../common/cqrs/ICommandHandler';


export class RemoveUserCommandHandler implements ICommandHandler<string> {

    constructor(private removeUserProvider: IRemoveUserProvider) {
    }

    async handle(id: string): Promise<void> {
        return this.removeUserProvider.removeUser(id);
    }

}
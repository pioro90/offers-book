import { IRemoveUserProvider } from './IRemoveUserProvider';


export class RemoveUserUseCase {

    constructor(private removeUserProvider: IRemoveUserProvider) {
    }

    async removeUser(id: string): Promise<void> {
        return this.removeUserProvider.removeUser(id);
    }

}
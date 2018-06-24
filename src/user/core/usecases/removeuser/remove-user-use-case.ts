import { IRemoveUserProvider } from './remove-user-provider';


export class RemoveUserUseCase {

    constructor(private removeUserProvider: IRemoveUserProvider) {
    }

    async removeUser(id: string): Promise<void> {
        return this.removeUserProvider.removeUser(id);
    }

}
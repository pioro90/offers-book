import { IGetUserProvider } from './get-user-provider';
import { User } from '../../domain/user';

export class GetUserUseCase {

    constructor(private getUserProvider: IGetUserProvider) {
    }

    getUser(id: string): Promise<User> {
        return this.getUserProvider.getUser(id);
    }
}